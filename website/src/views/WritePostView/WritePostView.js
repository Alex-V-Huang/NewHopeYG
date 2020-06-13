import React, { Component } from "react";
import "./WritePostView.css";
import BlogWrite from "../../components/BlogWrite/BlogWrite.js";

class WritePostView extends Component {
  render() {
    return (
      <div>
        <div>This is the blog write post page.</div>
        <BlogWrite> </BlogWrite>
      </div>
    );
  }
}

export default WritePostView;
