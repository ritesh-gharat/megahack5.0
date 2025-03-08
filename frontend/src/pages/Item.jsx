import React from "react";
import commoditiesData from "../assets/commodities_images.json";
console.log(commoditiesData);

function Item() {
  return (
    <div className="bg-green-400 p-5">
      <h1 className="text-4xl text-center">Seasonals Products</h1>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 p-3 bg-green-400"
        id="el-z96ot3zn"
      >
        {commoditiesData.commodities.map((commodity, idx) => (
          <div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            key={`nearest-commodity-${idx}`}
          >
            <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img
                  className="w-full h-full object-cover"
                  src={commodity.imageUrl}
                  alt={commodity.commodity}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"></div>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {commodity.commodity}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
