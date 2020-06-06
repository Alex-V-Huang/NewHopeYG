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
              Some image is going to go here
              <Card.Title
                style={{
                  marginTop: "15%",
                  width: "75%",
                  height: "100px",
                  fontSize: "40px",
                  textAlign: "bottom",
                }}
              >
                [TITLE FROM DB]
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <h2
                  style={{
                    width: "15%",
                    height: "30px",
                    marginBottom: "5px",
                    fontSize: "20px",
                  }}
                >
                  [AUTHOR]
                </h2>
                <h2
                  style={{
                    width: "15%",
                    height: "30px",
                    marginBottom: "5px",
                    fontSize: "20px",
                  }}
                >
                  [DATE]
                </h2>
              </Card.Subtitle>
            </div>
            <div>
              <Card.Text
                style={{
                  width: "100%",
                  fontSize: "20px",
                  padding: "2%",
                  border: "solid gray 1px",
                }}
              >
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
