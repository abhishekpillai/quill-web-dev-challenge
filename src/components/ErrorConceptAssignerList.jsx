import React, { Component, PropTypes } from 'react';

class ErrorConceptAssigner extends Component {
  constructor(props) {
    super(props);
    this.state = {grammaticalConcept: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({grammaticalConcept: event.target.value});
  }

  render () {
    return (
      <li>
        {this.props.correctWord} / {this.props.errorWord}
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="">Select Option</option>
          <option value="articles">Articles</option>
          <option value="commas">Commas</option>
          <option value="proper nouns">Proper Nouns</option>
        </select>
      </li>
    )
  }
}

ErrorConceptAssigner.propTypes = {
  correctWord: PropTypes.string.isRequired,
  errorWord: PropTypes.string.isRequired
}

class ErrorConceptAssignerList extends Component {
  render () {
    return (
      <ul>
        {
          this.props.passageErrors.map((passageError, index) => {
            return <ErrorConceptAssigner
              key={index}
              correctWord={passageError.correctWord}
              errorWord={passageError.errorWord} />;
          })
        }
      </ul>
    )
  }
}

ErrorConceptAssignerList.propTypes = {
  passageErrors: PropTypes.array.isRequired
}

export default ErrorConceptAssignerList;
