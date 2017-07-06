import React, { Component } from 'react'
import Graph from './graph'
import InfoBar from './InfoBar'

import { Container } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <Container>
        <h1 className="App-header">LECHAL TRACKr</h1>
        <InfoBar />
        <Graph />
      </Container>
    )
  }
}

export default Home;
