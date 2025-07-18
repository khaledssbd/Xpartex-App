
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              We are here to meet any business need and to promote your company
              online!
            </p>
            <div className="space-y-4">
              <p>
                <span className="font-bold">Phone:</span> 1 (232) 252 55 22
              </p>
              <p>
                <span className="font-bold">Location:</span> 75 Street Sample,
                WI 63025
              </p>
              <p>
                <span className="font-bold">Mail:</span> template@sample.com
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              height={400}
              width={400}
              src="/placeholder.svg"
              alt="Contact Us Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
