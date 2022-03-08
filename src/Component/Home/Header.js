import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import useAuth from '../Hooks/useAuth';
import logo_bike from "../../Images/bike-logo.png"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <div className="helloBike">
                <p><i className="fa-solid fa-phone"></i> 001697889</p>
                <p className='text-danger'>BuyBike</p>
                <p><i className="fa-solid fa-house-user"></i> Dhaka,Bangladesh</p>
            </div>

            <Navbar className='navbar-start' bg="" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand className='font-style text-light fs-3' style={{ fontSize: "20px" }}>BuyBike </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className='right-side'>
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/home">Home</NavLink>
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/about">About</NavLink>
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/explore">Explore</NavLink>
                            {/* <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/addproduct">AddProduct</NavLink> */}
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/dashboard">Dashboard</NavLink>
                            {/* <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/test">Test</NavLink> */}
                            {
                                user?.email ?
                                    <div style={{ marginTop: '3px' }}>
                                        {/* <span style={{ textDecoration: "none", color: 'yellow', fontSize: '20px', marginRight: '15px' }} >Sign in as: {user.email}</span> */}
                                        <span style={{ textDecoration: "none", color: 'yellow', fontSize: '15px', marginRight: '15px' }} >{user.email}</span>
                                        <NavLink className='log-style' onClick={logOut} style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="logout">Logout</NavLink>
                                    </div>

                                    :
                                    <NavLink className='log-style' style={{ textDecoration: "none", color: 'white', fontSize: '23px', marginRight: '15px' }} to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;


