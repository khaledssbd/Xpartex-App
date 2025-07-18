
import Image from 'next/image';

const CraftingDigital = () => {
  return (
    <section className="bg-yellow-400 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Crafting Digital Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-10 md:mt-0">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Crafting digital experiences
              </h2>
              <p className="text-gray-600 mb-8">
                Join the elite ranks of sustained value creators
              </p>
              <a
                href="#"
                className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingDigital;
