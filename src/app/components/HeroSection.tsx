import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-blue-900 font-sans mt-16">
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              Welcome to
              <br className="xl:hidden" />
              <span className="text-indigo-400"> Premium Delights</span>
            </h1>
            <p className="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
              Create unforgettable experiences with our tailored website
              services. Celebrate your special moments with a personalized and
              stunning event website.
            </p>

            <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow"></div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/hero-section-couple-sea.jpg"
            alt="couple"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
