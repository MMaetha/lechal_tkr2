import React, { Component } from 'react';
import { Button } from 'reactstrap';
import LocalStorage from '../api/localStorage';

class InfoBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: '',
      currentHeight: '',
      currentWeight: '',
      targetWeight: '',
      steps: '',
      totalDist: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = LocalStorage.getData('data');

    if (data == null) {
      data = {
        currentDay: 0,
        day: []
      };
    }

    this.props.updateChart(data.currentDay, this.state.steps);

    data.day[data.currentDay] = this.state;
    data.currentDay++;

    LocalStorage.setData('data', data);
    console.log(LocalStorage.getData('data'));
  }

  render() {
    return (
      <form method="post" action="" onSubmit={this.handleSubmit}>
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

        <input
          name="steps"
          type="number"
          min="1"
          onChange={event => this.setState({
            steps: event.target.value
          })} />
        <p>steps: {this.state.steps}</p>

        <Button id="addData" color="primary">Add Data</Button>

        <p className="word-phase">Your BMI: {(this.state.currentWeight * 10000 / (this.state.currentHeight * this.state.currentHeight)).toFixed(2)};</p>
        <p className="word-phase">Weight to loss: {this.state.currentWeight - this.state.targetWeight} kg. </p>
        <p className="word-phase">You have burned {(this.state.currentWeight * 2.9 * (0.414 * this.state.currentHeight * this.state.steps / 100 / 0.97) / 3600).toFixed(2)} calories.</p>
      </form>
    )
  }
}

export default InfoBar;
