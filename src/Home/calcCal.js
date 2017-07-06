import React, { Component } from 'react';
import InfoBar from './InfoBar';

class calcCal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dist: '',
      currentHeight: '',
      currentWeight: '',
      totalDist: '',
      MET: "2.9",
      averageSpeed: "0.97",
      cal: '',
      time: '',
      steps: '',
    }
    const dist = 0.414 * props.currentHeight;
    let totalDist = props.dist * props.steps / 100;
    let time = props.totalDist / averageSpeed;
    const cal = props.currentWeight * MET * props.time / 3600;
  }


}

export default calcCal;
