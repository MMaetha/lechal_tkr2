import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap'
// import myImage from '../assets/shoes2.png'

class contact extends Component{
render(){
  document.title = "Contact Us - Lechal";
  return(
    <Container>
      <h1 className="App-header">LECHAL TRACKr</h1>
      <h2 className="">Contact Us</h2>
      <div id="three_support_contact">
                <div class="contact_us_content needPadding">
                    <div class="row row1">
                        <p class="montserratte extraBold compress_text">CONTACT</p>
                        <p class="montserratte extraBold compress_text">US</p>
                    </div>
                    <div class="row row2">
                        <div class="one">
                            <p class="montserratte">CUSTOMER SUPPORT</p>
                        </div>
                        <div class="two">
                            <p class="montserratte">GENERAL ENQUIRY</p>
                        </div>
                        <div class="three">
                        </div>
                    </div>
                    <div class="row row3">
                        <div class="one opensans">
                            <p class="opensans"><span class="icon"></span> support@lechal.com</p>
                            <p class="opensans"><span class="icon"></span> +91-40-27725900</p>
                        </div>
                        <div class="two opensans">
                            <p class="opensans"><span class="icon"></span> contact@duceretech.com</p>
                            <p class="opensans"><span class="icon"></span> +91-40-27713000</p>
                            <p class="opensans"><span class="icon"> &nbsp; </span> +91-40-27711700</p>
                        </div>
                        <div class="three opensans">
                            <p class="opensans"><span class="icon"></span> 222B West Marredpally,</p>
                            <p class="opensans"><span class="icon"> </span> Secunderabad-500026,</p>
                            <p class="opensans"><span class="icon"> &nbsp; </span> Telangana, India.</p>
                        </div>
                    </div>
                    <div class="row row4">
                        <div class="one">
                            <p class="montserratte">SALES &amp; DISTRUBUTION</p>
                        </div>
                        <div class="two">
                            <p class="montserratte">MEDIA ENQUIRY</p>
                        </div>
                        <div class="three">
                        </div>
                    </div>
                    <div class="row row5">
                        <div class="one opensans">
                            <p class="opensans"><span class="icon"></span> sales@duceretech.com</p>
                        </div>
                        <div class="two opensans">
                            <p class="opensans"><span class="icon"></span> media@duceretech.com</p>
                        </div>
                        <div class="three opensans">
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    )
  }
}

export default contact;
