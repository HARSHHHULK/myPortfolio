import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { DiCode } from "react-icons/di";
import intro from "../images/Modern life-rafiki.png";
class Introduction extends Component {
    render() {
        return(
        <span>
        <br></br>
        <center><img width="250px" src={intro} alt="intro"/></center>
        <center>
        <Card style={{ width: 'auto' , background:"linear-gradient(#0396FF,#FFFFFF)"}}>        <Card.Body>
        <Card.Title><h3><b> HARSH PATIL </b></h3><h1><b><DiCode></DiCode></b></h1></Card.Title>
        <Card.Text><i>
        Second Year B.Tech. Information Technology student at Sardar Patel Institute of Technology. Passionate learner and exploring aspects in Information Technology. Currently working on strengthening C and C++  and keen to master Full Stack Web Development. 
        </i></Card.Text>
        </Card.Body>
        </Card>
        <br></br>
        </center>
        </span>
        );
    }
}
 
export default Introduction;