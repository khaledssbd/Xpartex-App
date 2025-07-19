import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="bg-[#E6E0D8] pt-20">
      <div className="container ml-auto mt-auto">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-md">
          <div className="md:w-2/3 p-8 h-full text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              We are here to meet any business need and to <br /> promote your
              company online!
            </p>
            <div className="border-t-2 border-gray-400 py-4 w-4/5 mx-auto"></div>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Phone:</span> 1 (232) 252 55 22
              </p>
              <p>
                <span className="font-bold">Location:</span> 75 Street Sample,
                WI 63025
              </p>
              <p>
                <span className="font-bold">Mail:</span>{' '}
                <span className="underline">template@sample.com</span>
              </p>

              <p className="text-gray-600 my-8">
                Image from <span className="underline">Freepik</span>
              </p>
            </div>
          </div>
          <div className="md:w-3/4 mt-10 md:mt-0">
            <Image
              height={400}
              width={400}
              src="/contact-us.png"
              alt="Contact Us Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
