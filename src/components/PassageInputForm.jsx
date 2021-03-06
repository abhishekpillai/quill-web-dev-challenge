import React, { Component, PropTypes } from 'react';

class PassageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {passage: props.passage};
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChange(event) {
    this.setState({passage: event.target.value});
  }

  handleNext() {
    this.props.onNextButtonClick(this.state.passage);
  }

  render () {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.passage}
          placeholder="Please enter a passage" />

        <button onClick={this.handleNext} >Next</button>
      </div>
    )
  }
}

PassageInputForm.propTypes = {
  passage: PropTypes.string.isRequired,
  onNextButtonClick: PropTypes.func.isRequired
}

export default PassageInputForm;
