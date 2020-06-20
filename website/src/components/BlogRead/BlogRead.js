import React, { Component } from "react";
import "./BlogRead.css";
import Card from "react-bootstrap/Card";

class BlogRead extends Component {
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
              Some image is going to go here
              <Card.Title className="card-title-self">
                [TITLE FROM DB]
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <h2 className="card-subtitle-field">[AUTHOR]</h2>
                <h2 className="card-subtitle-field">[DATE]</h2>
              </Card.Subtitle>
            </div>
            <div>
              <Card.Text className="card-content">
                [Content goes here]
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogRead;
