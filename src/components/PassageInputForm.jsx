import React, { Component } from 'react';

class PassageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {passage: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChange(event) {
    this.setState({passage: event.target.value});
  }

  handleNext(event) {
    this.props.onNextButtonClick(this.state.passage);
  }

  render () {
    return (
      <div>
        <textarea onChange={this.handleChange} />

        <button onClick={this.handleNext} >
          Next
        </button>
      </div>
    )
  }
}

export default PassageInputForm;
