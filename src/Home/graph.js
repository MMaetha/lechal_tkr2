import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Chart from 'chart.js';

export default class Graph extends Component {

  componentDidMount() {
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
  }

  render() {
    return (
      <canvas id="myChart" width="200" height="200">Test</canvas>
    );
  }
}
