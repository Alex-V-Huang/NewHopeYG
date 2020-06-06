import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomepageView from "./views/HomepageView/HomepageView.js";
import BlogHomeView from "./views/BlogHomeView/BlogHomeView.js";
import ReadPostView from "./views/ReadPostView/ReadPostView.js";
import WritePostView from "./views/WritePostView/WritePostView.js";
import FAQView from "./views/FAQView/FAQView.js";
import ContactUsView from "./views/ContactUsView/ContactUsView";
import Footer from "./components/Footer";
import FAQCard from "./components/FAQCard";

class App extends Component {
  render() {
    return (
      <div>
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
        <FAQCard />
      </div>
    );
  }
}

export default App;
