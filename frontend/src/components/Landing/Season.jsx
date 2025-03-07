import React from 'react'
import { asparagus, beans, brinjal, cucumber, jamun, karela, lauki, mango, musk, okra, pineapple, watermelon } from '../../assets/assets'

export default function Season() {
  return (
    <div>
      <section id="seasonal-produce" class="py-12 md:py-16 lg:py-20 bg-green-50 dark:bg-gray-800">
    <div class="container mx-auto px-4" id="el-cf0dof0v">
      <div class="text-center mb-12" id="el-1crlnezn">
        <h2 class="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3" id="el-lk0yp3gt">What's In Season</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" id="el-qa5puyor">Discover the freshest seasonal produce available at your local farmers markets right now</p>
      </div>

      {/* <!-- Category Filters --> */}
      <div class="flex overflow-x-auto pb-4 md:flex-wrap md:justify-center mb-8 no-scrollbar" id="el-jiv64t9u">
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-02mc052k">
          All Produce
        </button>
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-vzbl79z4">
          Vegetables
        </button>
        <button class="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-3f7bhiey">
          Fruits
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6" id="el-z96ot3zn">
      
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-9q2pg17n">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-hycu0e1t">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-7ygg4gh4">
              <img src={lauki} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-qjtvcdpp">
              <span class="text-white text-sm" id="el-cf5t11ky">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-kitqgd76">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-14b3a3qq">Lauki</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-ycg689pt">Apr - Jun</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-gkq4k074">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-n5kup1h2">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-fgo8up52">
              <img src={cucumber} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-123jnmz3">
              <span class="text-white text-sm" id="el-mz34b9lj">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-52x5vqpv">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-1oxfyxpa">Cucumber</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-br6599ia">Apr - Jun</p>
          </div>
        </div>
        
      
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-pzpxjsdm">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-f17esp8x">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-igo6u07r">
              <img src={karela} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-zduvcytt">
              <span class="text-white text-sm" id="el-lq0241i9">Just Starting</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-8aoa1vio">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-sl01syyf">Karela (Bitter Guord)</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-inbarq08">Mar - Jun</p>
          </div>
        </div>
        
       
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-cph74hzb">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-bewk55hc">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-oh3hnj83">
                <img src={brinjal} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-guk0nwho">
              <span class="text-white text-sm" id="el-ccymmuj7">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-4n61crq1">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-gu3fy4y0">Brinjal (Baingan)</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-rtzor5iq">Mar - Jun</p>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-9nbg2s8m">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-eovg1uq6">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-x59z7avy">
              <img src={okra} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-3m4m6hc1">
              <span class="text-white text-sm" id="el-0lcpw69g">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-yi7ey6s1">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-1agziu22">Okra (Bhindi)</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-17cir583">Mar - Jun</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-ib2pvf8y">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-o6f02j4z">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-41oke0wh">
              <img src={beans} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-u4j0q1l6">
              <span class="text-white text-sm" id="el-jitxi52m">Just Starting</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-x8y5jv6n">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-4xdbirhy">Green beans</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-kbq7nuwv">Apr - Jun</p>
          </div>
        </div>
        
       
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-zp00s6uk">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-aozwzkjv">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-akm45ffr">
              <img src={mango} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-grbu06rv">
              <span class="text-white text-sm" id="el-rryrjef5">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-ce7i0o5q">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-hrjl0mxs">Mango</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-izs1mif0">Mar - May</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-h6xi7lf3">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-7sxflkuf">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-x55hsmkj">
            <img src={watermelon} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-h07iih6h">
              <span class="text-white text-sm" id="el-rpvgqhbh">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-bk57oeor">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-a37ovrwg">Watermelon</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-3cmlq68v">Apr - Oct</p>
          </div>
        </div>
        
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-4esye2a6">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-nkv154ob">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-jkrh0ghi">
              <img src={pineapple} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-xaugnahh">
              <span class="text-white text-sm" id="el-rxhth5ed">Peak Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-iswv77ly">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-s7wthup6">Pineapple</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-0351umpb">Mar - Jun</p>
          </div>
        </div>
        
      
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-70319v87">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-wbiz4k3q">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-jgxl1pam">
              <img src={musk} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-j91flkvm">
              <span class="text-white text-sm" id="el-5yxrkcnt">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-gkkmsnqc">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-3naoz4b3">Musk Melon</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-j3cqibk3">Mar - Jun</p>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-3gg4m4bi">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-g19mldbl">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-8ayqvb27">
             <img src={jamun} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-0q56u5xe">
              <span class="text-white text-sm" id="el-witn0a3l">Just Starting</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-uj4voml2">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-9w7w6tql">Jamun</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-pkd5cv03">Mar - May</p>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-taf8b3d1">
          <div class="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-57jgl0kl">
            <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-rxf338qe">
              <img src={asparagus} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-cmm72ohz">
              <span class="text-white text-sm" id="el-g8m4v0sd">Early Season</span>
            </div>
          </div>
          <div class="p-3 text-center" id="el-6tkb62ib">
            <h3 class="font-semibold text-gray-900 dark:text-white" id="el-arf7io02">Asparagus</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" id="el-l90s8k4c">Apr - Jun</p>
          </div>
        </div>
      </div>
  
    </div>
  </section>
    </div>
  )
}
