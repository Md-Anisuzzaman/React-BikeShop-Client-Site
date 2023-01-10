import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageProducts.css';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/allproduct")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:8000/allproduct-delete/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:8000/allproduct')
                    .then(res => res.json())
                    .then(data => setProducts(data))
                console.log(data);
            });
    }
    return (
        <div>
            <div className='table-responsive'>
                <h2 className="mt-2">Manage Products</h2>
                <Table className="table m-body mt-4" striped bordered hover>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => (
                            <tbody key={product._id}>
                                <tr>
                                    <th scope='row' style={{ 'color': 'black' }}>{product._id}</th>
                                    <td>{product.model}</td>
                                    <td>{product.address}</td>
                                    <td>${product.price}</td>
                                    <button className="btn btn-warning text-dark me-3">Accept</button>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-danger text-dark">Delete</button>
                                </tr>
                            </tbody>
                        ))};
                </Table>
            </div>

            <div className='ma-product-card'>
                {
                    products.map(product => (
                        <h2 key={product._id}>
                            <div className="border border-dark mt-3 mb-3 ">
                                <p clasName='pr-3'style={{ 'color': 'black' }}>{product._id}</p>
                                <p>Model:{product.model}</p>
                                <p>Address: {product.address}</p>
                                <p>Price: ${product.price}</p>
                                <button className="btn btn-warning text-dark me-3">Accept</button>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger text-dark">Delete</button>
                            </div>
                        </h2>
                    ))};
            </div>
        </div>
    );
};

export default ManageProducts;