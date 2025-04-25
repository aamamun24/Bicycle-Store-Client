const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2E8B57] mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">
            Learn more about who we are and what we stand for.
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
              At SpinCycle, our mission is to provide high-quality bicycles and
              accessories that inspire people to embrace a healthier and more
              sustainable lifestyle. We are committed to delivering exceptional
              customer service and fostering a community of passionate riders.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to become the leading provider of premium bicycles
              and accessories worldwide. We aim to promote eco-friendly
              transportation and create a positive impact on the environment and
              society.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-[#2E8B57] mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/team-member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/team-member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/team-member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
