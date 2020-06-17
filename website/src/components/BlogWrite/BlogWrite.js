import React, { Component } from "react";
import "./BlogWrite.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Card className="overall-card">
          <Card.Body>
            <div className="card-top">
              <Button id="AddImageButton"> Add Image</Button>
              Some image is going to go here
              <Card.Title>
                <input
                  placeholder="Insert title here..."
                  className="card-title-self"
                ></input>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div>
                  <input
                    placeholder="Author"
                    className="card-subtitle-field"
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="Date"
                    className="card-subtitle-field"
                  ></input>
                </div>
              </Card.Subtitle>
            </div>
            <div>
              <Card.Text>
                <textarea
                  placeholder="Content goes here..."
                  rows="20"
                  className="card-content"
                ></textarea>
              </Card.Text>
              <div className="submit-button-container">
                <Button id="SubmitButton"> Submit</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogWrite;
