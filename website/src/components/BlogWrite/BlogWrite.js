import React, { Component } from "react";
import "./BlogWrite.css";
import Card from "react-bootstrap/Card";

class BlogWrite extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <Card style={{ margin: "auto", width: "80rem" }}>
          <Card.Body>
            <Card.Title>Post Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogWrite;
