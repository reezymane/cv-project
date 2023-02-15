import React, { Component } from 'react';

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {name, email, phone} = this.props;

        return (
            <div className="GeneralInfo">
                <p>Name: {name.text}</p>
                <p>Email: {email.text}</p>
                <p>Phone: {phone.text}</p>
            </div>
        );
    };
};