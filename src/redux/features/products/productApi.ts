import { baseApi } from "../../api/baseApi";
import { TProduct } from "./productSlice";

// Define response types
interface ProductResponse {
  success: boolean;
  message: string;
  data: TProduct;
}

interface ProductsResponse {
  success: boolean;
  message: string;
  data: TProduct[];
}

interface DeleteResponse {
  success: boolean;
  message: string;
  data: null;
}

// Define query parameter types
interface GetAllProductsQueryParams {
  search?: string;
  filter?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
  fields?: string;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, GetAllProductsQueryParams>({
      query: (params) => ({
        url: `/products`,
        method: "GET",
        params,
      }),
    }),

    // Fetch a single product by ID
    getSingleProduct: builder.query<ProductResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),

    // Create a new product
    createProduct: builder.mutation<ProductResponse, Partial<TProduct>>({
      query: (productData) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Products"],
    }),

    // Update an existing product
    updateProduct: builder.mutation<
      ProductResponse,
      { productId: string; data: Partial<TProduct> }
    >({
      query: ({ productId, data }) => ({
        url: `/products/${productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    // Delete a product by ID
    deleteProduct: builder.mutation<DeleteResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

export default productApi;
