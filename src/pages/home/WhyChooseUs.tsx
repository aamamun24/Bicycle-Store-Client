const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2E8B57] mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#2E8B57] mb-4">🚴‍♂️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Our bicycles are crafted with the highest quality materials to
              ensure durability and performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#2E8B57] mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              We offer competitive pricing without compromising on quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#2E8B57] mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              Our bicycles are designed to promote sustainable and eco-friendly
              transportation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
