import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand className='font-style text-danger fs-3' style={{ fontSize: "22px"}}>BuyBike</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className='right-side'>
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/home">Home</NavLink>
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/about">About</NavLink>
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/explore">Explore</NavLink>
                            {/* <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/addproduct">AddProduct</NavLink> */}
                            <NavLink className='font-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/dashboard">Dashboard</NavLink>
                            {
                                user?.email ?
                                    <div style={{marginTop:'3px'}}>
                                        {/* <span style={{ textDecoration: "none", color: 'yellow', fontSize: '20px', marginRight: '15px' }} >Sign in as: {user.email}</span> */}
                                        <span style={{ textDecoration: "none", color: 'yellow', fontSize: '15px', marginRight: '15px'}} >Sign in as: {user.email}</span>
                                        <NavLink className='log-style' onClick={logOut} style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px'}} to="logout">Logout</NavLink>
                                    </div>

                                    :
                                    <NavLink className='log-style' style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px'}} to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;


