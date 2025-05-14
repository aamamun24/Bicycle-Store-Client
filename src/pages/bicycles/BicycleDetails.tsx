import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productApi";
import { useState } from "react";

const BicycleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetSingleProductQuery(id as string);

  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error || !data?.data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl font-bold">Something went wrong.</p>
      </div>
    );
  }

  const bicycle = data.data;

  const handleIncrease = () => {
    if (quantity < bicycle.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { bicycle, quantity } });
  };

  return (
    <div className="bg-gray-100 pb-12 pt-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
          <img
            src={bicycle.image}
            alt={bicycle.name}
            className="w-full max-h-[450px] object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {bicycle.name}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Brand:</strong> {bicycle.brand}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Type:</strong> {bicycle.type}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Stock:</strong>{" "}
              {bicycle.quantity > 0 ? bicycle.quantity : "Out of Stock"}
            </p>
            <p className="text-3xl font-semibold text-green-600 mt-4">
              ${bicycle.price}
            </p>
            <p className="text-gray-600 mt-4">{bicycle.description}</p>
          </div>

          {/* Quantity Selector and Checkout */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden bg-gray-100">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 text-lg font-bold text-blue-600 hover:bg-blue-100"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-12 text-center bg-transparent outline-none border-none text-lg font-medium"
              />
              <button
                onClick={handleIncrease}
                className="px-4 py-2 text-lg font-bold text-blue-600 hover:bg-blue-100"
              >
                +
              </button>
            </div>

            <button
              onClick={handleCheckout}
              disabled={bicycle.quantity === 0}
              className={`py-3 px-6 text-lg font-semibold rounded-xl transition duration-300 shadow-md ${
                bicycle.quantity > 0
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              {bicycle.quantity > 0 ? "Checkout" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleDetails;
