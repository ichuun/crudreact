import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Produklist = ({ }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fectData();
    }, []);

    const fectData = async () => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fectData();
    }
    return (
        <div>
            <Link to='/add'>add new</Link>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`edit/${product.id}`}>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default Produklist;