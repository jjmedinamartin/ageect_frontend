import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';
import { loadProjectsAction } from '../../actions/actions';

class LandingPageContainer extends Component {
    render() {
        return (
            this.props.projects && <LandingPageComponent projects={this.props.projects}/>
        );
    }

    componentDidMount() {
        console.log('Comienza carga');
        this.props.handleLoadProjects([{cosa: 'primero'}])
    }
}

LandingPageContainer.propTypes = {
    projects: PropTypes.array.isRequired
};

const mapStateToProps = ({ projects }) => ({ projects });
const mapDisPatchToProps = dispatch => ({ handleLoadProjects: value => dispatch(loadProjectsAction(value)) });

export default connect(mapStateToProps, mapDisPatchToProps)(LandingPageContainer);