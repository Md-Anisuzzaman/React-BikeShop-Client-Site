import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import AllUsers from '../AllUsers/AllUsers';
import useAuth from '../Hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Payment/Pay';
import './DashBoard.css'

const DashBoard = () => {

    let { path, url } = useRouteMatch();
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://morning-taiga-95639.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);

    return (
        <div>
            <div className="row">
                <div className="col-md-3 ">
                    <div className="dashboard-body">
                        <h4 className="text-success mb-5">Users Dashboard Menue</h4>
                        {/* <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addproduct`}>
                            <li className="dashboard-menu">AddProduct</li>
                        </Link> */}
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/myorders`}>
                            <li className="dashboard-menu">MyOrders</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addreview`}>
                            <li className="dashboard-menu">Add Review</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/pay`}>
                            <li className="dashboard-menu">Pay</li>
                        </Link>

                        <div className="admin-dashboard">
                            <h4 className="text-danger mt-5 mb-5">Admin Dashboard Menue</h4>
                            {
                                isAdmin && (

                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addproduct`}>
                                        <li className="dashboard-menu">Add Product</li>
                                    </Link>
                                )
                            }

                            {/* {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>
                                )
                            } */}

                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/manageorders`}>
                                        <li className="dashboard-menu">Manage All Orders</li>
                                    </Link>
                                )
                            }
                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/manageproducts`}>
                                        <li className="dashboard-menu">Manage All Products</li>
                                    </Link>
                                )
                            }
                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/allusers`}>
                                        <li className="dashboard-menu">Create Admin</li>
                                    </Link>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route exact path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/addreview`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>

                        {/*<Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route> */}

                        <Route exact path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route exact path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route exact path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route exact path={`${path}/allusers`}>
                            <AllUsers></AllUsers>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;