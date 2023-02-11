import React, { Component } from 'react';

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    };

    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    };

    render() {
    const {info} = this.props;

        return (
            <form>
                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' onChange={this.handleNameChange} value={info.name.text}></input><br />

                <label htmlFor='email'>Email:</label><br />
                <input type='email' id='email' value={info.email.text}></input><br />

                <label htmlFor='phone'>Phone:</label><br />
                <input type='phone' id='phone' value={info.phone.text}></input><br />

                <button>Submit</button>
                <button>Edit</button>
            </form>
        );
    };
};