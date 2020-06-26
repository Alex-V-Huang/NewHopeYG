import React, { Component } from "react";
import "./BlogCard.css";

import Card from 'react-bootstrap/Card';

class BlogCard extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {

        return (
            <div>
                <a href='https://www.w3schools.com'>
                    <Card style={{ width: '18rem', display: 'inline-block'}}>
                        <Card.Img variant='top' style={{width: '100%', height: '15vw', objectFit: 'cover'}} src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.author}</Card.Subtitle>
                            <Card.Text>{this.props.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        )
    }
}

export default BlogCard;