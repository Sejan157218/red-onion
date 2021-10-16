import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import footerImg from '../../../Images/logo.png';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <Container className="py-5">
                <Row>
                    <Col sm={6} xs={12}><img style={{ width: '10rem' }} src={footerImg} alt="footer-logo" /></Col>
                    <Col sm={3} xs={6}>
                        <Nav className="flex-column content-footer">
                            <Nav.Link >About online food</Nav.Link>
                            <Nav.Link >Read our blog</Nav.Link>
                            <Nav.Link >Sign up to deliver</Nav.Link>
                            <Nav.Link >Add your restaurant</Nav.Link>
                           
                        </Nav>

                    </Col>
                    <Col sm={3} xs={6}>
                        <Nav className="flex-column content-footer">
                            <Nav.Link >Get help</Nav.Link>
                            <Nav.Link >Read FAQs</Nav.Link>
                            <Nav.Link >View all cities</Nav.Link>
                            <Nav.Link >Restaurants near me</Nav.Link>

                        </Nav>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col sm={7} xs={12} className="d-flex align-items-center">
                        <p className="mb-0">Copyright © 2021 RED ONION by Sejan Mahmud</p>
                    </Col>
                    <Col sm={5} xs={12}>
                        <Nav className="content-footer">
                            <Nav.Link className="me-2">Privacy Policy.</Nav.Link>
                            <Nav.Link className="me-2">Terms of Use </Nav.Link>
                            <Nav.Link className="me-2">Pricing</Nav.Link>
                        </Nav>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;