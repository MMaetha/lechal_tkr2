import React, { Component } from 'react';
import AgeBar from './ageBar'
import HeightBar from './heightBar'
import WeightBar from './weightBar'
import WeightWantBar from './weightWantBar'

class InfoBar extends Component {
  render() {
    return (
      <div>
        <AgeBar />
        <HeightBar />
        <WeightBar />
        <WeightWantBar />
      </div>
    )
  }
}

export default InfoBar;
