import React, { Component } from 'react';
import { Button } from 'reactstrap';

class InfoBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: '',
      currentHeight: '',
      currentWeight: '',
      targetWeight: '',
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="age"
            type="number"
            min="1"
            onChange={event => this.setState({
              age: event.target.value
            })} />
          <p>age: {this.state.age} years.</p>

          <input
            name="currentHeight"
            type="number"
            min="1"
            onChange={event => this.setState({
              currentHeight: event.target.value
            })} />
          <p>current height: {this.state.currentHeight} cm.</p>

          <input
            name="currentWeight"
            type="number"
            min="1"
            onChange={event => this.setState({
              currentWeight: event.target.value
            })} />
          <p>current weight: {this.state.currentWeight} kg.</p>

          <input
            name="targetWeight"
            type="number"
            min="1"
            onChange={event => this.setState({
              targetWeight: event.target.value
            })} />
          <p>target weight: {this.state.targetWeight} kg.</p>

          <Button id="addData" color="primary">Add Data</Button>

          <p>Your BMI: {(this.state.currentWeight * 10000 / (this.state.currentHeight * this.state.currentHeight)).toFixed(2)};</p>
          <p>Weight to loss: {this.state.currentWeight - this.state.targetWeight} kg. </p>
        </form>
      </div>
    )
  }
}

export default InfoBar;
