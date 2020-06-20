import React, { Component } from "react";
import "./HomepageView.css";

import Banner from '../../components/Banner/Banner.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomepageView extends Component {

    render() {

        return (
            <div>

                <Banner title='Welcome to our website...' />

                <Container className='wrapper'>
                    <Row className='row'>
                        <Col>
                            <h1>Mission</h1>
                            <p>Mission statement goes here...</p>
                        </Col>
                        <Col>
                            <h1>Purpose</h1>
                            <p>Purpose statement goes here...</p>
                        </Col>
                    </Row>
                </Container>
            </div>        
        )
    }
}

export default HomepageView;