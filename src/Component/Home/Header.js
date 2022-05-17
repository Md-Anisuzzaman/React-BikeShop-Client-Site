import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <div className="helloBike">
                <p><i className="fa-solid fa-phone text-dark"></i> 001697889</p>
                <p className='buyBike'>BuyBike</p>
                <p><i className="fa-solid text-dark fa-house-user"></i> Bangladesh</p>
            </div>

            <Navbar className='navbar-start' navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand className='font-style text-light' style={{ fontSize: "26px" }}>BuyBike</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className='right-side'>
                            <NavLink className='font-style' style={{ textTransform: 'uppercase', textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/home">Home</NavLink>
                            <NavLink className='font-style' style={{ textTransform: 'uppercase', textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/about">About</NavLink>
                            <NavLink className='font-style' style={{ textTransform: 'uppercase', textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/contact">Contact</NavLink>
                            <NavLink className='font-style' style={{ textTransform: 'uppercase', textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/explore">Explore</NavLink>
                            <NavLink className='font-style' style={{ textTransform: 'uppercase', textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px' }} to="/dashboard">Dashboard</NavLink>
                            {
                                user?.email ?
                                    <div style={{ marginTop: '3px' }}>
                                        <span style={{ textDecoration: "none", color: 'yellow', fontSize: '15px', marginRight: '15px' }} >{user.email}</span>
                                        <NavLink className='log-style' onClick={logOut} style={{ textTransform: 'uppercase', textDecoration: "none", color: '#00bcd4', fontSize: '20px', marginRight: '15px' }} to="/logout">Logout</NavLink>
                                    </div>

                                    :
                                    <NavLink className='log-style' style={{ textTransform: 'uppercase', textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px',marginBottom: '13.5px' }} to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;


