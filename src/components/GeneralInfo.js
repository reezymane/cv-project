import React, { Component } from 'react';

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <form>
                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' value={this.props.info.name.text}></input><br />

                <label htmlFor='email'>Email:</label><br />
                <input type='email' id='email' value={this.props.info.email.text}></input><br />

                <label htmlFor='phone'>Phone:</label><br />
                <input type='phone' id='phone' value={this.props.info.phone.text}></input><br />

                <button>Submit</button>
                <button>Edit</button>
            </form>
        );
    };
};