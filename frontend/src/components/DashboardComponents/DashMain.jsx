import React from 'react';

export default function DashMain() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg border border-gray-200/40 p-5 shadow-sm" id="el-pqzvkuwd">
        <div className="flex items-center justify-between" id="el-rjx0mt6d">
          <div id="el-xj2d4fdh">
            <h3 className="text-sm font-medium text-gray-600" id="el-hkq0bycy">Active Auction</h3>
            <p className="mt-1 text-2xl font-bold text-gray-800" id="el-dg1uwu7b">4</p>
          </div>
          <div className="p-3 rounded-full bg-green-100 text-green-700" id="el-yo966cvb">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-dnvcxs1m">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-ns5lwzds"></path>
            </svg>
          </div>
        </div>
        
      </div>

      <div class="p-4 md:p-5" id="el-21ij3397">
        <div class="flex flex-col md:flex-row justify-between mb-4" id="el-rczjdmaa">
          <div class="mb-3 md:mb-0" id="el-j3hnzf8d">
            <div class="relative" id="el-c7z7qs8z">
              {/* <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5" placeholder="Search inventory" id="el-h97fh2l6"> */}
            </div>
          </div>
          <div class="flex space-x-2" id="el-cj72ujj1">
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5" id="el-0qvlx2nz">
              <option selected="" id="el-va1f9k65">Filter by</option>
              <option value="name" id="el-dfnshfvj">Name</option>
              <option value="category" id="el-at8db8tn">Category</option>
              <option value="quantity" id="el-s1bapi5s">Quantity</option>
              <option value="location" id="el-8t48hbvi">Location</option>
            </select>
            <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" id="el-1f9vjff0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-flqp6mz8">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" id="el-uux50hwm"></path>
              </svg>
              Add Item
            </button>
          </div>
        </div>
        
        <div class="overflow-x-auto" id="el-aoedaair">
          <table class="min-w-full divide-y divide-gray-200" id="el-ff5avekw">
            <thead class="bg-gray-50" id="el-i0t745rh">
              <tr id="el-ko7oxqhn">
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-goorbkwg">Item</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-z32z3trs">Category</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-1t73037d">Quantity</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-sx0fiqtz">Location</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-znya1bv0">Status</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="el-ab188uup">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" id="el-oi0n3am7">
              <tr id="el-aj1lsniz">
                <td class="px-6 py-4 whitespace-nowrap" id="el-7xh69ft3">
                  <div class="flex items-center" id="el-g1wjldxf">
                    <div class="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center" id="el-9klkcp9u">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-af316223">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" id="el-f5eci576"></path>
                      </svg>
                    </div>
                    <div class="ml-4" id="el-22ikcwml">
                      <div class="text-sm font-medium text-gray-900" id="el-ux4p8rv0">Corn Seeds</div>
                      <div class="text-xs text-gray-500" id="el-2wlw9ddz">Golden Harvest Variety</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-4muuab9q">
                  <div class="text-sm text-gray-900" id="el-gzp8lmez">Seeds</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-tq4ujzcv">
                  <div class="text-sm text-gray-900" id="el-q08k520d">50 lbs</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-c0i11q08">
                  <div class="text-sm text-gray-900" id="el-jwo4uowa">Storage Shed A</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-nbf1hya7">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" id="el-0u02hni9">
                    In Stock
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" id="el-ravrzffr">
                  <a href="#" class="text-blue-600 hover:text-blue-900 mr-3" id="el-5ybsoa54">Edit</a>
                  <a href="#" class="text-red-600 hover:text-red-900" id="el-5dizn8z2">Delete</a>
                </td>
              </tr>
              <tr id="el-cdypy0m7">
                <td class="px-6 py-4 whitespace-nowrap" id="el-0d2dlh04">
                  <div class="flex items-center" id="el-abclfevx">
                    <div class="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center" id="el-hg6ivgoc">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-jaepl0ux">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-i43q390o"></path>
                      </svg>
                    </div>
                    <div class="ml-4" id="el-yg0cjzef">
                      <div class="text-sm font-medium text-gray-900" id="el-i41aagh4">Tractor</div>
                      <div class="text-xs text-gray-500" id="el-utyytaiu">John Deere 5045E</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-fg2mo4mb">
                  <div class="text-sm text-gray-900" id="el-u5oyv4sk">Equipment</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-1mv6s87r">
                  <div class="text-sm text-gray-900" id="el-xz9dpjg6">1 unit</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-eh0lb210">
                  <div class="text-sm text-gray-900" id="el-3ie72e67">Equipment Barn</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-nwzlp47e">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800" id="el-gjx98fum">
                    Maintenance
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" id="el-p9p2tapd">
                  <a href="#" class="text-blue-600 hover:text-blue-900 mr-3" id="el-aneyrdf8">Edit</a>
                  <a href="#" class="text-red-600 hover:text-red-900" id="el-n9k1yccq">Delete</a>
                </td>
              </tr>
              <tr id="el-ch6xjfwp">
                <td class="px-6 py-4 whitespace-nowrap" id="el-8lc6pwio">
                  <div class="flex items-center" id="el-7tfog2pm">
                    <div class="flex-shrink-0 h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center" id="el-cxnyc8l7">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-3750sr19">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" id="el-yhe8iz4o"></path>
                      </svg>
                    </div>
                    <div class="ml-4" id="el-spe86hpz">
                      <div class="text-sm font-medium text-gray-900" id="el-u7z0wpau">Fertilizer</div>
                      <div class="text-xs text-gray-500" id="el-h6qpb3bl">Organic 10-10-10</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-mkhe1f4u">
                  <div class="text-sm text-gray-900" id="el-t2i2inah">Supplies</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-txk4uebq">
                  <div class="text-sm text-gray-900" id="el-mk0kai14">200 lbs</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-re0gminj">
                  <div class="text-sm text-gray-900" id="el-aznu6obd">Storage Shed B</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-4lirojqe">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" id="el-mx7s031c">
                    In Stock
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" id="el-p92xv92z">
                  <a href="#" class="text-blue-600 hover:text-blue-900 mr-3" id="el-zvqcqyc8">Edit</a>
                  <a href="#" class="text-red-600 hover:text-red-900" id="el-arw975i5">Delete</a>
                </td>
              </tr>
              <tr id="el-vywwdx4z">
                <td class="px-6 py-4 whitespace-nowrap" id="el-rsvmhudz">
                  <div class="flex items-center" id="el-n6b3u121">
                    <div class="flex-shrink-0 h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center" id="el-3hnccx5m">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-0cfniwib">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" id="el-jia9v2jt"></path>
                      </svg>
                    </div>
                    <div class="ml-4" id="el-cuak5kl7">
                      <div class="text-sm font-medium text-gray-900" id="el-yw2b2o51">Pesticide</div>
                      <div class="text-xs text-gray-500" id="el-5vepbvmn">Organic Insect Control</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-e3ltxaa2">
                  <div class="text-sm text-gray-900" id="el-vih7fmu2">Supplies</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-dpeu7owk">
                  <div class="text-sm text-gray-900" id="el-9wssweu0">2 gallons</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-ibpynuga">
                  <div class="text-sm text-gray-900" id="el-hcyb9ejz">Storage Shed B</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-a1qr4a4x">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800" id="el-hry6hfhw">
                    Low Stock
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" id="el-gszh6ow6">
                  <a href="#" class="text-blue-600 hover:text-blue-900 mr-3" id="el-am1coqmc">Edit</a>
                  <a href="#" class="text-red-600 hover:text-red-900" id="el-l63yqbnf">Delete</a>
                </td>
              </tr>
              <tr id="el-9vfmo47d">
                <td class="px-6 py-4 whitespace-nowrap" id="el-4f2lvsgi">
                  <div class="flex items-center" id="el-v9352srn">
                    <div class="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center" id="el-yy9zpdyv">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-ob4qwvl0">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" id="el-ldt0086f"></path>
                      </svg>
                    </div>
                    <div class="ml-4" id="el-ynio32s9">
                      <div class="text-sm font-medium text-gray-900" id="el-cqn9noh2">Harvested Wheat</div>
                      <div class="text-xs text-gray-500" id="el-zwgphvzw">Hard Red Winter</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-v5l7jwd0">
                  <div class="text-sm text-gray-900" id="el-sk0w9xij">Harvest Storage</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-7dgtgusl">
                  <div class="text-sm text-gray-900" id="el-2bbis0cz">500 bushels</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-nqf1fpye">
                  <div class="text-sm text-gray-900" id="el-1bdklabk">Grain Silo 2</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap" id="el-m6cj0jec">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" id="el-79gtxb36">
                    In Stock
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" id="el-7uxnw7c7">
                  <a href="#" class="text-blue-600 hover:text-blue-900 mr-3" id="el-5hd2bg8n">Edit</a>
                  <a href="#" class="text-red-600 hover:text-red-900" id="el-u8alchff">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-5 py-3 flex items-center justify-between border-t border-gray-200" id="el-jf1rpr4p">
          <div class="flex-1 flex justify-between sm:hidden" id="el-o4h0gpq8">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" id="el-zqtfr3kt">
              Previous
            </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" id="el-05kh7fdt">
              Next
            </a>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" id="el-l6qqlsea">
            <div id="el-h09jyama">
              <p class="text-sm text-gray-700" id="el-pa5zot85">
                Showing <span class="font-medium" id="el-7bu498th">1</span> to <span class="font-medium" id="el-vbx8dxeg">5</span> of <span class="font-medium" id="el-cp7bn87e">74</span> results
              </p>
            </div>
            <div id="el-dim0vf8l">
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination" id="el-j042ja0g">
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" id="el-5r0mrkis">
                  <span class="sr-only" id="el-iu00a9if">Previous</span>
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" id="el-zdcx67ld">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" id="el-ys80ilfp"></path>
                  </svg>
                </a>
                <a href="#" aria-current="page" class="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" id="el-q5rgy0b8">
                  1
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" id="el-cdb7jmh2">
                  2
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" id="el-v6am4ltn">
                  3
                </a>
                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700" id="el-38awxc99">
                  ...
                </span>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" id="el-6jo6o1bg">
                  8
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" id="el-b06elhk2">
                  9
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" id="el-6aihym24">
                  10
                </a>
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" id="el-c3ah4br2">
                  <span class="sr-only" id="el-5alqa74w">Next</span>
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" id="el-0pwprh3l">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" id="el-zna06df7"></path>
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
