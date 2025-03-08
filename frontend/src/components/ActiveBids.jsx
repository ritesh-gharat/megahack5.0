import React from 'react';

export default function ActiveBids() {
  return (
    <div className='bg-[#1e2939]'>
      <div className="container mx-auto p-6">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Active Bids
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 animate__animated animate__fadeIn" data-category="electronics">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-neutral-200 flex items-center justify-center">
                <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#3a86ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-[#ff006e] text-white text-xs font-bold px-3 py-1 rounded-full">
                Hot Item
              </div>
              <div className="absolute bottom-3 left-3 bg-neutral-900/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>278 watching</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-neutral-900 truncate">Premium 4K Ultra HD Smart TV</h3>
                <span className="bg-[#3a86ff]/10 text-[#3a86ff] text-xs px-2 py-1 rounded-md">Electronics</span>
              </div>
              <p className="text-sm text-neutral-600 line-clamp-2 mb-3">65-inch OLED display with HDR, Smart features, and voice control. Perfect condition with warranty.</p>
              
              <div className="flex justify-between items-center text-sm mb-3">
                <div>
                  <span className="text-neutral-500">Current Bid</span>
                  <div className="font-bold text-lg text-neutral-900">$1,249.00</div>
                </div>
                <div className="text-right">
                  <span className="text-neutral-500">Time Left</span>
                  <div className="font-mono text-[#ff006e] font-medium">07:22:36</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>$999 start</span>
                  <span>32 bids</span>
                </div>

                <div>
                    <button className="w-full bg-[#3a86ff] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#3a86ff]">Place Bid</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
