

import React from 'react';

const Services = () => {
  return (
    <section className="bg-[#E6E0D8] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Epic design and engineering
          </h2>
          <p className="text-gray-600 pt-4">
            Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex <br /> ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              {/* Placeholder for Strategy Icon */}
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Strategy</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-md text-center">
            <div className="mb-4 flex items-center justify-center">
              {/* Placeholder for Branding Icon */}
              <div className="bg-yellow-500 rounded-full h-20 w-20 flex items-center justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Branding</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          <div className="p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              {/* Placeholder for Development Icon */}
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Development
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          <div className="bg-yellow-500 p-8 rounded-md text-center">
            <div className="mb-4 flex items-center justify-center">
              {/* Placeholder for Web Design Icon */}
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Web Design</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
