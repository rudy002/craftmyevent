'use client';

import React from 'react';

const Navbar: React.FC = () => {
  
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const top = pricingSection.offsetTop;
      const duration = 1000; // Durée en millisecondes (1 seconde)
      const start = window.pageYOffset;
      const distance = top - start;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleScrollToExamples = () => {
    const examplesSection = document.getElementById('examples');
    if (examplesSection) {
      const top = examplesSection.offsetTop;
      const duration = 1000; // Durée en millisecondes (1 seconde)
      const start = window.pageYOffset;
      const distance = top - start;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    }
  };





  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <a href="https://readymadeui.com">
          <h3 className="logo-page text-2xl font-semibold text-blue-500">CraftMyEvent</h3>

        </a>

        <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden">
          <button className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <div className="container-tabs flex justify-evenly items-center w-full max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto">
            <ul className="flex justify-evenly w-full max-lg:flex-col max-lg:space-y-2">
              <li className="hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui."
                    alt="logo"
                    className="craftmyevent-logo w-36"
                  />
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#Examples"
                  onClick={handleScrollToExamples}
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#pricing" // Ensure the link is #pricing
                  onClick={handleScrollToPricing}
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
