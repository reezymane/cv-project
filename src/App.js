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

    this.handleNameChange = this.handleNameChange.bind(this);
  };

  handleNameChange = (newName) => {
    this.setState({
      name: {
        text: newName,
        id: this.state.name.id
      }
    })
  };
  
  render() {
    return (
      <div className="App">
        <GeneralInfo
        info={this.state}
        onNameChange={this.handleNameChange}
        />
        <Educational />
        <WorkHistory />
      </div>
    );
  };
}

export default App;
