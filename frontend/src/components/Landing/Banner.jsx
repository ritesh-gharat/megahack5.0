import React from "react";
import { NavLink } from "react-router-dom";
import { farmer } from "../../assets/assets";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-green-700/30 z-10 flex items-center justify-center"
        id="el-8iwzgzsj"
      >
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={farmer} type="video/mp4" />
            {t('yourBrowserDoesNotSupportTheVideoTag')}
          </video>
        </div>
        <div
          className="container w-full h-full flex items-center justify-center py-16 md:py-24 lg:py-32 relative z-20"
          id="el-6v287e0g"
        >
          <div className="max-w-3xl mx-auto text-center px-10" id="el-07iyt8x3">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up"
              id="el-vx0xxgb6"
            >
              {t('find Fresh Local Produce Near You')}
            </h1>
            <p
              className="text-lg sm:text-sm md:text-xl text-white mb-8 animate-fade-in-up animation-delay-300"
              id="el-2m8aiznz"
            >
              {t('connect With Local Farmers Markets')}
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600"
              id="el-65gga54q"
            >
              <NavLink
                to="/home"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                id="el-dlpfhk40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="el-usxanqr4"
                >
                  <circle cx="11" cy="11" r="8" id="el-pwy6x7bf"></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    id="el-qjyiq63c"
                  ></line>
                </svg>
                {t('find Markets Near Me')}
              </NavLink>
              <NavLink
                to="/items"
                className="bg-white hover:bg-gray-100 text-green-800 py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                id="el-4inb6b1l"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="el-frogz8cl"
                >
                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                    id="el-89gcoi6t"
                  ></path>
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    id="el-p1wjbz8x"
                  ></path>
                </svg>
                {t('browse Seasonal Products')}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
