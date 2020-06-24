import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';
import { loadProjectsAction } from '../../actions/actions';
import { fetchAllProjects } from '../../services/project-service/project.api-service';
import { Project } from './../../models/project-model';

class LandingPageContainer extends Component {
    render() {
        return (
            this.props.projects && <LandingPageComponent projects={this.props.projects}/>
        );
    }

    componentDidMount() {
        fetchAllProjects()
        .then(api_projects => {
            this.parseAllProjects(api_projects);
        })

    }

    parseAllProjects = api_projects => {
        const projects = [];
        api_projects.data.forEach(project_it => {
            const project = new Project();
            project.parseApiToModel(project_it);
            projects.push(project);
        });
        this.props.handleLoadProjects(projects);
    }
}

LandingPageContainer.propTypes = {
    projects: PropTypes.array
};

const mapStateToProps = ({ projects }) => ({ projects });
const mapDisPatchToProps = dispatch => ({ handleLoadProjects: value => dispatch(loadProjectsAction(value)) });

export default connect(mapStateToProps, mapDisPatchToProps)(LandingPageContainer);