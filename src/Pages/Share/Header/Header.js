
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo2.png';
import './Header.css'


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <img className="logo-header" src={logo} alt='logo' />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#features"><i class="fas fa-shopping-cart"></i></Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <button className="btn-header">Sign Up</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;