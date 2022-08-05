import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

class Projects extends Component {
    //state = {  } 
    render() {
        return(
            <span>
            <br></br>
            <center><img width="250px" src={process.env.PUBLIC_URL+"Sharing Ideas-rafiki.png"} /></center>            <center>
            <Card style={{ width: 'auto' , background:"linear-gradient(#0396FF,#FFFFFF)"}}>        <Card.Body>
            <Card.Title><h6><b> PROJECTS </b></h6><h1><b></b></h1></Card.Title>
            <Card.Text><i>
             Nothing here ! 
            </i></Card.Text>
            </Card.Body>
            </Card>
            <br></br>
            </center>
            </span>
        );
    }
}
 
export default Projects;