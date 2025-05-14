import { toast } from "sonner";
import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../../redux/features/products/productApi";
import Loader from "../../../components/Shared/Loader/Loader";

const ManageProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery({});
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  const handleEdit = (productId: string) => {
    setEditingProductId(productId);
  };

  const handleUpdate = async () => {
    if (!formData) return;

    try {
      await updateProduct({
        productId: editingProductId!,
        data: formData,
      }).unwrap();
      toast.success("Product updated successfully!");
      setEditingProductId(null);
      setFormData(null);
    } catch (error) {
      toast.error("Failed to update product.");
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct(productId).unwrap();
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Brand</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Stock</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((product) => (
              <tr key={product._id}>
                <td className="border border-gray-300 p-2">{product?.name}</td>
                <td className="border border-gray-300 p-2">{product?.brand}</td>
                <td className="border border-gray-300 p-2">
                  ${product?.price}
                </td>
                <td className="border border-gray-300 p-2">{product?.type}</td>
                <td className="border border-gray-300 p-2">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => {
                      handleEdit(product._id);
                      setFormData(product);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
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

      {/* Edit Modal */}
      {editingProductId && formData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Edit Product
            </h2>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="p-3 border rounded-lg"
              />
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                placeholder="Brand"
                className="p-3 border rounded-lg"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="p-3 border rounded-lg"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="p-3 border rounded-lg"
              />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="p-3 border rounded-lg"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingProductId(null);
                    setFormData(null);
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
