import React, { Component } from 'react'
import Graph from './graph'
import InfoBar from './InfoBar'
import calcCal from './calcCal'
import { Container } from 'reactstrap'

class Home extends Component {
  chart;
  constructor() {
    super();

    this.setChart = this.setChart.bind(this);
    this.updateChart = this.updateChart.bind(this);
  }

  setChart(chart) {
    this.chart = chart;
  }

  updateChart(currentDay, steps) {
    let bgColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(247, 205, 204, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(145, 168, 208, 1)'
    ]

    this.chart.data.datasets[0].data.push(steps);
    this.chart.data.labels.push(`Day ${currentDay}`);
    this.chart.data.datasets[0].backgroundColor.push(bgColor[currentDay % bgColor.length]);
    this.chart.update();
  }

  render() {
    document.title = "Home - Lechal";
    return (
      <Container>
        <h1 className="App-header">LECHAL TRACKr</h1>
        <InfoBar updateChart={this.updateChart}/>
        ---/
        <calcCal />
        /---
        <Graph chart={this.setChart}/>
      </Container>
    )
  }
}

export default Home;
