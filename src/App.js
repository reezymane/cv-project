import React, { Component } from 'react';
import Educational from './components/Educational';
import GeneralInfo from './components/GeneralInfo';
import WorkHistory from './components/WorkHistory';

class App extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="App">
        <Educational />
        <GeneralInfo />
        <WorkHistory />
      </div>
    );
  };
}

export default App;
