import Image from 'next/image';

const BrandingStrategy = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Branding Strategy Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-10 md:mt-0">
            <div className="bg-white p-8 rounded-md shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Branding strategy
              </h3>
              <p className="text-gray-600">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Designing logos
              </h3>
              <p className="text-gray-600">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Brand identity
              </h3>
              <p className="text-gray-600">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingStrategy;
