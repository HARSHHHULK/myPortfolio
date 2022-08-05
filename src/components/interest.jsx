import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { MdSportsCricket } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa"
import interest from '../images/Profiling-amico.png'

class Interests extends Component {
    //state = {  } 
    render() {
        return(
            <span>
            <br></br>
            <center><img width="250px" src={interest} alt="interest" /></center>
            <center>
            <Card style={{ width: 'auto' , background:"linear-gradient(#0396FF,#FFFFFF)"}}>        <Card.Body>
            <Card.Title><h6><b> INTERESTS </b></h6><h1><b></b></h1></Card.Title>
            <Card.Text><i>
            <h3><big> <FaPaintBrush></FaPaintBrush> <MdSportsCricket></MdSportsCricket> <FaCameraRetro></FaCameraRetro> <br></br> <SiAdobeillustrator></SiAdobeillustrator> <SiAdobelightroom></SiAdobelightroom> <SiAdobephotoshop></SiAdobephotoshop> <br></br> <SiBlender></SiBlender> </big></h3>
            </i></Card.Text>
            </Card.Body>
            </Card>
            <br></br>
            </center>
            </span>
        );
    }
}
 
export default Interests;