import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { toast } from "sonner";
import { useCreateOrderMutation } from "../../redux/features/order/orderApi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const { bicycle, quantity } = state || {};

  const [name, setName] = useState(user?.name || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = (bicycle?.price * quantity).toFixed(2);

  useEffect(() => {
    if (!bicycle || !quantity) {
      toast.error("Missing product data. Redirecting...");
      navigate("/bicycles");
    }
  }, [bicycle, quantity, navigate]);

  const handleOrder = async () => {
    if (!name || !address || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!bicycle?._id || !bicycle?.price || !quantity) {
      toast.error("Incomplete product info.");
      return;
    }

    const orderData = {
      customerName: name,
      email: user?.email || "",
      address,
      contactNumber: phone,
      product: bicycle._id.toString(),
      quantity: Number(quantity),
      totalPrice: Number(total),
    };

    try {
      const result = await createOrder(orderData).unwrap();
      if (result.success) {
        toast.success("Redirecting to payment...");
        if (result.PaymentGatewayPageURL) {
          window.location.href = result.PaymentGatewayPageURL;
        } else {
          toast.error("Payment gateway URL is missing.");
        }
      }
    } catch (err) {
      console.error("Order error:", err);
      toast.error("Failed to place order. Try again.");
    }
  };

  if (!bicycle || !quantity) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-gray-600">
        No product selected. Redirecting...
      </div>
    );
  }

  return (
    <div className="max-w-5xl pt-24 mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Checkout
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
            Order Summary
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Product:</strong> {bicycle.name}
            </p>
            <p>
              <strong>Brand:</strong> {bicycle.brand}
            </p>
            <p>
              <strong>Model:</strong> {bicycle.model}
            </p>
            <p>
              <strong>Category:</strong> {bicycle.category}
            </p>
            <p>
              <strong>Quantity:</strong> {quantity}
            </p>
            <p className="text-xl font-bold text-green-600 pt-2">
              Total: ${total}
            </p>
          </div>
        </div>

        {/* Shipping & Payment Form */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
            Shipping Details
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-blue-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Shipping Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-blue-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-blue-400"
                required
              />
            </div>

            <div className="mt-6">
              <button
                onClick={handleOrder}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold text-lg"
              >
                {isLoading ? "Redirecting..." : "Order Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
