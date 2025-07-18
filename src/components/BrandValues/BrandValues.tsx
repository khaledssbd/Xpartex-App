
import Image from 'next/image';

const BrandValues = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Brand Values Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-10 md:mt-0">
            <div className="bg-black text-white p-8 rounded-md shadow-md">
              <h2 className="text-4xl font-bold mb-4">Brand Values</h2>
              <p className="mb-8">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam nunc justo sagittis suscipit ultrices.
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
