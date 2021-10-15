import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dinner = ({dinner}) => {
    return (
        <Col>
        <Card style={{ width: '20.5rem', textAlign: 'center', paddingTop: "1rem", border: "none" }}>
            <Card.Img style={{ width: '12rem', margin: 'auto', height: '12rem' }} variant="top" src={dinner?.img} />
            <Card.Body>
                <Card.Text style={{ marginBottom: "0", fontWeight: '600' }}>{dinner?.name}</Card.Text>
                <Card.Text style={{ marginBottom: "0" }}>
                    {dinner?.title}
                </Card.Text>
                <Card.Title>${dinner?.price}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Dinner;