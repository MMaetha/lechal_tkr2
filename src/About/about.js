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
      <p>Lechal is smart footwear that can track your health, steps, calories and can guide you to have good health.</p>
      <Button
        id="buy"
        color="primary"
        href="https://store.lechal.com">Buy Now</Button>
    </Container>
    )
  }
}

export default about;
