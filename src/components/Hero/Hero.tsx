import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[#E8DDD4] overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative min-h-screen">
          {/* Yellow background frame */}
          <div className="absolute top-0 right-0 w-[30%] h-[67%] bg-[#F5B800] z-5"></div>

          {/* Gray inner frame */}
          {/* <div className="absolute top-[8%] right-[5%] w-[45%] h-[65%] bg-[#C4C0B8] z-5"></div> */}

          {/* Diagonal stripe patterns */}
          <div className="absolute top-[16%] right-[10%] w-[40%] h-[48%] z-10 bg-[repeating-linear-gradient(-45deg,#000,#000_2px,transparent_2px,transparent_8px)]"></div>

          {/* <div className="absolute bottom-[15%] right-[25%] w-[150px] h-[120px] z-10 bg-[repeating-linear-gradient(-45deg,#F5B800,#F5B800_2px,transparent_2px,transparent_8px)]"></div> */}

          <div className="absolute top-[16%] right-[16%] inset-0 flex flex-col lg:flex-row items-start justify-between h-full">
            {/* Text Content Card */}
            <div className="relative w-full bg-white py-8 pl-8 pr-32 shadow-lg my-0 lg:my-16 z-0">
              <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
                We Create Websites
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                Duis aute irure dolor in reprehenderit in <br /> voluptate velit
                esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur
                sint <br /> occaecat cupidatat non proident, sunt in <br />
                culpa qui officia deserunt.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-8">
                Image from{' '}
                <a href="#" className="underline hover:text-gray-600">
                  Freepik
                </a>
              </p>
              <button className="bg-black text-white py-3 px-8 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                VIEW PORTFOLIO
              </button>
            </div>

            {/* Hero Image */}
            <div className="absolute -top-[18%] -right-[14%] w-[45%] h-[70%] z-30">
              <Image
                src="/hero-image.png"
                alt="Hero Image"
                width={800} height={800}
                // objectFit="contain"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
