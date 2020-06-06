import React, { Component } from "react";
import "./BlogCard.css";

import Card from 'react-bootstrap/Card';

class BlogCard extends Component {

    render() {

        return (
            <div>
                <Card style={{ width: '18rem', display: 'inline-block'}}>
                    <Card.Img variant='top' style={{width: '100%', height: '15vw', objectFit: 'cover'}} src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>Post Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                        <Card.Text>Description</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default BlogCard;