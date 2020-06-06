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
                  placeholder="Insert title here..."
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
                    placeholder="Author"
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
                    placeholder="Date"
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
                  placeholder="Content goes here..."
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
