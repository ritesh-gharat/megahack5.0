import React, { useState, useEffect, useRef } from "react";
import MarketMarker from "../../assets/market-icon32.png";

// MarketsMap component using Google Maps
export default function MarketMap({ markets, nearestMarket }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load Google Maps script dynamically
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        }`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!mapRef.current) return;

      // Parse market coordinates
      const positions = markets
        .map((market) => ({
          lat: parseFloat(market.lat[0]),
          lng: parseFloat(market.lng[0]),
        }))
        .filter((pos) => !isNaN(pos.lat) && !isNaN(pos.lng));

      if (positions.length === 0) return;

      // Calculate center of all markets
      const centerLat =
        positions.reduce((sum, pos) => sum + pos.lat, 0) / positions.length;
      const centerLng =
        positions.reduce((sum, pos) => sum + pos.lng, 0) / positions.length;
      const center = { lat: centerLat, lng: centerLng };

      // Initialize Google Map
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 7,
      });
      setMap(mapInstance);

      // Fit map to all markers
      const bounds = new window.google.maps.LatLngBounds();
      positions.forEach((pos) => bounds.extend(pos));
      mapInstance.fitBounds(bounds);

      // Create info window for marker details
      const infoWindow = new window.google.maps.InfoWindow();

      // Add markers for each market
      positions.forEach((position, index) => {
        const market = markets[index];
        const isNearest = market === nearestMarket;
        const marker = new window.google.maps.Marker({
          position: position,
          map: mapInstance,
          title: market.Market,
          icon: isNearest ? undefined : MarketMarker,
        });

        // Add click event to show info window
        marker.addListener("click", () => {
          const content = `
            <div>
              <h3 class="font-bold text-lg">${market.Market}</h3>
              ${
                isNearest
                  ? '<p class="text-red-600 font-semibold">Nearest Market!</p>'
                  : ""
              }
              <p class="text-sm text-gray-600">${
                market.commodities.length
              } commodities available</p>
            </div>
          `;
          infoWindow.setContent(content);
          infoWindow.open(mapInstance, marker);
        });
      });

      // Add circle around the nearest market
      if (nearestMarket) {
        const nearestMarketPosition = {
          lat: parseFloat(nearestMarket.lat[0]),
          lng: parseFloat(nearestMarket.lng[0]),
        };

        new window.google.maps.Circle({
          map: mapInstance,
          radius: 2000, // Radius in meters
          fillColor: "#AA0000",
          stoke: "#FF0000",
          center: nearestMarketPosition,
        });
      }
    };

    loadGoogleMaps();

    // Cleanup
    return () => {
      if (map) {
        map.setMap(null);
      }
    };
  }, [markets, nearestMarket]);

  return <div ref={mapRef} style={{ height: "600px", width: "100%", borderRadius: "10px" }} />;
}
