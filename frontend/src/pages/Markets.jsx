import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MarketMap from "../components/MarketMap/MarketMap";

export default function Markets() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const district = searchParams.get("district");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userDistrict, setUserDistrict] = useState("");
  const [nearestMarket, setNearestMarket] = useState(null);

  useEffect(() => {
    if (!state) return;
    setLoading(true);
    const url = `http://34.121.0.250:8000/${encodeURIComponent(state)}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch market data");
        return response.json();
      })
      .then((data) => {
        setMarketData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [state, district]);

  const handleDistrictChange = (e) => setUserDistrict(e.target.value);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const findNearestMarket = async () => {
    if (!userDistrict || !marketData) return;

    try {
      const response = await fetch(
        `http://34.121.0.250:8000/${state}/${userDistrict}`
      );
      if (!response.ok) throw new Error("District not found");
      const districtMarkets = await response.json();
      if (districtMarkets.length === 0) return;

      const centerLat =
        districtMarkets.reduce((sum, m) => sum + parseFloat(m.lat[0]), 0) /
        districtMarkets.length;
      const centerLng =
        districtMarkets.reduce((sum, m) => sum + parseFloat(m.lng[0]), 0) /
        districtMarkets.length;

      let minDistance = Infinity;
      let closestMarket = null;
      marketData.forEach((market) => {
        const marketLat = parseFloat(market.lat[0]);
        const marketLng = parseFloat(market.lng[0]);
        const distance = calculateDistance(
          centerLat,
          centerLng,
          marketLat,
          marketLng
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestMarket = market;
        }
      });
      setNearestMarket(closestMarket);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-12 text-red-600">
        Error: {error.message}
      </div>
    );
  if (!state || !marketData)
    return (
      <div className="text-center py-12">Please search for a location.</div>
    );

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-12 text-center">
          Markets in {district ? `${district}, ` : ""}
          {state}
        </h2>

        {district && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Find Nearest Market</h3>
            <input
              type="text"
              value={userDistrict}
              onChange={handleDistrictChange}
              placeholder="Enter your district"
              className="border p-2 mr-2 rounded"
            />
            <button
              onClick={findNearestMarket}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Find
            </button>
          </div>
        )}

        {nearestMarket && (
          <div className="bg-yellow-100 p-4 rounded-md mb-6">
            <h3 className="text-xl font-bold">
              Nearest Market: {nearestMarket.Market}
            </h3>
            <p>
              Location: {nearestMarket.lat[0]}, {nearestMarket.lng[0]}
            </p>
            <h4 className="font-semibold">Commodities</h4>
            {nearestMarket.commodities.map((commodity, idx) => (
              <p key={`nearest-commodity-${idx}`}>
                {commodity}: ₹
                {nearestMarket.prices[idx].toLocaleString("en-IN")}
              </p>
            ))}
          </div>
        )}

        <MarketMap markets={marketData} nearestMarket={nearestMarket} />
      </div>
    </div>
  );
}
