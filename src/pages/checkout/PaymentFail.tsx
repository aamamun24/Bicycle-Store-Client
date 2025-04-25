import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Payment Failed ❌
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Unfortunately, your payment could not be processed. Please try again
          or contact support for assistance.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link to="/">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Shop More
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700 transition duration-300">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
