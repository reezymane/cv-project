import React, { Component } from 'react';

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <form>
                <button>Submit</button>
                <button>Edit</button>
            </form>
        );
    };
};