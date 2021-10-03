import React from 'react';
import './Header.css'
import logo from '../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/home"><img className="logo-img" src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                     <NavLink className="header-text" to="/home" activeStyle={{ fontWeight: "bold", color: "red" }}> Home </NavLink>      
                     <NavLink className="header-text" to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}> About </NavLink>      
                     <NavLink className="header-text" to="/services" activeStyle={{ fontWeight: "bold", color: "red" }}> Services </NavLink>      
                     <NavLink className="header-text" to="/success" activeStyle={{ fontWeight: "bold", color: "red" }}> Success </NavLink>      
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;