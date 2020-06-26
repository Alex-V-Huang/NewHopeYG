import React, { Component } from "react";
import "./BlogHomeView.css";

import BlogCard from '../../components/BlogCard/BlogCard.js';
import Banner from '../../components/Banner/Banner.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import firebase from '../../firebase.js';


class BlogHomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          articles: [],
        };
    }

    componentDidMount() {

        const articlesRef = firebase.database().ref('articles');
        articlesRef.on('value', (snapshot) => {
            console.log('snapshot: ', snapshot.val());

            let articles = snapshot.val();
            let newState= [];
            for (let article in articles) {
                newState.push({
                    id: article,
                    title: articles[article].title,
                    author: articles[article].author,
                    date: articles[article].date,
                    content: articles[article].content,


                });
            }
            this.setState({
                articles: newState
            })
        });
    }
    

    render() {

        var articleCounter = 0;


        return (
            <div>

                <Banner title='Blog Home'/>

                <Container className='wrapper'>
                    <Row className='row'>
                        
                        {this.state.articles.map((article) =>{
                            console.log(this.state.articles.length);

                            
                            return (
                                <Col>
                                    <BlogCard 
                                        title={article.title} 
                                        author={article.author} 
                                        description='Description'/>
                                </Col>
                            )
                        })}


                    </Row>

                    {/* <Row className='row'>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                        <Col>
                            <BlogCard></BlogCard>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        )
    }
}

export default BlogHomeView;