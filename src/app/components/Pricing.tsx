import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: "Starter Pack",
      description: "For simple and elegant event websites.",
      price: "€200",
      features: [
        "Customizable template",
        "Responsive for mobile and desktop",
        "3 months of free hosting",
      ],
    },
    {
      title: "Advanced Pack",
      description: "For a more personalized experience.",
      price: "€500",
      features: [
        "Fully personalized design ",
        "Photo and video gallery",
        "Integration with gift registries",
        "Event countdown and map integration",
        "Event RSVP form",
      ],
      badge: "Best Value",
    },
    {
      title: "Premium Pack",
      description: "For luxury and high-end events.",
      price: "€1200",
      features: [
        "Custom design from scratch (unlimited pages)",
        "Advanced animations and effects",
        "Multilingual support",
        "Private access for guests (password-protected)",
        "Blog or updates section",
         
        ],
    },
  ];

  return (
    <div id="pricing" className="container-pricing font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-bold mb-4">Our Pricing</h2>
        <p className="text-sm text-gray-500">
          Choose the perfect plan for your event website.
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 max-sm:max-w-sm max-sm:mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-md p-6">
              <h3 className="text-gray-800 text-xl font-semibold mb-2 flex items-center">
                {plan.title}
                {plan.badge && (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-md ml-3">
                    {plan.badge}
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-500">{plan.description}</p>
              <h3 className="text-gray-800 text-2xl font-semibold mt-6">
                {plan.price} <sub className="text-gray-500 text-sm font-medium">one-time fee</sub>
              </h3>
              <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-2">Includes</h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
