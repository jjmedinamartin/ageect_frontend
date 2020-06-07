import React, { Component } from 'react'
const url_server = "http://localhost:8000";
const endpoint = "/api/projects";
const api = `${url_server}${endpoint}`;

class LandingPageComponent extends Component {

    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    load = () => {
        fetch(api).then(resolve => {
            console.log(resolve);
        })
    };

    render() {
        return (
            <div onClick={this.load}>Landing Page</div>
        )
    }
}

export default LandingPageComponent;