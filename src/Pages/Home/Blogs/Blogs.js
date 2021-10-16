import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useDataBlog from '../../../hooks/data/useDataBlog';
import "./Blogs.css";

const Blogs = () => {
    const [blogData] = useDataBlog()
    console.log(blogData);
    return (
        <div className="container my-5">
            <Row>
            <Col xs={8}>
            <h1 className="mb-4">Why You Choose Us</h1>
            <p className="mb-4 blog-p">Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Red onion is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>
            </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {blogData.map(blog => (
                    <Col className="blog-container">
                        <Card style={{ border: "none" }}>
                            <Card.Img className="blog-img" variant="top" src={blog?.img} />
                            <Card.Body>
                                <Row>
                                    <Col style={{ paddingTop: ".50rem" }} xs={2}><span className="blog-icon"><i className={blog?.imgIcon}></i></span></Col>
                                    <Col style={{ marginLeft: "-1rem" }} xs={10}> <Card.Title>{blog?.title}</Card.Title>
                                        <Card.Text>
                                            {blog?.desc.slice(0, 130)}
                                        </Card.Text>
                                        <button className="seemore-btn">See more <i class="fas fa-arrow-right seemore-icon"></i></button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;