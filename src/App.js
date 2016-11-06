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
    };
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  handleNextButtonClick(passage) {
    this.setState({ passage: passage });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Quill Web Dev Challenge</h2>
        </div>
        <PassageInputForm onNextButtonClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

export default App;
