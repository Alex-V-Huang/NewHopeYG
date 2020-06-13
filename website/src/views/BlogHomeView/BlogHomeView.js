import React, { Component } from "react";
import "./BlogHomeView.css";

import BlogCard from '../../components/BlogCard/BlogCard.js';
import Banner from '../../components/Banner/Banner.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class BlogHomeView extends Component {

    render() {

        return (
            <div>

                <Banner />

                <Container className='wrapper'>
                    <Row className='row'>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                    </Row>
                    <Row className='row'>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BlogHomeView;