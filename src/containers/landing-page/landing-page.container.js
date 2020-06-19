import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';

class LandingPageContainer extends Component {
    render() {
        return (
            this.props.projects && <LandingPageComponent projects={this.props.projects}/>
        );
    }
}

LandingPageContainer.propTypes = {
    projects: PropTypes.array.isRequired
};

const mapStateToProps =({ projects }) => ({ projects })
export default connect(mapStateToProps, null)(LandingPageContainer);