import React, { Component } from "react";
import "./BlogArticleView.css";

import Card from 'react-bootstrap/Card';



class BlogArticleView extends Component {

    render() {

        return (
            <div>
                <Card id='article-container'>
                    <Card.Body >
                        <div id='background'>
                            <Card.Title>
                                <h1 id='title'>Title</h1>
                                
                            </Card.Title>
                            <Card.Subtitle id='author'>
                                <h3 id='author'>Author</h3>
                                <h4>Date</h4>
                                
                            </Card.Subtitle>
                        </div>
                        <Card.Text id='article-content'>
                            Content goes here...
                        </Card.Text>
                    </Card.Body>
                    
                    
                </Card>

            </div>
        )
    }
}

export default BlogArticleView;