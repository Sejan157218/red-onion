import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import footerImg from '../../../Images/logo2.png'

const Footer = () => {
    return (
        <Container className="mb-5">
            <Row>
                <Col sm={8} xs={4}><img src={footerImg} alt="footer-logo" /></Col>
                <Col sm={2} xs={4}>
                    <Nav className="flex-column">
                        <Nav.Link >Active</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link >
                            Disabled
                        </Nav.Link>
                    </Nav>

                </Col>
                <Col sm={2} xs={4}>
                    <Nav className="flex-column">
                        <Nav.Link >Active</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link >
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>

            <Row >
                <Col xs={8} className="d-flex align-items-center">
                    <p className="mb-0">this is footer</p>
                </Col>
                <Col xs={4}>
                    <Nav >
                        <Nav.Link >Active</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link >
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer;