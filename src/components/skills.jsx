import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

class Skills extends Component {
    //state = {  } 
    render() {
        return(
            <span>
            <br></br>
            <center>  <center><img width="250px" src={process.env.PUBLIC_URL+"Static website-amico.png"} /></center></center>            <center>
            <Card style={{ width: 'auto' , background:"linear-gradient(#0396FF,#FFFFFF)"}}>        
            <Card.Body>
            <Card.Title><h6><b> SKILLS </b></h6><h1><b></b></h1></Card.Title>
            <Card.Text><i>
            <center><h1><big><DiReact></DiReact><DiHtml5></DiHtml5><DiCss3></DiCss3><DiJavascript></DiJavascript><br></br>
            <SiCplusplus></SiCplusplus><DiJava></DiJava><DiPython></DiPython><br></br>
            <SiMysql></SiMysql><DiMongodb></DiMongodb><DiPhp></DiPhp><br></br>
            <FiFigma></FiFigma></big></h1></center> 
            </i></Card.Text>
            </Card.Body>
            </Card>
            <br></br>
            </center>
            </span>
        );
    }
}
 
export default Skills;