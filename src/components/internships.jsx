import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import internship from "../images/Internship-rafiki.png"
class Internships extends Component {
    //state = {  } 
    render() {
        return(

        <span>
        <br></br>
        <center><img width="250px" src={internship} alt = "intern"/></center>    
        <center>
        <Card style={{ width: 'auto' , background:"linear-gradient(#0396FF,#FFFFFF)"}}>        <Card.Body>
        <Card.Title><h6><b> INTERNSHIPS </b></h6><h1><b></b></h1></Card.Title>
        <Card.Text><i>
         No experience yet ! 
        </i></Card.Text>
        </Card.Body>
        </Card>
        <br></br>
        </center>
        </span>
        );
    }
}
 
export default Internships;