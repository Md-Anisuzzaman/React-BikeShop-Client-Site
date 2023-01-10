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
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaPhabricator } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa";




const DashBoard = () => {

    let { path, url } = useRouteMatch();
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
   
    

    useEffect(() => {
        fetch(`http://localhost:8000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);

    return (
        <div>
            <div className="row gx-0">
                <div className="col-md-3 ">
                    <div className="dashboard-body">
                        {/* <input type="checkbox" name="" id="check" />
                        <label htmFor="check">
                            <i id='bars'><FaBars/></i>
                            <i id='close'><FaTimes/></i>
                        </label> */}

                        <i id='bars'><FaBars /></i>
                        <i id='close'><FaTimes /></i>
                        <h5 className="text-success fs-4 py-2 mb-3">Users Dashboard Menue</h5>
                        {/* <Link style={{ textDecoration: 'none', fontSize: '18px' }} to={`${url}/addproduct`}>
                            <li className="dashboard-menu">AddProduct</li>
                        </Link> */}
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/myorders`}>
                            <li className="dashboard-menu"><i className="fa-brands fa-first-order"></i> MyOrders</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addreview`}>
                            <li className="dashboard-menu"><FaPhabricator></FaPhabricator>Add Review</li>
                        </Link>
                        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/pay`}>
                            <li className="dashboard-menu"><FaApplePay></FaApplePay> Pay</li>
                        </Link>
                        <div className="admin-dashboard">
                            <h5 className="text-danger py-2 mt-3">Admin Dashboard Menue</h5>
                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/addproduct`}>
                                        <li className="dashboard-menu"><i class="fa-brands fa-product-hunt"></i> Add Product</li>
                                    </Link>
                                )
                            }

                            {/* {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '18px' }} to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>
                                )
                            } */}

                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/manageorders`}>
                                        <li className="dashboard-menu"><i className="fa-brands fa-first-order"></i> Manage All Orders</li>
                                    </Link>
                                )
                            }
                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/manageproducts`}>
                                        <li className="dashboard-menu"><FaBandcamp></FaBandcamp> Manage All Products</li>
                                    </Link>
                                )
                            }
                            {
                                isAdmin && (
                                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={`${url}/allusers`}>
                                        <li className="dashboard-menu mb-5"><FaStreetView></FaStreetView> Create Admin</li>
                                    </Link>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-9 table-bg">
                    <div className='dash-card'>
                        <div className='dash-card-child-1'>
                            <h4>5649989</h4>
                            <p>Revenue</p>
                        </div>
                        <div className='dash-card-child-2'>
                            <h4>5649</h4>
                            <p>Liability</p>
                        </div>
                        <div className='dash-card-child-3'>
                            <h4>9949989</h4>
                            <p>Sell</p>
                        </div>
                        <div className='dash-card-child-4'>
                            <h4>9989</h4>
                            <p>Total Order</p>
                        </div>
                    </div>
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