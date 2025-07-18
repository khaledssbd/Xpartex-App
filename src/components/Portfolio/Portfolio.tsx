import Image from 'next/image';

const Portfolio = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Portfolio</h2>
          <p className="text-gray-400">
            Quam quisque id diam vel quam elementum. Vestibulum lectus mauris
            ultrices eros in cursus turpis massa tincidunt. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-md shadow-md">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Portfolio Item"
              className="w-full h-auto rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Website Design
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Portfolio Item"
              className="w-full h-auto rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Mobile Application
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Portfolio Item"
              className="w-full h-auto rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Corporate Design
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Portfolio Item"
              className="w-full h-auto rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Mobile Application
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Portfolio Item"
              className="w-full h-auto rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Responsive Design
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Portfolio Item"
              className="w-full h-auto rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Digital Product
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
