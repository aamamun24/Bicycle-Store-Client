import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";

const FeaturedBicycles = () => {
  const { data: bicycles } = useGetAllProductsQuery(undefined);

  const featuredBicycles = bicycles?.data?.slice(0, 6);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#2E8B57]">
            Featured Bicycles
          </h2>
          <Link
            to="/bicycles"
            className="text-white bg-[#2E8B57] hover:bg-[#256D46] font-semibold px-6 py-2 rounded-full transition"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBicycles.map((bicycle: any) => (
            <div
              key={bicycle.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300"
            >
              <img
                src={bicycle.image || "/default-bicycle.png"}
                alt={bicycle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {bicycle.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {bicycle.description?.slice(0, 60)}...
                </p>
                <p className="text-[#2E8B57] font-bold text-lg">
                  ${bicycle.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBicycles;
