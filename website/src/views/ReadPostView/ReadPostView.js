import React, { Component } from "react";
import "./ReadPostView.css";
import BlogRead from "../../components/BlogRead/BlogRead.js";

class ReadPostView extends Component {
  render() {
    return (
      <div>
        <div>This is the blog read post page.</div>
        <BlogRead></BlogRead>
      </div>
    );
  }
}

export default ReadPostView;
