import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Lunch.css"

const Lunch = ({ lunch }) => {
    return (
        <Col className="recipe-contain">
            <Card style={{ width: '20.5rem', textAlign: 'center', paddingTop: "1rem", border: "none" }}>
                <Card.Img style={{ width: '12rem', margin: 'auto', height: '12rem' }} variant="top" src={lunch?.img} />
                <Card.Body>
                    <Card.Text style={{ marginBottom: "0", fontWeight: '600' }}>{lunch?.name}</Card.Text>
                    <Card.Text style={{ marginBottom: "0" }}>
                        {lunch?.title}
                    </Card.Text>
                    <Card.Title>${lunch?.price}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Lunch;