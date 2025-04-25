import { baseApi } from "../../api/baseApi";

// Define the User interface
export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
  isBlocked: boolean;
}

// Define response shapes
interface UsersResponse {
  success: boolean;
  data: User[];
}

interface UserResponse {
  success: boolean;
  data: User;
}

// Define the userApi
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    getSingleUser: builder.query<UserResponse, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),

    deactivateUser: builder.mutation<{ success: boolean }, string>({
      query: (userId) => ({
        url: `/users/${userId}/deactivate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useDeactivateUserMutation,
} = userApi;

export default userApi;
