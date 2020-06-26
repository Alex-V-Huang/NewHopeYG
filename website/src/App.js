import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomepageView from "./views/HomepageView/HomepageView.js";
import BlogHomeView from "./views/BlogHomeView/BlogHomeView.js";
import ReadPostView from "./views/ReadPostView/ReadPostView.js";
import WritePostView from "./views/WritePostView/WritePostView.js";
import FAQView from "./views/FAQView/FAQView.js";
import ContactUsView from "./views/ContactUsView/ContactUsView";

import Logo from "./components/Logo/Logo.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Logo></Logo>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" render={() => <HomepageView></HomepageView>} />
          <Route
            exact
            path="/blog"
            render={() => <BlogHomeView></BlogHomeView>}
          />
          <Route
            path="/blog/read"
            render={() => <ReadPostView></ReadPostView>}
          />
          <Route
            path="/blog/write"
            render={() => <WritePostView></WritePostView>}
          />
          <Route path="/faq" render={() => <FAQView></FAQView>} />
          <Route
            path="/contactus"
            render={() => <ContactUsView></ContactUsView>}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
