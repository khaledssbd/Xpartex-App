import Image from 'next/image';

const CraftingDigital = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/crafting-digital.jpg"
          alt="Crafting Digital Background"
          layout="fill"
          objectFit="cover"
          quality={100}
  
        />
        {/* <div className="absolute inset-0 bg-black/10 bg-opacity-40"></div> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="bg-white px-4 md:px-8 py-7 md:py-16 rounded-md max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Crafting digital experiences
          </h2>
          <p className="text-gray-600">
            Join the elite ranks of sustained value creators
          </p>
          <p className="text-gray-600 my-6">
            Image from <span className="underline">Freepik</span>
          </p>
          <a
            href="#"
            className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CraftingDigital;
