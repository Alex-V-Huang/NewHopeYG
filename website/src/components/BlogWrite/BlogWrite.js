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

  handleImage(e) {

    const reader = new FileReader();
    const fileInput = document.getElementById("file");    
    const img = document.getElementById("img");

    
    const f = e.target.files[0]
    reader.readAsDataURL(f);

    // reader.onload = e => {
    //   img.src = e.target.result;
    // }

    const background = document.getElementById('card-image')


    reader.onload = e => {

      console.log(e.target.result)
      background.style.backgroundImage = 'url(' + e.target.result + ')';
    }

    

  }



  render() {
    return (
      <div>
        <Card className="overall-card">
          <Card.Body>
            {/* <div className="card-top"> */}
            <div id='card-image'>

              {/* <Button id="AddImageButton" onClick={this.handleImage}>Add Image</Button> */}

              <input type='file' id='file' accept='image/*' onChange={this.handleImage}></input>

              <Card.Title>
                <input
                  name='title'
                  onChange={this.handleChange}
                  value={this.state.title}
                  placeholder="Insert title here..."
                  className="card-title-self">
                </input>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div>
                  <input
                    name='author'
                    onChange={this.handleChange}
                    value={this.state.author}
                    placeholder="Author"
                    className="card-subtitle-field">
                  </input>
                </div>
                <div>
                  <input
                    name='date'
                    placeholder="Date"
                    onChange={this.handleChange}
                    value={this.state.date}
                    className="card-subtitle-field">
                  </input>
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
                  className="card-content">
                </textarea>
              </Card.Text>
              <div className="submit-button-container">
                <Button id="SubmitButton" onClick={this.handleSubmit}> Submit</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BlogWrite;
