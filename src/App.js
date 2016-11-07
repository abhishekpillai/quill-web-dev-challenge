import React, { Component } from 'react';
const logo = '//d2t498vi8pate3.cloudfront.net/assets/home-header-logo-8d37f4195730352f0055d39f7e88df602e2d67bdab1000ac5886c5a492400c9d.png';
import './App.css';

import { calculateDiffBetweenPassages } from './lib'

import PassageInputForm from './components/PassageInputForm'
import ErrorConceptAssignerList from './components/ErrorConceptAssignerList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passage: '',
      passageWithErrors: '',
      passageErrorsList: []
    };
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.setStage = this.setStage.bind(this);
    this.setStageHeader = this.setStageHeader.bind(this);
  }

  handleNextButtonClick(inputPassage) {
    if (this.state.passage === '') {
      this.setState({ passage: inputPassage });
    } else if (this.state.passageWithErrors === '') {
      let errorsList = calculateDiffBetweenPassages(this.state.passage, inputPassage);
      this.setState({
        passageWithErrors: inputPassage,
        passageErrorsList: errorsList
      });
    }
  }

  setStageHeader() {
    if (this.state.passageErrorsList.length)
      return "Assign Concepts to the Edits";
    else if (this.state.passage === '')
      return "Enter a passage of text";
    else if (this.state.passageWithErrors === '')
      return "Add some errors to the passage";
  }

  setStage() {
    if (this.state.passageErrorsList.length) {
      return (
        <ErrorConceptAssignerList
          passageErrors={this.state.passageErrorsList} />
      );
    } else {
      return (
        <PassageInputForm
          passage={this.state.passage}
          onNextButtonClick={this.handleNextButtonClick} />
      );
    }
  }

  render() {
    let stage, stageHeader;

    stageHeader = this.setStageHeader();
    stage = this.setStage();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Quill Web Dev Challenge</h2>
        </div>
        <h2>{stageHeader}</h2>
        {stage}
      </div>
    );
  }
}

export default App;
