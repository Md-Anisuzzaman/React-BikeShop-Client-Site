import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const MyOrder = () => {

    const { user } = useAuth();

    const [bookingOrders, setBookingOrders] = useState([]);

    useEffect(() => {
        fetch(`https://morning-taiga-95639.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBookingOrders(data));
    }, [user?.email]);

    const handleDelete = id => {
        const url = `https://morning-taiga-95639.herokuapp.com/orders-delete/${id}`;
        fetch(url, {
            method: 'POST'
        })
            // .then(res => res.json())
            // .then(data => {
            //     fetch('https://morning-taiga-95639.herokuapp.com/orders')
            //         .then(res => res.json())
            //         .then(data => setOrders(data))
            //     //console.log(data);
            // });
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                                const remainingOrders = bookingOrders.filter(order=>order._id !== id);
                                setBookingOrders(remainingOrders);
                                console.log(data);
                            }
                });
    }

    return (
        <div>
            <h2 className="mt-2">My All orders are {bookingOrders.length} </h2>
            <Table className="m-body mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    bookingOrders.map(order => (
                        <tbody key={order._id}>
                            <tr>
                                <td style={{ 'color': 'black' }}>{order._id}</td>
                                <td>{order.model}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>${order.price}</td>
                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger text-dark">Delete</button>
                            </tr>
                        </tbody>
                    ))};
            </Table>

        </div>
    );
};

export default MyOrder;