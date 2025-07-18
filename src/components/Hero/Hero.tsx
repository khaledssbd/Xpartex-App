import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              We Create Websites
            </h1>
            <p className="text-gray-600 mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
            >
              View Portfolio
            </a>
          </div>
          <div className="md:w-1/2">
            <Image height={400} width={400}
              src="/placeholder.svg"
              alt="Hero Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
