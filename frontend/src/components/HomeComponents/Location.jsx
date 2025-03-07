import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoc } from "../../Context/DistContext";

export default function Location() {
  const navigate = useNavigate();

  const { state, setState, dist, setdist } = useLoc();

  console.log(state, dist);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state && dist) {
      navigate(`/markets?state=${state}&district=${dist}`);
    }
  };

  return (
    <div className="border">
      <section id="search" className="py-24 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4" id="el-hofwi0w9">
          <div className="max-w-4xl mx-auto" id="el-ds43ad6j">
            <div className="text-center mb-8" id="el-4c6vb6i8">
              <h2
                className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mt-10 mb-3"
                id="el-qr71hbxy"
              >
                Find Markets Near You
              </h2>
              <p
                className="text-gray-600 dark:text-gray-300 text-lg"
                id="el-90bk1lvu"
              >
                Discover fresh produce, artisanal goods, and sustainable
                products at your local farmers markets
              </p>
            </div>
            <div
              className="bg-green-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg"
              id="el-72n8kybq"
            >
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                id="el-x7v3cnre"
              >
                <div className="gap-4" id="el-zv7ufp56">
                  <div className="relative" id="el-2n0l37zz">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      id="el-dfgn8agb"
                    >
                      State
                    </label>
                    <div className="relative" id="el-d2vlwpub">
                      <div
                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                        id="el-pnkmcpui"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          id="el-nsiau1bv"
                        >
                          <path
                            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                            id="el-4digfvlq"
                          ></path>
                          <circle
                            cx="12"
                            cy="10"
                            r="3"
                            id="el-c1rkmj06"
                          ></circle>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-green-500 dark:focus:border-green-400"
                      />
                    </div>

                    <label
                      htmlFor="district-city"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 mt-2"
                      id="el-dfgn8agb"
                    >
                      District/City
                    </label>
                    <div className="relative" id="el-d2vlwpub">
                      <div
                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                        id="el-pnkmcpui"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          id="el-nsiau1bv"
                        >
                          <path
                            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                            id="el-4digfvlq"
                          ></path>
                          <circle
                            cx="12"
                            cy="10"
                            r="3"
                            id="el-c1rkmj06"
                          ></circle>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="district-city"
                        name="district-city"
                        placeholder="Enter district/city"
                        value={dist}
                        onChange={(e) => setdist(e.target.value)}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-green-500 dark:focus:border-green-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-2" id="el-9z74n0zi">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white dark:text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-full md:w-auto"
                    id="el-8xcuku92"
                  >
                    <div
                      className="flex items-center justify-center"
                      id="el-la1yr0g4"
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
                        id="el-cpcw4f4z"
                      >
                        <circle cx="11" cy="11" r="8" id="el-9iczjsnw"></circle>
                        <line
                          x1="21"
                          y1="21"
                          x2="16.65"
                          y2="16.65"
                          id="el-v42hzodu"
                        ></line>
                      </svg>
                      Search Markets
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
