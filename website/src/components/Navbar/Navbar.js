import React, { Component } from "react";
import "./Navbar.css";

import Navibar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navbar extends Component {

    render() {

        return (
            <div>
                <Navibar className='color-nav' >
                    <Navibar.Toggle aria-controls="basic-navbar-nav" />
                    <Navibar.Collapse id="basic-navbar-nav">
                        <Nav justified fill>
                            <Nav.Link className='color-text' href="/">Home</Nav.Link>
                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/blog">Read</NavDropdown.Item>
                                <NavDropdown.Item href="/blog/write">Post</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                            <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        </Nav>

                    </Navibar.Collapse>
                </Navibar>
            </div>
        )
    }
}

export default Navbar;