import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MarketMap from "../components/MarketMap/MarketMap";
import Chat from "../components/Chatbot/Chat";
import commoditiesData from "../assets/commodities_images.json";


// import { useLoc } from "../Context/DistContext";

export default function Markets() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const district = searchParams.get("district");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userDistrict, setUserDistrict] = useState(district);
  const [nearestMarket, setNearestMarket] = useState(null);
  const [commodityImages, setCommodityImages] = useState({});

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

  const getImages = (commodity) => {
    if (!commodity) return;

    // Check if we already have the image URL in our state
    if (commodityImages[commodity]) {
      return commodityImages[commodity];
    }

    console.log(commodity);

    // Find the commodity in our JSON data
    const commodityInfo = commoditiesData.commodities.find(
      (com) => com.commodity.toLowerCase() === commodity.toLowerCase()
    );

    if (commodityInfo) {
      console.log(commodityInfo.imageUrl);
      // Cache the image URL in state
      setCommodityImages((prev) => ({
        ...prev,
        [commodity]: commodityInfo.imageUrl,
      }));
      return commodityInfo.imageUrl;
    }

    return;
  };

  return (
    <div className="py-12 md:py-20 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-12 text-center">
          Markets in {district ? `${district}, ` : ""}
          {state}
        </h2>

        {district && (
          <div className="flex justify-center items-center flex-col mb-6">
            <h3 className="text-xl text-gray-500 font-bold mb-2">
              Find Nearest Market
            </h3>
            <input
              type="text"
              value={userDistrict}
              onChange={handleDistrictChange}
              placeholder="Enter your district"
              className="w-[40%]  border p-2 mr-2 rounded text-amber-50 m-2 "
            />
            <button
              onClick={findNearestMarket}
              className="bg-green-500 text-white p-2 rounded w-[40%] mr-2  "
            >
              Find
            </button>
          </div>
        )}

        <MarketMap markets={marketData} nearestMarket={nearestMarket} />

        {nearestMarket && (
          <div className="bg-green-100 p-4 rounded-md mb-6 mt-7">
            <h3 className="text-xl font-bold mb-1">
              Nearest Market: {nearestMarket.Market}
            </h3>
            <p className="mb-1.5">
              Location: {nearestMarket.lat[0]}, {nearestMarket.lng[0]}
            </p>

            <h4 className="font-semibold">Commodities</h4>

            <div
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
              id="el-z96ot3zn"
            >
              {nearestMarket.commodities.map((commodity, idx) => (
                <div
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  key={`nearest-commodity-${idx}`}
                >
                  <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      {getImages(commodity) ? (
                        <img
                          className="w-full h-full object-cover"
                          src={getImages(commodity)}
                          alt={commodity}
                          loading="lazy"
                        />
                      ) : (
                        <div className="animate-pulse w-full h-full bg-gray-200 dark:bg-gray-700" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"></div>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {commodity}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ₹ {nearestMarket.prices[idx].toLocaleString("en-IN")}/- Q
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Chat />
    </div>
  );
}
