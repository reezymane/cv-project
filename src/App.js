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
      },
      companyName: {
        text: '',
        id: uniqid()
      },
      positionTitle: {
        text: '',
        id: uniqid()
      },
      mainTasks: {
        text: '',
        id: uniqid()
      },
      dateEmployed: {
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
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleMainTasksChange = this.handleMainTasksChange.bind(this);
    this.handleDateEmployedChange = this.handleDateEmployedChange.bind(this);

    this.onGeneralSubmit = this.onGeneralSubmit.bind(this);
    this.onEducationalSubmit = this.onEducationalSubmit.bind(this);

    this.onGeneralEdit = this.onGeneralEdit.bind(this);
    this.onEducationalEdit = this.onEducationalEdit.bind(this);
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

  handleCompanyNameChange = (event) => {
    this.setState({
      companyName: {
        text: event.target.value,
        id: this.state.companyName.id
      }
    })
  };

  handlePositionTitleChange = (event) => {
    this.setState({
      positionTitle: {
        text: event.target.value,
        id: this.state.positionTitle.id
      }
    })
  };

  handleMainTasksChange = (event) => {
    this.setState({
      mainTasks: {
        text: event.target.value,
        id: this.state.mainTasks.id
      }
    })
  };

  handleDateEmployedChange = (event) => {
    this.setState({
      dateEmployed: {
        text: event.target.value,
        id: this.state.dateEmployed.id
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
    document.querySelector('.GeneralInfo').style.display = 'block';
    document.querySelector('.GeneralEditButton').style.display = 'block';
  };

  onEducationalSubmit = (event) => {
    event.preventDefault();

    this.setState({
      school: {
        text: this.state.school.text,
        id: uniqid()
      },
      study: {
        text: this.state.study.text,
        id: uniqid()
      },
      dateStudy: {
        text: this.state.dateStudy.text,
        id: uniqid()
      }
    });

    document.querySelector('.EducationalForm').style.display = 'none';
    document.querySelector('.EducationalInfo').style.display = 'block';
    document.querySelector('.EducationalEditButton').style.display = 'block';
  };

  onWorkSubmit = (event) => {
    event.preventDefault();

    this.setState({
      companyName: {
        text: this.state.companyName.text,
        id: uniqid()
      },
      positionTitle: {
        text: this.state.positionTitle.text,
        id: uniqid()
      },
      mainTasks: {
        text: this.state.mainTasks.text,
        id: uniqid()
      },
      dateEmployed: {
        text: this.state.dateEmployed.text,
        id: uniqid()
      }
    });

    document.querySelector('.WorkHistoryForm').style.display = 'none';
    document.querySelector('.WorkInfo').style.display = 'block';
    document.querySelector('.WorkEditButton').style.display = 'block';
  };

  onGeneralEdit = () => {
    document.querySelector('.GeneralForm').style.display = 'block';
    document.querySelector('.GeneralInfo').style.display = 'none';
    document.querySelector('.GeneralEditButton').style.display = 'none';
  };

  onEducationalEdit = () => {
    document.querySelector('.EducationalForm').style.display = 'block';
    document.querySelector('.EducationalInfo').style.display = 'none';
    document.querySelector('.EducationalEditButton').style.display = 'none';
  };

  onWorkEdit = () => {
    document.querySelector('.WorkHistoryForm').style.display = 'block';
    document.querySelector('.WorkInfo').style.display = 'none';
    document.querySelector('.WorkEditButton').style.display = 'none';
  };
  
  render() {
    const {
      name, 
      email,
      phone,
      school,
      study,
      dateStudy,
      companyName,
      positionTitle,
      mainTasks,
      dateEmployed
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

          <button type='button' className='GeneralEditButton' onClick={this.onGeneralEdit}>Edit</button>
        </div>

        <div className='EducationalFormAndInfo'>
          <p className='EducationalHeading'>Educational Experience</p>

          <form className='EducationalForm' onSubmit={this.onEducationalSubmit}>
            <label htmlFor='school'>School Name:</label><br />
            <input
             type='text'
             id='school'
             onChange={this.handleSchoolChange}
             value={school.text}
             /><br />

            <label htmlFor='study'>Area of Study:</label><br />
            <input
             type='text'
             id='study'
             onChange={this.handleStudyChange}
             value={study.text}
             /><br />

            <label htmlFor='dateStudy'>Date of Study:</label><br />
            <input
             type='text'
             id='dateStudy'
             onChange={this.handleDateStudyChange}
             value={dateStudy.text}
             /><br />

            <button type='submit'>Submit</button>
          </form>

          <Educational school={school} study={study} dateStudy={dateStudy}/>

          <button type='button' className='EducationalEditButton' onClick={this.onEducationalEdit}>Edit</button>
        </div>

        <div className='WorkHistoryFormAndInfo'>
          <form className='WorkHistoryForm' onSubmit={this.onWorkSubmit}>
            <label htmlFor='companyName'>Company Name:</label><br />
            <input
             type='text'
             id='companyName'
             onChange={this.handleCompanyNameChange}
             value={companyName.text}
             /><br />

            <label htmlFor='positionTitle'>Position Title:</label><br />
            <input
             type='text'
             id='positionTitle'
             onChange={this.handlePositionTitleChange}
             value={positionTitle.text}
            /><br />

            <label htmlFor='mainTasks'>Main Tasks:</label><br />
            <textarea
             type='text'
             id='mainTasks'
             onChange={this.handleMainTasksChange}
             value={mainTasks.text}
            /><br />

            <label htmlFor='dateEmployed'>Date of Employment:</label><br />
            <input
             type='text'
             id='dateEmployed'
             onChange={this.handleDateEmployedChange}
             value={dateEmployed.text}
            /><br />

            <button type='submit'>Submit</button>
          </form>

          <WorkHistory companyName={companyName} positionTitle={positionTitle} mainTasks={mainTasks} dateEmployed={dateEmployed}/>

          <button type='button' className='WorkEditButton' onClick={this.onWorkEdit}>Edit</button>
        </div>
      </div>
    );
  };
}

export default App;
