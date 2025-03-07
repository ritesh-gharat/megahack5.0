import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MarketMap from "../components/MarketMap/MarketMap";

export default function Markets() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const district = searchParams.get("district");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [userDistrict, setUserDistrict] = useState("");
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

  const getImages = async (commodity) => {
    if (!commodity) return;

    // If we already have the image URL cached, return it
    if (commodityImages[commodity]) {
      return commodityImages[commodity];
    }

    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_PIXABAY_API_KEY
        }&q=${encodeURIComponent(commodity)}&image_type=photo&per_page=3`
      );

      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();

      if (data.hits && data.hits.length > 0) {
        // Update the commodityImages state with the new image URL
        setCommodityImages(prev => ({
          ...prev,
          [commodity]: data.hits[0].webformatURL
        }));
        return data.hits[0].webformatURL;
      }
      
      // If no image found, store a placeholder
      setCommodityImages(prev => ({
        ...prev,
        [commodity]: '/placeholder-image.jpg' // Add a default placeholder image
      }));
      return '/placeholder-image.jpg';
    } catch (err) {
      console.error(`Error fetching image for ${commodity}:`, err);
      return '/placeholder-image.jpg';
    }
  };

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

        <MarketMap markets={marketData} nearestMarket={nearestMarket} />

        {nearestMarket && (
          <div className="bg-yellow-100 p-4 rounded-md mb-6">
            <h3 className="text-xl font-bold">
              Nearest Market: {nearestMarket.Market}
            </h3>
            <p>
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
                      {commodityImages[commodity] ? (
                        <img 
                          className="w-full h-full object-cover"
                          src={commodityImages[commodity]} 
                          alt={commodity}
                          loading="lazy"
                        />
                      ) : (
                        <div className="animate-pulse w-full h-full bg-gray-200 dark:bg-gray-700" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    </div>
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
    </div>
  );
}
