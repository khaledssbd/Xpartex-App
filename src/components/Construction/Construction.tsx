
import Image from 'next/image';

const Construction = () => {
  return (
    <section className="bg-yellow-500 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              height={400}
              width={400}
              src="/construction.jpg"
              alt="Construction Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-white text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Construction and renovation projects
            </h2>
            <p>
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
              <br />
              elit. Nullam nunc justo sagittis suscipit ultrices. Ut enim ad
              minim <br /> veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex <br /> ea commodo consequat. Duis aute irure
              dolor in reprehenderit in <br /> voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>

            <p className="my-8">
              Image from <span className="underline">Freepik</span>
            </p>
            <a
              href="#"
              className="border border-white text-white py-3 px-6 rounded-md hover:bg-white hover:text-yellow-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;
