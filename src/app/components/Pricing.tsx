import React from 'react';

const Pricing = () => {
  return (
    <div id="pricing" className="container-pricing font-[sans-serif] ">
      <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-sm text-gray-500">Change your plan according to your needs</p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 max-sm:max-w-sm max-sm:mx-auto">
          {/* Starter Plan */}
          <div className="border rounded-md p-6">
            <h3 className="text-gray-800 text-xl font-semibold mb-2">Starter</h3>
            <p className="text-sm text-gray-500">For Individuals and Small Teams</p>

            <div className="mt-6">
              <h3 className="text-gray-800 text-2xl font-semibold">
                $10 <sub className="text-gray-500 text-sm font-medium">per month</sub>
              </h3>
            </div>

            <div className="mt-6">
              <h4 className="text-gray-800 text-lg font-semibold mb-2">Includes</h4>
              <p className="text-sm text-gray-500">Everything you get in this plan</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  50 Page Unlock
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  10 GB Storage
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  6 Team Members
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  Unlimited Bookmarks
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                  Unlimited Basic Features
                </li>
              </ul>

              <button className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                Buy now
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="border rounded-md p-6">
            <h3 className="text-gray-800 text-xl font-semibold mb-2 flex items-center">
              Professional
              <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-md ml-3">
                Best Deal
              </span>
            </h3>
            <p className="text-sm text-gray-500">For Individuals and Largest Teams</p>

            <div className="mt-6">
              <h3 className="text-gray-800 text-2xl font-semibold">
                $20 <sub className="text-gray-500 text-sm font-medium">per month</sub>
              </h3>
            </div>

            <div className="mt-6">
              <h4 className="text-gray-800 text-lg font-semibold mb-2">Includes</h4>
              <p className="text-sm text-gray-500">Everything you get in this plan</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0=" />
                  </svg>
                  100 Page Unlock
                </li>
                {/* Other items here... */}
              </ul>

              <button className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                Buy now
              </button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="border rounded-md p-6">
            <h3 className="text-gray-800 text-xl font-semibold mb-2">Business</h3>
            <p className="text-sm text-gray-500">For Multiples and Largest Teams</p>

            <div className="mt-6">
              <h3 className="text-gray-800 text-2xl font-semibold">
                $100 <sub className="text-gray-500 text-sm font-medium">per month</sub>
              </h3>
            </div>

            <div className="mt-6">
              <h4 className="text-gray-800 text-lg font-semibold mb-2">Includes</h4>
              <p className="text-sm text-gray-500">Everything you get in this plan</p>

              <ul className="mt-6 space-y-4">
                {/* List items here... */}
              </ul>

              <button className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
