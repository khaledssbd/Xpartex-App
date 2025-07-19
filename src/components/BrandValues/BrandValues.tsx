import Image from 'next/image';

const BrandValues = () => {
  return (
    <section className="bg-[#E6E0D8] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center relative">
          <div className="flex justify-center items-center gap-2 z-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                height={600}
                width={800}
                src="/brand-values-1.jpg"
                alt="Brand Values Image"
                className="w-full h-auto"
              />
              <Image
                height={600}
                width={800}
                src="/brand-values-2.png"
                alt="Brand Values Image"
                className="w-full h-auto"
              />
            </div>
            <Image
              height={600}
              width={800}
              src="/brand-values-4.jpg"
              alt="Brand Values Image"
              className="w-2/3 h-auto"
            />
          </div>
          <div className="md:w-1/2 md:absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 mt-10 md:mt-0 z-20">
            <div className="bg-black text-white text-center p-8 rounded-md shadow-md md:ml-12">
              <h2 className="text-4xl font-bold mb-4">Brand Values</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, <br /> consectetur
                adipiscing elit. Nullam nunc justo <br /> sagittis suscipit
                ultrices.
              </p>

              <p className="my-8">
                Image from <span className="underline">Freepik</span>
              </p>
              <a
                href="#"
                className="border border-white text-white py-3 px-6 rounded-md hover:bg-white hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
