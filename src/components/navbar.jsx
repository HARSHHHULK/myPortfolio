import React, { Component } from 'react'
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
    handleScroll1 = () =>{
        window.scrollBy(100, 100);
    }
    handleScroll2 = () =>{
        window.scrollBy(530, 530);
    }
    handleScroll3 = () =>{
        window.scrollBy(1180, 1180);
    }
    handleScroll4 = () =>{
        window.scrollBy(1550, 1550);
    }
    handleScroll5 = () =>{
        window.scrollBy(1920, 1920);
    }
    handleScroll6 = () =>{
        window.scrollBy(2550, 2550);
    }
    handleScroll7 = () =>{
        window.scrollBy(3000, 3000);
    }
    render() {
        return(
            <Navbar bg="primary" variant="dark">
                <pre> </pre>
                <Navbar.Brand onClick={this.handleScroll1} href="#1"><strong>Hello !</strong></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link onClick={this.handleScroll2} href="#2">Education</Nav.Link>
                <Nav.Link onClick={this.handleScroll3} href="#3">Internships</Nav.Link>
                <Nav.Link onClick={this.handleScroll4} href="#4">Projects</Nav.Link>
                <Nav.Link onClick={this.handleScroll5} href="#5">Skills</Nav.Link>
                <Nav.Link onClick={this.handleScroll6} href="#6">Interest</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
 
export default NavBar;