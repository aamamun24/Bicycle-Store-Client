const OurServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2E8B57] mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-[#2E8B57] mb-4">🔧</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Bicycle Repairs
            </h3>
            <p className="text-gray-600">
              Professional repair services to keep your bicycle in top
              condition.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-[#2E8B57] mb-4">🚴‍♀️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Custom Fittings
            </h3>
            <p className="text-gray-600">
              Get a bicycle tailored to your needs for maximum comfort and
              performance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-[#2E8B57] mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Home Delivery
            </h3>
            <p className="text-gray-600">
              Convenient home delivery for all your bicycle and accessory
              purchases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
