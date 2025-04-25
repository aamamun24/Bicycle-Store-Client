const About = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2E8B57] mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">
            Discover who we are, what we stand for, and how we aim to make a
            difference.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At SpinCycle, our mission is to empower individuals to embrace a
              healthier, more sustainable lifestyle through high-quality
              bicycles and exceptional service. We strive to inspire a love for
              cycling and foster a community of passionate riders.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to lead the way in eco-friendly transportation by
              offering innovative bicycles and accessories. We aim to create a
              positive impact on the environment and promote cycling as a
              lifestyle choice for everyone.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-bold text-center text-[#2E8B57] mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to delivering premium products that exceed
                customer expectations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We prioritize eco-friendly practices to reduce our environmental
                footprint.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                We believe in building a strong community of cycling enthusiasts
                who support and inspire each other.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Whether you're a seasoned cyclist or just starting out, SpinCycle is
            here to support your journey. Together, let's make a difference.
          </p>
          <button className="bg-[#2E8B57] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#256D46] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
