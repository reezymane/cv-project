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

  onGeneralSubmit = (event) => {
    event.preventDefault();

    this.setState({
      name: {
        text: this.state.name.text,
        id: uniqid()
      },
      email: {
        text: this.state.email.text,
        id: uniqid()
      },
      phone: {
        text: this.state.phone.text,
        id: uniqid()
      }
    });

    document.querySelector('.GeneralForm').style.display = 'none';
  };
  
  render() {
    const {name, email, phone} = this.state;

    return (
      <div className="App">
        <div className='GeneralFormAndInfo'>
          <form className='GeneralForm' onSubmit={this.onGeneralSubmit}>
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

          <GeneralInfo name={name} email={email} phone={phone}/>
        </div>

        <div className='EducationalFormAndInfo'>
          <form className='EducationalForm'>
              <button>Submit</button>
              <button>Edit</button>
          </form>

          <Educational />
        </div>

        <div className='WorkHistoryFormAndInfo'>
          <form className='WorkHistoryForm'>
              <button>Submit</button>
              <button>Edit</button>
          </form>

          <WorkHistory />
        </div>
      </div>
    );
  };
}

export default App;
