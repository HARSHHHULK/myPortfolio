import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
//import { FiBookOpen } from "react-icons/fi";
class Education extends Component {
    //state = {  } 
    render() {
        return(
        <span>
                <center>  <center><img width="250px" src={process.env.PUBLIC_URL+"Webinar-rafiki.png"} /></center></center>
        <center>
        <Card style={{ width: 'auto' , background:"linear-gradient(#0396FF,#FFFFFF)"}}>
        <Card.Body>
        <Card.Title><h6><b>EDUCATION</b></h6></Card.Title>
        <br></br>
        <Card.Subtitle style={{color: 'black'}} className="mb-2 "> B.Tech Information Technology (S.E.) </Card.Subtitle>
        <Card.Text>
        <b>8.32 C.G.P.A. (F.Y.)</b>
        <br></br>
        <i>SARDAR PATEL INSTITUTE OF TECHNOLOGY, ANDHERI. (2024 - PROJECTED)</i>
        </Card.Text>
        <hr></hr>
        <Card.Subtitle style={{color: 'black'}} className="mb-2 "> CLASS XII HSC </Card.Subtitle>
        <Card.Text>
        <b>86.9 %</b>
        <br></br>
        <i>SARVAJANIK VIDYAMANDIR AND JUNIOR COLLEGE, PEN. (2020)</i>
        </Card.Text>
        <hr></hr>
        <Card.Subtitle style={{color: 'black'}} className="mb-2"> CLASS X SSC </Card.Subtitle>
        <Card.Text>
        <b>94.4 %</b>
        <br></br>
        <i>
        CARMEL HIGH SCHOOL, PEN. (NUR - I + V - X) (2018)
        ASC PUBLIC SCHOOL, BANGALORE ( II - IV )
        </i>
        </Card.Text>
        </Card.Body>
        </Card>
        </center>
        <br></br>
        </span>);
    }}

    export default Education;