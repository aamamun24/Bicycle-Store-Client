import { toast } from "sonner";
import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../../redux/features/products/productApi";

const ManageProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [editingProduct, setEditingProduct] = useState<any | null>(null);

  const handleEdit = (product: any) => {
    setEditingProduct(product);
  };

  const handleUpdate = async () => {
    try {
      await updateProduct({
        productId: editingProduct._id,
        data: editingProduct,
      }).unwrap();
      toast.success("Product updated successfully!");
      setEditingProduct(null);
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

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
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
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.brand}</td>
              <td className="border border-gray-300 p-2">${product.price}</td>
              <td className="border border-gray-300 p-2">{product.type}</td>
              <td className="border border-gray-300 p-2">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleEdit(product)}
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

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    name: e.target.value,
                  })
                }
                placeholder="Product Name"
                className="p-3 border rounded-lg"
              />
              <input
                type="text"
                name="brand"
                value={editingProduct.brand}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    brand: e.target.value,
                  })
                }
                placeholder="Brand"
                className="p-3 border rounded-lg"
              />
              <input
                type="number"
                name="price"
                value={editingProduct.price}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    price: Number(e.target.value),
                  })
                }
                placeholder="Price"
                className="p-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
