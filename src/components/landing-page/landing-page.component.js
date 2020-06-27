import React from "react";
import PropTypes from "prop-types";

export const LandingPageComponent = (props) => {
  const { projects } = props;
return <div>{projects.length} CONTEXT {process.env.REACT_APP_CONTEXT}</div>;
};

LandingPageComponent.propTypes = {
  projects: PropTypes.array.isRequired,
};
