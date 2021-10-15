import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BreakFast = ({ breakfast }) => {
    return (
        <Col>
        <Card style={{ width: '20.5rem', textAlign: 'center', paddingTop: "1rem", border: "none" }}>
            <Card.Img style={{ width: '12rem', margin: 'auto', height: '12rem' }} variant="top" src={breakfast?.img} />
            <Card.Body>
                <Card.Text style={{ marginBottom: "0", fontWeight: '600' }}>{breakfast?.name}</Card.Text>
                <Card.Text style={{ marginBottom: "0" }}>
                    {breakfast?.title}
                </Card.Text>
                <Card.Title>${breakfast?.price}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default BreakFast;