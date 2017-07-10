import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Chart from 'chart.js';
import { Container } from 'reactstrap'

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
  <input
    name="age"
    type="number"
    min="1"
    onChange={event => this.setState({
      age: event.target.value
    })} />
  <p>age: {this.state.age} years.</p>
  componentDidMount() {
    var Date = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10",
                "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20",
                "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",
                "Day 31", "Day 32", "Day 33", "Day 34", "Day 35", "Day 36", "Day 37", "Day 38", "Day 39", "Day 40",
                "Day 41", "Day 42", "Day 43", "Day 44", "Day 45", "Day 46", "Day 47", "Day 48", "Day 49", "Day 50",
                "Day 51", "Day 52", "Day 53", "Day 54", "Day 55", "Day 56", "Day 57", "Day 58", "Day 59", "Day 60",
                "Day 61", "Day 62", "Day 63", "Day 64", "Day 65", "Day 66", "Day 67", "Day 68", "Day 69", "Day 70",
                "Day 71", "Day 72", "Day 73", "Day 74", "Day 75", "Day 76", "Day 77", "Day 78", "Day 79", "Day 80",
                "Day 81", "Day 82", "Day 83", "Day 84", "Day 85", "Day 86", "Day 87", "Day 88", "Day 89", "Day 90",
                "Day 91", "Day 92", "Day 93", "Day 94", "Day 95", "Day 96", "Day 97", "Day 98", "Day 99", "Day 100"
              ];
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
          label: 'Numbers of steps',
          data: [5493, 3121, 4861, 7100, 21281, 3198, 8212],

          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(247, 205, 204, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(145, 168, 208, 1)'
          ],
          borderColor: [
          ],
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
    document.getElementById('addData').addEventListener('click', function() {
        if (myChart.data.length > 0) {
            var day = Date[myChart.labels.length % Date.length];
            myChart.labels.push(day);

            for (var index = 0; index < myChart.data.length; ++index) {
                //window.myBar.addData(randomScalingFactor(), index);
                myChart.datasets[index].data.push(1000);
            }

            window.myChart.update();
        }
    });
  }

  render() {
    return (
      <Container>
        <button id="addData">Add Data</button>
        <canvas id="myChart" width="200" height="200" style={{backgroundColor: "#EEE"}}></canvas>
      </Container>
      );
  }
}
