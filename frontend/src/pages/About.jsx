import React from "react";

const About = () => {
  return (
    <div className="w-full mx-auto px-4 py-20 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        About Farmers' Market Finder
      </h1>

      <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-green-800 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          Farmers' Market Finder connects local communities with fresh,
          sustainable produce by making it easier to discover and shop at
          farmers' markets near you. We believe in supporting local farmers,
          reducing food miles, and providing everyone access to healthy,
          seasonal food options.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-grey-800 p-5 rounded-lg shadow border border-green-100">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            For Consumers
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                Discover nearby farmers' markets based on your location
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                View detailed information about vendors and available products
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Compare pricing across different markets and vendors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Get real-time updates on product availability</span>
            </li>
          </ul>
        </div>

        <div className="bg-grey-800 p-5 rounded-lg shadow border border-green-100">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            For Vendors
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Showcase your products to local consumers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Update product availability and pricing in real-time</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Connect directly with your community</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Gain insights through customer feedback</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-grey-800 p-4 rounded-lg shadow">
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-3">
              <span className="text-2xl text-green-700">📍</span>
            </div>
            <h3 className="font-medium text-green-700 mb-2">Locate</h3>
            <p className="text-sm text-gray-600">
              Find farmers' markets near you with our location-based search
            </p>
          </div>

          <div className="bg-grey-800 p-4 rounded-lg shadow">
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-3">
              <span className="text-2xl text-green-700">🔍</span>
            </div>
            <h3 className="font-medium text-green-700 mb-2">Discover</h3>
            <p className="text-sm text-gray-600">
              Browse vendors, products, and pricing information
            </p>
          </div>

          <div className="bg-grey-800 p-4 rounded-lg shadow">
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-3">
              <span className="text-2xl text-green-700">🥕</span>
            </div>
            <h3 className="font-medium text-green-700 mb-2">Shop</h3>
            <p className="text-sm text-gray-600">
              Support local farmers and enjoy fresh, sustainable produce
            </p>
          </div>
        </div>
      </div>

      <div className="bg-grey-800 p-6 rounded-lg shadow-md border border-green-100">
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          Sustainability Impact
        </h2>
        <p className="text-gray-700 mb-4">
          By choosing to shop at local farmers' markets, you're making a
          positive impact on the environment and your community:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <span className="text-green-700">🌱</span>
            </div>
            <div>
              <h3 className="font-medium text-green-700">Reduced Food Miles</h3>
              <p className="text-sm text-gray-600">
                Lower carbon footprint from transportation
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <span className="text-green-700">👨‍🌾</span>
            </div>
            <div>
              <h3 className="font-medium text-green-700">
                Support Local Economy
              </h3>
              <p className="text-sm text-gray-600">
                Keep money circulating in your community
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <span className="text-green-700">🍎</span>
            </div>
            <div>
              <h3 className="font-medium text-green-700">Fresher Produce</h3>
              <p className="text-sm text-gray-600">
                Food that hasn't traveled long distances tastes better
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <span className="text-green-700">♻️</span>
            </div>
            <div>
              <h3 className="font-medium text-green-700">
                Less Packaging Waste
              </h3>
              <p className="text-sm text-gray-600">
                Many farmers' market vendors use minimal packaging
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 italic">
          "Connecting communities to fresh, local food since 2025"
        </p>
      </div>
    </div>
  );
};

export default About;
