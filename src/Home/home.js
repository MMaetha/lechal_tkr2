import React, { Component } from 'react'
import Graph from './graph'
import InfoBar from './InfoBar'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h1>LECHAL TRACKr</h1>
        </div>
        <InfoBar />
        <Graph />
      </div>
    )
  }
}

export default Home;
