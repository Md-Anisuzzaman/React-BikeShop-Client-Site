import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import './DashBoard.css'

const DashBoard = () => {

    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-3 ">
                    <div className="dashboard-body">
                        <h4 className="text-success mb-5">Users Dashboard Menue</h4>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addproduct`}>
                            <li className="dashboard-menu">AddProduct</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/myorders`}>
                            <li className="dashboard-menu">MyOrders</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/review`}>
                            <li className="dashboard-menu">Review</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/pay`}>
                            <li className="dashboard-menu">Pay</li>
                        </Link>

                        <div className="admin-dashboard">
                            <h4 className="text-danger mt-5 mb-5">Admin Dashboard Menue</h4>

                            <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addproduct`}>
                                <li className="dashboard-menu">Add Product</li>
                            </Link>
                            <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu">Make Admin</li>
                            </Link>
                            <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/manageorders`}>
                                <li className="dashboard-menu">Manage Orders</li>
                            </Link>
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
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>

                        <Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route exact path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route exact path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;