import { baseApi } from "../../api/baseApi";

// Define the Order interface
export interface Order {
  _id: string;
  product: {
    _id: string;
    name: string;
    price: number;
  };
  transactionId: string;
  quantity: number;
  totalPrice: number;
  email: string;
  customerName: string;
  address: string;
  contactNumber: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
}

// Define response shapes
interface OrderResponse {
  success: boolean;
  data: Order;
}

interface OrdersResponse {
  success: boolean;
  data: Order[];
}

// Define the orderApi
const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all orders (Admin)
    getAllOrders: builder.query<OrdersResponse, void>({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    // Fetch user-specific orders (Customer)
    getUserOrders: builder.query<OrdersResponse, void>({
      query: () => ({
        url: "/orders/user/orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    // Update an order's status (Admin)
    updateOrder: builder.mutation<
      OrderResponse,
      { orderId: string; data: Partial<Order> }
    >({
      query: ({ orderId, data }) => ({
        url: `/orders/${orderId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),

    // Delete an order (Admin)
    deleteOrder: builder.mutation<{ success: boolean }, string>({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;

export default orderApi;
