import React from 'react'
import Logo from "../../assets/logo.svg";

export default function DashNav() {
  return (
    <div>
      <div class="px-6 py-8" id="el-7nlahjzr">
        <div class="flex items-center justify-center mb-8" id="el-xtgdnv3v">
         <div className="flex items-center space-x-2">
                       <img src={Logo} className="w-12 h-12" alt="logo"/>
                       <span className="text-xl font-bold text-white" id="el-742nk914">Kisan Kart</span>
        </div>
        </div>
        <ul class="space-y-2" id="el-77e91j79">
          <li id="el-2f2uccld">
            <a href="#dashboard" onclick="showSection('dashboard')" class="flex items-center text-white bg-green-700 rounded-lg px-4 py-3 hover:bg-green-600 transition-colors duration-200" id="el-8kakqyjw">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-yk0hdmxp">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" id="el-iom019tf"></path>
              </svg>
              Dashboard
            </a>
          </li>
          <li id="el-8zxay9qd">
            <a href="#crops" onclick="showSection('crops')" class="flex items-center text-gray-200 px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200" id="el-xjbq1rcd">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-k6y09ouk">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" id="el-81plcj4e"></path>
              </svg>
              Crop Management
            </a>
          </li>
          <li id="el-g4syb4t5">
            <a href="#reports" onclick="showSection('reports')" class="flex items-center text-gray-200 px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200" id="el-zcz9jq09">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-yshm3j56">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" id="el-r50x3tgt"></path>
              </svg>
              Reports
            </a>
          </li>
          <li id="el-gof3wg1r">
            <a href="#settings" onclick="showSection('settings')" class="flex items-center text-gray-200 px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200" id="el-5xabaejy">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-lgtn0e72">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" id="el-ggls6lvz"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" id="el-1ntrmpdr"></path>
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
