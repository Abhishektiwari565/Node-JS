import { useState } from 'react'
import API from '../services/api.js'

export default function AddProduct() {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.price || !formData.description || !formData.category) {
      alert("please fill in all fields");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      const res = await API.post("/products/add", data);
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className='container mt-5 col-md-4'>
      <h3>Add Product</h3>

      <input
        className='form-control mt-2'
        name="name"
        placeholder='Name'
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        className='form-control mt-2'
        name="price"
        placeholder='Price'
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />

      <input
        className='form-control mt-2'
        name="description"
        placeholder='Description'
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />

      <input
        className='form-control mt-2'
        name="category"
        placeholder='Category'
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />

      <input
        className='form-control mt-2'
        type="file"
        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
      />

      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Add Product
      </button>

      <a href="/products">View all Products</a>
    </div>
  );
}