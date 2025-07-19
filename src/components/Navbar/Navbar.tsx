const Navbar = () => {
  return (
    <nav className="bg-[#E6E0D8]/80 border-b border-gray-300/20 sticky top-0 z-50 backdrop-blur-xs backdrop-filter">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              logo
            </a>
          </div>
          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div> */}
          <div className="">
            {/* <div className="md:hidden"> */}
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
