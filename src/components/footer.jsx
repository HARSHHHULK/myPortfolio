import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DiGithubBadge} from "react-icons/di"
import { AiFillInstagram} from "react-icons/ai"
import { AiFillLinkedin} from "react-icons/ai"
import { HiMail} from "react-icons/hi"
import { FaHeart} from "react-icons/fa"
//import { FaDownload} from "react-icons/fa"

class Footer extends Component {
    render() {
        return(
        <div><center><img width="250px" src={process.env.PUBLIC_URL+"Get in touch-amico.png"} /></center>
         <Navbar bg="primary" variant="dark">
                <pre> </pre>
                <Navbar.Brand onClick={this.handleScroll1} href="#1"><h5>Want to know more about me ? Contact Me here !</h5></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link  href="https://www.linkedin.com/in/harsh-patil-aa441b204/"><h3><AiFillLinkedin></AiFillLinkedin></h3></Nav.Link>
                <Nav.Link  href="https://www.instagram.com/har_sshhh_/"><h3><AiFillInstagram></AiFillInstagram></h3></Nav.Link>
                <Nav.Link  href="#3"><h3><HiMail></HiMail></h3></Nav.Link>
                <Nav.Link  href="https://github.com/HARSHHHULK"><h3><DiGithubBadge></DiGithubBadge></h3></Nav.Link>
                </Nav>
            </Navbar>
            <br></br>
            <center><p><h5>Made with <FaHeart></FaHeart> by Harsh Patil !</h5></p></center>
        </div>
        );
    }
}
 
export default Footer;