import Image from 'next/image';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Website Design',
      image: '/portfolio-1.png',
    },
    {
      title: 'Mobile Application',
      image: '/portfolio-2.png',
    },
    {
      title: 'Corporate Design',
      image: '/portfolio-3.png',
    },
    {
      title: 'Mobile Application',
      image: '/portfolio-4.png',
    },
    {
      title: 'Responsive Design',
      image: '/portfolio-5.png',
    },
    {
      title: 'Digital Product',
      image: '/portfolio-6.png',
    },
  ];

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Portfolio</h2>
          <p className="text-gray-400 pt-4">
            Quam quisque id diam vel quam elementum. Vestibulum lectus mauris
            ultrices eros in <br /> cursus turpis massa tincidunt. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-md">
              <Image
                height={400}
                width={400}
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-t-md"
              />
              {/* <div className="p-6"> */}
              <h3 className="py-6 text-xl text-center font-medium text-gray-800">
                {item.title}
              </h3>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
