import React, { Component } from "react";
import "./BlogHomeView.css";




import Navbar from '../../components/Navbar/Navbar.js';
import BlogCard from '../../components/BlogCard/BlogCard.js';
import Logo from '../../components/Logo/Logo.js';
import Banner from '../../components/Banner/Banner.js';

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