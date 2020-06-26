import React, { Component } from "react";
import "./BlogCard.css";

import Card from "react-bootstrap/Card";

class BlogCard extends Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    function parseContent(content) {
      // Split content by spaces
      let contentArray = content.split(" ");

      // Description
      let description = "";

      // Concatenate the string together
      for (let i = 0; i < 5; i++) {
        if (contentArray[i] == null) {
          return description;
        }
        description = description + " " + contentArray[i];
      }
      return description + "...";
    }

    return (
      <div>
        <Card style={{ width: "18rem", display: "inline-block" }}>
          <Card.Img
            variant="top"
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            src="holder.js/100px180"
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.author}
            </Card.Subtitle>
            {console.log(this.props)}
            <Card.Text>{parseContent(this.props.description)}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogCard;
