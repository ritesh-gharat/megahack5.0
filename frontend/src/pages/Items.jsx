import React from "react";
import {
  lauki,
  // asparagus,
  // beans,
  // brinjal,
  // cucumber,
  // jamun,
  // karela,
  // mango,
  // musk,
  // okra,
  // pineapple,
  // watermelon,
} from "../assets/assets";
import Navbar from "../components/homeComponents/Navbar";
// import { asparagus, beans, brinjal, cucumber, jamun, karela, lauki, mango, musk, okra, pineapple, watermelon } from '../../assets/assets'

export default function Items() {
  return (
    <div>
      <Navbar />
      <section
        id="seasonal-produce"
        class="py-12 h-screen md:py-16 lg:py-20 bg-green-50 dark:bg-gray-800"
      >
        <div class="container mx-auto px-4" id="el-cf0dof0v">
          <div class="text-center mb-12" id="el-1crlnezn">
            <h2
              class="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3"
              id="el-lk0yp3gt"
            >
              Products in the market
            </h2>
          </div>

          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            id="el-z96ot3zn"
          >
            <div
              class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              id="el-9q2pg17n"
            >
              <div
                class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden"
                id="el-hycu0e1t"
              >
                <div
                  class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800"
                  id="el-7ygg4gh4"
                >
                  <img src={lauki} alt="" />
                </div>
              </div>
              <div class="p-3 text-center" id="el-kitqgd76">
                <h3
                  class="font-semibold text-gray-900 dark:text-white"
                  id="el-14b3a3qq"
                >
                  Lauki
                </h3>
                <p
                  class="text-sm text-gray-500 dark:text-gray-400"
                  id="el-ycg689pt"
                >
                  Apr - Jun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
