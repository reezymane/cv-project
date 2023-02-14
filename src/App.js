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

  handleNameChange = (event) => {
    this.setState({
      name: {
        text: event.target.value,
        id: this.state.name.id
      }
    })
  };

  handleEmailChange = (event) => {
    this.setState({
      email: {
        text: event.target.value,
        id: this.state.email.id
      }
    })
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: {
        text: event.target.value,
        id: this.state.phone.id
      }
    })
  };
  
  render() {
    const {name, email, phone} = this.state;

    return (
      <div className="App">
        <div className='Forms'>
          <form className='GeneralForm' onSubmit={this.onSubmitInfo}>
            <label htmlFor='name'>Name:</label><br />
              <input
               type='text'
               id='name'
               onChange={this.handleNameChange}
               value={name.text}
              /><br />

              <label htmlFor='email'>Email:</label><br />
              <input
               type='email'
               id='email' 
               onChange={this.handleEmailChange}
               value={email.text}
              /><br />

              <label htmlFor='phone'>Phone:</label><br />
              <input type='phone'
               id='phone'
               onChange={this.handlePhoneChange}
               value={phone.text}
              /><br />

              <button type='submit'>Submit</button>
              <button type='button'>Edit</button>
          </form>

          <form className='EducationalForm'>
              <button>Submit</button>
              <button>Edit</button>
          </form>

          <form className='WorkHistoryForm'>
              <button>Submit</button>
              <button>Edit</button>
          </form>
        </div>
        
        <div className='displayInfo'>
          <GeneralInfo />
          <Educational />
          <WorkHistory />
        </div>
        
      </div>
    );
  };
}

export default App;
