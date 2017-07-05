import React, { Component } from 'react';

class AgeBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
        <p>age: {this.state.term} years.</p>
      </div>
    )
  }
}

export default AgeBar;
