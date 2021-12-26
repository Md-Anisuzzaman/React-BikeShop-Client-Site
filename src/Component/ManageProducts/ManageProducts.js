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
            method: 'DELETE'
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
            <h2 className="mt-2">Manage Products</h2>
            <div className='table-responsive'>
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

        </div>
    );
};

export default ManageProducts;