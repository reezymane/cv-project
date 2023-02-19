import React, { Component } from 'react';

export default class WorkHistory extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {companyName, positionTitle, mainTasks, dateEmployed} = this.props;

        return (
            <div className="WorkInfo">
                <p>Company Name: {companyName.text}</p>
                <p>Position Title: {positionTitle.text}</p>
                <p>Main Tasks: {mainTasks.text}</p>
                <p>Date of Employment: {dateEmployed.text}</p>
            </div>
        );
    };
};