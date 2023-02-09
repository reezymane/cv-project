import React, { Component } from 'react';
import Educational from './components/Educational';
import GeneralInfo from './components/GeneralInfo';
import WorkHistory from './components/WorkHistory';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        text: '',
        id: uniqid()
      },
      email: {
        text: '',
        id: uniqid()
      },
      phone: {
        text: '',
        id: uniqid()
      }
    };
  };
  
  render() {
    return (
      <div className="App">
        <GeneralInfo info={this.state}/>
        <Educational />
        <WorkHistory />
      </div>
    );
  };
}

export default App;
