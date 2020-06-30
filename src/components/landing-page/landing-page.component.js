import React from "react";
import PropTypes from "prop-types";
import './landing-page.component.scss';

export const LandingPageComponent = (props) => {
  const { projects } = props;
  return (
    <div className="mainLayout">
      {projects.length} CONTEXT {process.env.REACT_APP_CONTEXT}
    </div>
  );
};

LandingPageComponent.propTypes = {
  projects: PropTypes.array.isRequired,
};
