import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';
import { loadProjectsAction } from '../../actions/actions';
import { Project } from './../../models/project-model';

const url_server = "http://localhost:8000";
const endpoint = "/api/projects";
const api = `${url_server}${endpoint}`;

class LandingPageContainer extends Component {
    render() {
        return (
            this.props.projects && <LandingPageComponent projects={this.props.projects}/>
        );
    }

    componentDidMount() {
        console.log('Comienza carga');
        const projects = [];

        fetch(api)
            .then(response => response.json())
            .then(data => {
                data.data.forEach(element => {
                    const p = new Project();
                    p.parseApiToModel(element);
                    projects.push(p);
                });
                console.log(projects);
            });

        this.props.handleLoadProjects([])
    }
}

LandingPageContainer.propTypes = {
    projects: PropTypes.array
};

const mapStateToProps = ({ projects }) => ({ projects });
const mapDisPatchToProps = dispatch => ({ handleLoadProjects: value => dispatch(loadProjectsAction(value)) });

export default connect(mapStateToProps, mapDisPatchToProps)(LandingPageContainer);