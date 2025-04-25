import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { TProduct } from "../../redux/features/products/productSlice";

const Bicycles = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    minPrice: 0,
    maxPrice: 10000,
    availability: "",
  });
  const [page, setPage] = useState(1);

  const {
    data: bicycles,
    isLoading,
    isError,
  } = useGetAllProductsQuery({
    // search,
    // brand: filters.brand,
    // category: filters.category,
    // minPrice: filters.minPrice,
    // maxPrice: filters.maxPrice,
    // availability: filters.availability,
    // page,
    // limit: 12,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading bicycles</p>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Filters</h2>

          <div className="mb-4">
            <label className="block text-lg text-gray-600">
              Search by Name
            </label>
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search bicycles..."
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-600">Brand</label>
            <input
              type="text"
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              placeholder="Brand"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              placeholder="Category"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-600">Price Range</label>
            <div className="flex gap-4">
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handlePriceChange}
                className="w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                placeholder="Min Price"
              />
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handlePriceChange}
                className="w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                placeholder="Max Price"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-600">Availability</label>
            <select
              name="availability"
              value={filters.availability}
              onChange={handleFilterChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            >
              <option value="">All</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Bicycles List Section */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bicycles?.data?.map((bike: TProduct) => (
              <div
                key={bike._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {bike.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">
                    Brand: {bike.brand}
                  </p>
                  <p className="text-xl font-semibold text-gray-900">
                    ${bike.price}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Category: {bike.type}
                  </p>

                  <button
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    onClick={() =>
                      (window.location.href = `/bicycle/${bike._id}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bicycles;
