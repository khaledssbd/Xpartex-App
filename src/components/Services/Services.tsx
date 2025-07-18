

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Epic design and engineering</h2>
          <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Strategy</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Branding</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Development</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
          <div className="bg-yellow-400 p-8 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-white mb-4">Web Design</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
