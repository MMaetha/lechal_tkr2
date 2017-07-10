import React, { Component } from 'react';

export default class calcCal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cal: '',
    }

    let currentHeight = 20;
    let currentWeight = 20;
    const MET = 2.9;
    const averageSpeed = 0.97;
    let steps = 1220;
    const dist = 0.414 * currentHeight;
    let totalDist = dist * steps / 100;
    let time = totalDist / averageSpeed;
    this.setState({cal: currentWeight * MET * time / 3600});
  }
  render() {
    return (
      <div>
        <p>You have burned {this.state.cal} calories.</p>
      </div>
    );
  }

}