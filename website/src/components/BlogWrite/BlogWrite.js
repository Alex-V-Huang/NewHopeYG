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
            <Card.Title>
              <input
                placeholder="Insert title here..."
                style={{
                  marginTop: "15%",
                  width: "75%",
                  height: "100px",
                }}
              ></input>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <div>
                <input
                  placeholder="Author"
                  style={{
                    width: "15%",
                    height: "30px",
                    marginBottom: "5px",
                  }}
                ></input>
              </div>
              <div>
                <input
                  placeholder="Date"
                  style={{
                    width: "15%",
                    height: "30px",
                  }}
                ></input>
              </div>
            </Card.Subtitle>
            <Card.Text>
              <textarea
                placeholder="Content goes here..."
                rows="20"
                style={{
                  width: "100%",
                }}
              ></textarea>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogWrite;
