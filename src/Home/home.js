import React, { Component } from 'react'
import Graph from './graph'
import InfoBar from './InfoBar'
import calcCal from './calcCal'
import { Container } from 'reactstrap'

class Home extends Component {
  render() {
    document.title = "Home - Lechal";
    return (
      <Container>
        <h1 className="App-header">LECHAL TRACKr</h1>
        <InfoBar />
        <calcCal />
        <Graph />
      </Container>
    )
  }
}

export default Home;
