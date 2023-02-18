import React, { Component } from 'react';

export default class Educational extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {school, study, dateStudy} = this.props;

        return (
            <div className="EducationalInfo">
                <p>School Name: {school.text}</p>
                <p>Area of Study: {study.text}</p>
                <p>Date of Study: {dateStudy.text}</p>
            </div>
        );
    };
};