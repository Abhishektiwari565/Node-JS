import React, { useEffect, useState } from 'react'
import API from '../services/api.js'

export default function ProductList() {

    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    const getProducts = async () => {
        try {
            const res = await API.get("/products/get");
            setProducts(res.data.products);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || error.message);
        }
    };

    const deleteProducts = async (id) => {
        try {
            await API.delete(`/products/delete/${id}`);
            getProducts();
        } catch (error) {
            alert(error.response?.data?.message || error.message);
        }
    };

    const updateProducts = async () => {
        try {
            const data = new FormData();

            data.append("name", editProduct.name);
            data.append("price", editProduct.price);
            data.append("description", editProduct.description);
            data.append("category", editProduct.category);

            // ✅ if new image selected
            if (editProduct.newImage) {
                data.append("image", editProduct.newImage);
            }

            await API.put(`/products/update/${editProduct._id}`, data);

            alert("Product updated successfully");
            setEditProduct(null);
            getProducts();

        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='container mt-5'>

            <h3>Product List</h3>

            {/* ✅ EDIT FORM */}
            {editProduct && (
                <div className="container mt-4 col-md-4">
                    <h4>Edit Product</h4>

                    <input
                        className="form-control mt-2"
                        value={editProduct.name}
                        onChange={(e) =>
                            setEditProduct({ ...editProduct, name: e.target.value })
                        }
                    />

                    <input
                        className="form-control mt-2"
                        value={editProduct.price}
                        onChange={(e) =>
                            setEditProduct({ ...editProduct, price: e.target.value })
                        }
                    />

                    <input
                        className="form-control mt-2"
                        value={editProduct.description}
                        onChange={(e) =>
                            setEditProduct({ ...editProduct, description: e.target.value })
                        }
                    />

                    <input
                        className="form-control mt-2"
                        value={editProduct.category}
                        onChange={(e) =>
                            setEditProduct({ ...editProduct, category: e.target.value })
                        }
                    />

                    <input
                        className="form-control mt-2"
                        type="file"
                        onChange={(e) =>
                            setEditProduct({ ...editProduct, newImage: e.target.files[0] })
                        }
                    />

                    <button className="btn btn-success mt-3" onClick={updateProducts}>
                        Update
                    </button>
                </div>
            )}

            {/* ✅ PRODUCT LIST */}
            <div className="row">
                {products.map((product, index) => (
                    <div className='col-md-4 mt-3' key={index}>
                        <div className="card p-2">

                            <img
                                src={`http://localhost:9961/uploads/${product.image}`}
                                height="150"
                                alt=""
                            />

                            <h5>{product.name}</h5>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <p>{product.category}</p>

                            <button
                                className='btn btn-danger'
                                onClick={() => deleteProducts(product._id)}
                            >
                                Delete
                            </button>

                            <button
                                className='btn btn-info mt-3'
                                onClick={() => setEditProduct(product)}   // ✅ FIXED
                            >
                                Edit
                            </button>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}