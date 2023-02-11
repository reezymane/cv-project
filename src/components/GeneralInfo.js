import React, { Component } from 'react';

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.onSubmitInfo = this.onSubmitInfo.bind(this);
    };

    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    };

    handleEmailChange = (event) => {
        this.props.handleEmailChange(event.target.value);
    };

    handlePhoneChange = (event) => {
        this.props.handlePhoneChange(event.target.value);
    };

    onSubmitInfo = () => {};

    render() {
    const {info} = this.props;

        return (
            <form onSubmit={this.onSubmitInfo}>
                <label htmlFor='name'>Name:</label><br />
                <input
                 type='text'
                 id='name'
                 onChange={this.handleNameChange}
                 value={info.name.text}
                /><br />

                <label htmlFor='email'>Email:</label><br />
                <input
                 type='email'
                 id='email' 
                 onChange={this.handleEmailChange}
                 value={info.email.text}
                /><br />

                <label htmlFor='phone'>Phone:</label><br />
                <input type='phone'
                 id='phone'
                 onChange={this.handlePhoneChange}
                 value={info.phone.text}
                /><br />

                <button type='submit'>Submit</button>
                <button type='button'>Edit</button>
            </form>
        );
    };
};