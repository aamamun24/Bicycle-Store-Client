import Loader from "../../../components/Shared/Loader/Loader";
import { useGetUserOrdersQuery } from "../../../redux/features/order/orderApi";

const MyOrders = () => {
  const { data, isLoading, isError } = useGetUserOrdersQuery();

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to load your orders.</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {data?.data.length === 0 ? (
        <p className="text-lg text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Order ID</th>
                <th className="border border-gray-300 p-2">Product</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Total</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((order) => (
                <tr key={order._id}>
                  <td className="border border-gray-300 p-2">{order._id}</td>
                  <td className="border border-gray-300 p-2">
                    {order.product?.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {order.quantity}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${order.totalPrice}
                  </td>
                  <td className="border border-gray-300 p-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
