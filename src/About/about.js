import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap'
// import myImage from '../assets/shoes2.png'

class about extends Component{
render(){
  document.title = "About - Lechal";
  return(
    <Container>
      <h1 className="App-header">LECHAL TRACKr</h1>
      <h2 className="">About LECHAL</h2>
      <p></p>
    </Container>
    )
  }
}

export default about;
