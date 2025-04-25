import { useState } from "react";
import { useCreateProductMutation } from "../../../redux/features/products/productApi";
import { toast } from "sonner";

const CreateProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    brand: "",
    price: 0,
    type: "Mountain",
    description: "",
    quantity: 0,
    inStock: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    });
  };

  const handleSubmit = async () => {
    try {
      await createProduct(formData).unwrap();
      toast.success("Product created successfully!");
      setFormData({
        name: "",
        image: "",
        brand: "",
        price: 0,
        type: "Mountain",
        description: "",
        quantity: 0,
        inStock: true,
      });
    } catch (error) {
      toast.error("Failed to create product.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create Product</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="Image URL"
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
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="p-3 border rounded-lg"
        >
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Hybrid">Hybrid</option>
          <option value="BMX">BMX</option>
          <option value="Electric">Electric</option>
        </select>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="p-3 border rounded-lg col-span-1 md:col-span-2"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          className="p-3 border rounded-lg"
        />
        <select
          name="inStock"
          value={formData.inStock ? "true" : "false"}
          onChange={(e) =>
            setFormData({ ...formData, inStock: e.target.value === "true" })
          }
          className="p-3 border rounded-lg"
        >
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </form>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Add Product
      </button>
    </div>
  );
};

export default CreateProduct;
