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
        <Card
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottom: "20px",
            width: "80rem",
            height: "50%",
          }}
        >
          <Card.Body>
            <div
              style={{
                backgroundColor: "gray",
                paddingLeft: "2%",
                paddingBottom: "2%",
              }}
            >
              <Button
                style={{
                  float: "right",
                  margin: "2%",
                  width: "90px",
                  height: "35px",
                  fontSize: "12px",
                  backgroundColor: "#f6e173",
                  border: "none",
                  color: "black",
                }}
              >
                {" "}
                Add Image
              </Button>
              Some image is going to go here
              <Card.Title>
                <input
                  name='title'
                  placeholder="Insert title here..."
                  onChange={this.handleChange}
                  value={this.state.title}
                  style={{
                    marginTop: "15%",
                    width: "75%",
                    height: "100px",
                    fontSize: "40px",
                    textAlign: "bottom",
                  }}
                ></input>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div>
                  <input
                    name='author'
                    placeholder="Author"
                    onChange={this.handleChange}
                    value={this.state.author}
                    style={{
                      width: "15%",
                      height: "30px",
                      marginBottom: "5px",
                      fontSize: "20px",
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    name='date'
                    placeholder="Date"
                    onChange={this.handleChange}
                    value={this.state.date}
                    style={{
                      width: "15%",
                      height: "30px",
                      fontSize: "20px",
                    }}
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
                  style={{
                    width: "100%",
                    fontSize: "20px",
                    padding: "2%",
                  }}
                ></textarea>
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button 
                  onClick={this.handleSubmit} 
                  style={{
                    width: "250px",
                    height: "35px",
                    fontSize: "12px",
                    backgroundColor: "#f6e173",
                    border: "none",
                    color: "black",
                  }}
                >
                  {" "}
                  Submit
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogWrite;
