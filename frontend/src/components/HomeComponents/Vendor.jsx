import React from "react";
import { mango } from "../../assets/assets";
import "../homeComponents/Style.css";

const vendors = [
  {
    name: "Smit Barve",
    description: "Mumbai",
    image: mango,
    review: "Great quality products and timely delivery.",
  },
  {
    name: "John Doe",
    description: "Consectetur ",
    image: mango,
    review: "Very satisfied with the service.",
  },
  {
    name: "Jane Smith",
    description: "Sed do eiusmod tempor.",
    image: mango,
    review: "Excellent customer support.",
  },
  {
    name: "Alice Johnson",
    description: "Incididunt ut labore et dolore.",
    image: mango,
    review: "Highly recommend for organic products.",
  },
  {
    name: "Bob Brown",
    description: "Magna aliqua. Ut enim ad minim.",
    image: mango,
    review: "Good variety of products and reasonable prices.",
  },
  {
    name: "Charlie Davis",
    description: "Veniam, quis nostrud exercitation.",
    image: mango,
    review: "Reliable and trustworthy vendor.",
  },
];

export default function Vendors() {
  return (
    <div>
      <h2
      className  ="text-3xl md:text-3xl text-center bg-gray-800 p-10 font-bold text-green-800 dark:text-green-300 "
        id="el-qr71hbxy"
      >
        Top Vendors in the market
      </h2>
      <div className="h-[25vh] no-scrollbar bg-gray-800 flex items-center p-2 gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-mb-1.5">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="h-full bg-gray-600 w-[400px] rounded-md flex justify-start items-center gap-4 p-2 shrink-0"
          >
            <div
              className="h-[80px] w-[80px] bg-black rounded-full"
              style={{
                backgroundImage: `url(${vendor.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div>
              <h3 className="text-white font-bold">{vendor.name}</h3>
              <p className="text-gray-400">{vendor.description}</p>
              <p className="text-gray-300 italic text-wrap">"{vendor.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}