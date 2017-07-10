import React, { Component } from 'react';

class calcCal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dist: '',
      currentHeight: '',
      currentWeight: '',
      totalDist: '',
      MET: '',
      averageSpeed: '',
      cal: '',
      time: '',
      steps: '',
    }
    const MET = 2.9;
    const averageSpeed = 0.97;
    let steps = 1220;
    const dist = 0.414 * props.currentHeight;
    let totalDist = props.dist * props.steps / 100;
    let time = props.totalDist / averageSpeed;
    const cal = props.currentWeight * MET * props.time / 3600;
  }
  render(){
    return(
      <p>You have burned {this.cal} calories.</p>

    );
  }

}

export default calcCal;
