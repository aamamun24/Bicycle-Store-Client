import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Payment Successful ✅
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Congratulations! Your payment has been successfully processed. Thank
          you for your purchase.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link to="/bicycles">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Continue Shopping
            </button>
          </Link>
          <Link to="/dashboard/my-orders">
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
              View Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
