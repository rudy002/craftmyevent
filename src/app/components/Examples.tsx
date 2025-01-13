import React from 'react';

const Examples = () => {
  const blogs = [
    {
      image: 'https://readymadeui.com/images/food.webp',
      date: '10 FEB 2023 | BY JOHN DOE',
      title: 'Igniting Your Imagination',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.',
    },
    {
      image: 'https://readymadeui.com/images/food11.webp',
      date: '7 JUN 2023 | BY MARK ADAIR',
      title: 'Hacks to Supercharge Your Day',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.',
    },
    {
      image: 'https://readymadeui.com/images/food22.webp',
      date: '5 OCT 2023 | BY SIMON KONECKI',
      title: 'Trends and Predictions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.',
    },
    {
      image: 'https://readymadeui.com/images/food33.webp',
      date: '5 OCT 2023 | BY SIMON KONECKI',
      title: 'Trends and Predictions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.',
    },
    {
      image: 'https://readymadeui.com/images/food44.webp',
      date: '5 OCT 2023 | BY SIMON KONECKI',
      title: 'Trends and Predictions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.',
    },
    {
      image: 'https://readymadeui.com/images/food55.webp',
      date: '5 OCT 2023 | BY SIMON KONECKI',
      title: 'Trends and Predictions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.',
    },
  ];

  return (
    <div id="Examples" className="bg-white font-sans">
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-lg-full">
            Examples
          </h2>
´
          <p className="text-gray-600 mt-4">
            Discover our latest event projects, each designed to captivate and
            inspire. From tips to energize your day to predictions about
            upcoming trends, our examples give you a glimpse into our expertise
            and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
                <span className="text-sm block text-gray-800 mb-2">
                  {blog.date}
                </span>
                <h3 className="text-xl font-bold text-gray-800">
                  {blog.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-800 text-sm">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;
