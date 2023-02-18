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
      },
      school: {
        text: '',
        id: uniqid()
      },
      study: {
        text: '',
        id: uniqid()
      },
      dateStudy: {
        text: '',
        id: uniqid()
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleStudyChange = this.handleStudyChange.bind(this);
    this.handleDateStudyChange = this.handleDateStudyChange.bind(this);

    this.onGeneralSubmit = this.onGeneralSubmit.bind(this);
    this.onGeneralEdit = this.onGeneralEdit.bind(this);
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

  handleSchoolChange = (event) => {
    this.setState({
      school: {
        text: event.target.value,
        id: this.state.school.id
      }
    })
  };

  handleStudyChange = (event) => {
    this.setState({
      study: {
        text: event.target.value,
        id: this.state.study.id
      }
    })
  };

  handleDateStudyChange = (event) => {
    this.setState({
      dateStudy: {
        text: event.target.value,
        id: this.state.dateStudy.id
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

  onGeneralEdit = () => {
    document.querySelector('.GeneralForm').style.display = 'block';
  };
  
  render() {
    const {
      name, 
      email,
      phone,
      school,
      study,
      dateStudy
    } = this.state;

    return (
      <div className="App">
        <div className='GeneralFormAndInfo'>
          <p className='GeneralHeading'>General Information</p>

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
            <input
             type='phone'
             id='phone'
             onChange={this.handlePhoneChange}
             value={phone.text}
            /><br />

            <button type='submit'>Submit</button>
          </form>

          <GeneralInfo name={name} email={email} phone={phone}/>

          <button type='button' className='EditButton' onClick={this.onGeneralEdit}>Edit</button>
        </div>

        <div className='EducationalFormAndInfo'>
          <p className='EducationalHeading'>Educational Experience</p>

          <form className='EducationalForm'>
            <label htmlFor='school'>School Name:</label><br />
            <input
             type='text'
             id='school'
             //onChange={}
             value={school.text}
             /><br />

            <label htmlFor='study'>Area of Study:</label><br />
            <input
             type='text'
             id='study'
             //onChange={}
             value={study.text}
             /><br />

            <label htmlFor='dateStudy'>Date of Study:</label><br />
            <input
             type='text'
             id='dateStudy'
             //onChange={}
             value={dateStudy.text}
             /><br />

            <button>Submit</button>
          </form>

          <Educational />

          <button>Edit</button>
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
