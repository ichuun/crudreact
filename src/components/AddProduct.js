import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch('http://localhost:8080/products', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/");

    }
    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Price" />
                    </div>
                </div>

                <div>
                    <label>Title</label>
                    <div>
                        <button>Save</button>
                    </div>
                </div>
            </form>

        </div>
    )
}



export default AddProduct;