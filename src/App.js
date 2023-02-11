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
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  };

  handleNameChange = (newName) => {
    this.setState({
      name: {
        text: newName,
        id: this.state.name.id
      }
    })
  };

  handleEmailChange = (newEmail) => {
    this.setState({
      email: {
        text: newEmail,
        id: this.state.email.id
      }
    })
  };

  handlePhoneChange = (newPhone) => {
    this.setState({
      phone: {
        text: newPhone,
        id: this.state.phone.id
      }
    })
  };
  
  render() {
    return (
      <div className="App">
        <GeneralInfo
        info={this.state}
        onNameChange={this.handleNameChange}
        onEmailChange={this.handleEmailChange}
        onPhoneChange={this.handlePhoneChange}
        />
        <Educational />
        <WorkHistory />
      </div>
    );
  };
}

export default App;
