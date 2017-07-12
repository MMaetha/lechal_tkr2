import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap'

class contact extends Component{
render(){
  document.title = "Contact Us - Lechal";
  return(
    <Container>
      <h1 className="App-header">LECHAL TRACKr</h1>
      <Button
        id="contact"
        color="primary"
        href="https://duceretech.com/ducere/contact.html">Contact Us</Button>
    </Container>
    )
  }
}

export default contact;
