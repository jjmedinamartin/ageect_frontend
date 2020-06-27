import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LandingPageComponent } from "../../components/landing-page/landing-page.component";
import { loadProjectsAction } from "../../actions/actions";
import { ProjectService } from '../../services/project-service/project.service';

class LandingPageContainer extends Component {
  render() {
    return (
      this.props.projects && (
        <LandingPageComponent projects={this.props.projects} />
      )
    );
  }

  componentDidMount() {
    ProjectService.fetchAllProjects().then((projects) => {
      this.props.handleLoadProjects(projects);
    });
  }
}

LandingPageContainer.propTypes = {
  projects: PropTypes.array,
};

const mapStateToProps = ({ projects }) => ({ projects });
const mapDisPatchToProps = (dispatch) => ({
  handleLoadProjects: (value) => dispatch(loadProjectsAction(value)),
});

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(LandingPageContainer);
