import React, { Component } from "react";
import "./BlogHomeView.css";




import Navbar from '../Navbar/Navbar.js';
import BlogCard from '../BlogCard/BlogCard.js';
import Logo from '../Logo/Logo.js';
import Banner from '../Banner/Banner.js';

class BlogHomeView extends Component {

    render() {

        return (
            <div>

                <Logo></Logo>
                
                <Navbar />

                <Banner />
                


                <BlogCard />

            </div>
        )
    }
}

export default BlogHomeView;