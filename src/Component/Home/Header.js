import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ fontSize: "22px" }}>BuyBike</Navbar.Brand>
                    <Nav className="me-right">
                        <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/home">Home</NavLink>
                        <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/about">About</NavLink>
                        <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/explore">Explore</NavLink>
                        {/* <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/addproduct">AddProduct</NavLink> */}
                        <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/dashboard">Dashboard</NavLink>
                        {
                            user?.email ?
                                <NavLink onClick={logOut} style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="logout">Logout</NavLink>
                                :
                                <NavLink style={{ textDecoration: "none", color: 'white', fontSize: '20px', marginRight: '15px', }} to="/login">Login</NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;


