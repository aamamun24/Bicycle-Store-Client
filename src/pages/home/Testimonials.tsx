const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2E8B57] mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "The best bicycle store I've ever visited! The quality of the
              bikes is unmatched, and the customer service is excellent."
            </p>
            <h3 className="text-lg font-bold text-gray-800">- John Doe</h3>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "I love my new bike! It's perfect for my daily commute, and the
              price was very reasonable."
            </p>
            <h3 className="text-lg font-bold text-gray-800">- Jane Smith</h3>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Amazing selection of bicycles and accessories. Highly
              recommended!"
            </p>
            <h3 className="text-lg font-bold text-gray-800">- Emily Johnson</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
