import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);

    const updateMedia = () => {
        setDesktop(window.innerWidth < 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const [bookingOrders, setBookingOrders] = useState([]);

    // useEffect(() => {
    //     fetch(`https://morning-taiga-95639.herokuapp.com/myOrders/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setBookingOrders(data));
    // }, [user?.email]);
    useEffect(() => {
        fetch('http://localhost:8000/allorders')
            .then((res) => res.json())
            .then((data) => setBookingOrders(data));
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, You want to delete?")
        if (proceed) {
            const url = `https://morning-taiga-95639.herokuapp.com/orders-delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = bookingOrders.filter(order => order._id !== id);
                        setBookingOrders(remainingOrders);
                        console.log(data);
                    }
                });
        }
    }

    return (
        <div>
            {
                isDesktop ? (
                    <div className="orders-div">
                        <h2 className="mt-2">Manage Orders</h2>
                        {
                            bookingOrders.map(order => (
                                <div className='border border-dark w-100 mt-3  mb-3' key={order._id}>
                                    <p>ID: {order._id}</p>
                                    <p>Model: {order.model}</p>
                                    <p>Email: {order.email}</p>
                                    <p>Price: {order.price}</p>
                                    <div className='mb-3'>
                                        <button className="btn btn-warning text-dark me-3">Accept</button>
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger text-dark">Delete</button>
                                    </div>
                                </div>
                            ))};
                    </div>
                ) : (
                    <div className="div-table">
                        <h2 className="mt-2">Manage Orders</h2>
                        <div class="table-responsive">
                            <Table className=" table m-body mt-4" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Product</th>
                                        {/* <th scope='col'>Name</th> */}
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Address</th>
                                        <th scope='col'>Price</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                {
                                    bookingOrders.map(order => (
                                        <tbody key={order._id}>
                                            <tr>
                                                <th scope='row' style={{ 'color': 'black' }}>{order._id}</th>
                                                <td>{order.model}</td>
                                                {/* <td>{order.name}</td> */}
                                                <td>{order.email}</td>
                                                <td>{order.address}</td>
                                                <td>${order.price}</td>
                                                <button className="btn btn-warning text-dark me-3">Accept</button>
                                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger text-dark">Delete</button>
                                            </tr>
                                        </tbody>
                                    ))};
                            </Table>
                        </div>
                    </div>

                )
            }


        </div>
    );
};

export default ManageOrders;