import { toast } from "sonner";
import {
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} from "../../../redux/features/order/orderApi";

const ManageOrders = () => {
  const { data, isLoading, isError } = useGetAllOrdersQuery();
  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const handleUpdateStatus = async (orderId: string, status: string) => {
    try {
      await updateOrder({
        orderId,
        data: {
          status: status as
            | "Pending"
            | "Processing"
            | "Shipped"
            | "Delivered"
            | "Cancelled",
        },
      }).unwrap();
      toast.success("Order status updated successfully!");
    } catch (error) {
      toast.error("Failed to update order status.");
    }
  };

  const handleDelete = async (orderId: string) => {
    try {
      await deleteOrder(orderId).unwrap();
      toast.success("Order deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete order.");
    }
  };

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Failed to load orders.</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Order ID</th>
            <th className="border border-gray-300 p-2">Customer</th>
            <th className="border border-gray-300 p-2">Product</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Total</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((order) => (
            <tr key={order._id}>
              <td className="border border-gray-300 p-2">{order._id}</td>
              <td className="border border-gray-300 p-2">
                {order.customerName}
              </td>
              <td className="border border-gray-300 p-2">
                {order.product.name}
              </td>
              <td className="border border-gray-300 p-2">{order.quantity}</td>
              <td className="border border-gray-300 p-2">
                ${order.totalPrice}
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleUpdateStatus(order._id, e.target.value)
                  }
                  className="border rounded p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
