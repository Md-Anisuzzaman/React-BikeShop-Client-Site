import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allusers')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleAdmin = id => {
        const url = 'http://localhost:5000/makeadmin'
        fetch(url, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id }),
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/allusers')
                    .then((res) => res.json())
                    .then((data) => setUsers(data));
                console.log(data);
            });
    }

    return (
        <div>
            <h2 className="mt-2"> All Users are {users.length} </h2>
            <Table className="m-body mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        {/*<th>Product</th>
                        <th>Name</th> */}
                        <th>Email</th>
                        <th>Role</th>
                        {/* <th>Address</th>
                        <th>Price</th>
                        <th>Action</th> */}
                    </tr>
                </thead>
                {
                    users.map(user => (
                        <tbody key={user._id}>
                            <tr>
                                <td style={{ 'color': 'black' }}>{user._id}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                {/* <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>${order.price}</td> */}
                                <button onClick={() => handleAdmin(user._id)} className="btn btn-danger text-dark">Make Admin</button>
                            </tr>
                        </tbody>
                    ))};
            </Table>

        </div>
    );
};

export default AllUsers;