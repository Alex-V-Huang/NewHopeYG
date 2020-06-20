import React, { Component } from "react";
import "./BlogWrite.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import firebase from '../../firebase.js';

class BlogWrite extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      date: '',
      content: '',


    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('onFormSubmit: ', this);

    const articlesRef = firebase.database().ref('articles');
    const article = {
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      content: this.state.content,
    }
    articlesRef.push(article);
    this.setState({
      title: '',
      author: '',
      date: '',
      content: '',
    })
  }

  render() {
    return (
      <div>
        <Card className="overall-card">
          <Card.Body>
            <div className="card-top">
              <Button id="AddImageButton"> Add Image</Button>
              Some image is going to go here
              <Card.Title>
                <input
                  name='title'
                  placeholder="Insert title here..."
<<<<<<< HEAD
                  onChange={this.handleChange}
                  value={this.state.title}
                  style={{
                    marginTop: "15%",
                    width: "75%",
                    height: "100px",
                    fontSize: "40px",
                    textAlign: "bottom",
                  }}
=======
                  className="card-title-self"
>>>>>>> 940bb44ea8ee397732aa01fbd4b60b1f235557be
                ></input>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div>
                  <input
                    name='author'
                    placeholder="Author"
<<<<<<< HEAD
                    onChange={this.handleChange}
                    value={this.state.author}
                    style={{
                      width: "15%",
                      height: "30px",
                      marginBottom: "5px",
                      fontSize: "20px",
                    }}
=======
                    className="card-subtitle-field"
>>>>>>> 940bb44ea8ee397732aa01fbd4b60b1f235557be
                  ></input>
                </div>
                <div>
                  <input
                    name='date'
                    placeholder="Date"
<<<<<<< HEAD
                    onChange={this.handleChange}
                    value={this.state.date}
                    style={{
                      width: "15%",
                      height: "30px",
                      fontSize: "20px",
                    }}
=======
                    className="card-subtitle-field"
>>>>>>> 940bb44ea8ee397732aa01fbd4b60b1f235557be
                  ></input>
                </div>
              </Card.Subtitle>
            </div>
            <div>
              <Card.Text>
                <textarea
                  name='content'
                  placeholder="Content goes here..."
                  onChange={this.handleChange}
                  value={this.state.content}
                  rows="20"
                  className="card-content"
                ></textarea>
              </Card.Text>
              <div className="submit-button-container">
                <Button id="SubmitButton" onClick={this.handleSubmit}> Submit</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogWrite;
