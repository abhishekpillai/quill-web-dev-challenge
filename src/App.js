import React, { Component } from 'react';
const logo = '//d2t498vi8pate3.cloudfront.net/assets/home-header-logo-8d37f4195730352f0055d39f7e88df602e2d67bdab1000ac5886c5a492400c9d.png';
import './App.css';

import PassageInputForm from './components/PassageInputForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passage: '',
      passageWithErrors: '',
      passageErrorsList: []
    };
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.calculateErrorsDiffList = this.calculateErrorsDiffList.bind(this);
  }

  handleNextButtonClick(passage) {
    if (this.state.passage === '') {
      this.setState({ passage: passage });
    } else if (this.state.passageWithErrors === '') {
      let errorsList = this.calculateErrorsDiffList(passage);
      this.setState({ passageWithErrors: passage, passageErrorsList: errorsList });
    }
  }

  calculateErrorsDiffList(passageWithErrors) {
    let passageArray = this.state.passage.split(' ');
    let passageWithErrorsArray = passageWithErrors.split(' ');

    passageArray.forEach((correctWord, index) => {
      let possibleErrorWord = passageWithErrorsArray[index];
      if (correctWord !== possibleErrorWord) {
        this.state.passageErrorsList.push([correctWord, possibleErrorWord])
      }
    });

    return this.state.passageErrorsList;
  }

  render() {
    let stage;

    if (!!this.state.passage && !!this.state.passageWithErrors) {
      stage = (
        <div>
          <h2>Differences</h2>
          <ul>
            {
              this.state.passageErrorsList.map((error, index) => {
                return <li key={index}>{error[0]} / {error[1]}</li>;
              })
            }
          </ul>
        </div>
      )
    } else {
      stage = (
        <PassageInputForm
          passage={this.state.passage}
          onNextButtonClick={this.handleNextButtonClick} />
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Quill Web Dev Challenge</h2>
        </div>
        {stage}
      </div>
    );
  }
}

export default App;
