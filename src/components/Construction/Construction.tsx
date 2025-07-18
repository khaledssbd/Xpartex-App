
import Image from 'next/image';

const Construction = () => {
  return (
    <section className="bg-yellow-400 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">
              Construction and renovation projects
            </h2>
            <p className="text-white mb-8">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nullam nunc justo sagittis suscipit ultrices. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a
              href="#"
              className="border border-white text-white py-3 px-6 rounded-md hover:bg-white hover:text-yellow-400"
            >
              Contact Us
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Construction Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;
