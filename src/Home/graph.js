import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Chart from 'chart.js';
import { Container } from 'reactstrap'
import LocalStorage from '../api/localStorage';

export default class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: '',
      currentHeight: '',
      currentWeight: '',
      targetWeight: '',
    }
  }
  componentDidMount() {
    let bgColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(247, 205, 204, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(145, 168, 208, 1)'
    ]
    let data = LocalStorage.getData('data');

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Numbers of steps',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            time: {
              unit: 'day'
            }
          }]
        }
      }
    });

    this.props.chart(myChart);

    if (myChart && data) {
      for (var index = 0; index < data.day.length; index++) {
        myChart.data.datasets[0].data.push(data.day[index].steps);
        myChart.data.labels.push(`Day ${index+1}`);
        myChart.data.datasets[0].backgroundColor.push(bgColor[index % bgColor.length]);
      }

      myChart.update();
    }
  }

  render() {
    return (
      <canvas
        id="myChart"
        width="200"
        height="200"
        style={{ backgroundColor: "#EEE", paddingTop: "20px" }}>
      </canvas>
    );
  }
}
