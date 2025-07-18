import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[#E6E0D8] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 bg-white p-8 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              We Create Websites
            </h1>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu <br />
              fugiat nulla pariatur. Excepteur sint <br />
              occaecat cupidatat non proident, sunt in <br /> culpa qui officia
              deserunt.
            </p>

            <p className="text-gray-600 my-8">
              Image from <span className='underline'>Freepik</span>
            </p>
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
            >
              View Portfolio
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -right-10 bg-yellow-400 w-72 h-72 rounded-md"></div>
            <div className="absolute -bottom-10 -left-10 bg-dots-pattern w-40 h-40"></div>
            <Image
              height={400}
              width={400}
              src="/hero-image.jpg"
              alt="Hero Image"
              className="w-full h-auto rounded-md shadow-md relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
