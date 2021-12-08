import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://morning-taiga-95639.herokuapp.com/allproduct")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const url = `https://morning-taiga-95639.herokuapp.com/allproduct-delete/${id}`;
        fetch(url, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                fetch('https://morning-taiga-95639.herokuapp.com/allproduct')
                    .then(res => res.json())
                    .then(data => setProducts(data))
                console.log(data);
            });
    }
    return (
        <div>
            <h2 className="mt-2">Manage Orders</h2>
            <Table className="m-body mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    products.map(product => (
                        <tbody key={product._id}>
                            <tr>
                                <td style={{ 'color': 'black' }}>{product._id}</td>
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
    );
};

export default ManageProducts;