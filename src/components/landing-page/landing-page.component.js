import React from "react";
import PropTypes from "prop-types";
import './landing-page.component.scss';
import { ProjectCardComponent } from "../project-card/project-card.component";
import LinearProgress from '@material-ui/core/LinearProgress';

export const LandingPageComponent = (props) => {
  const { projects } = props;
  return (
    <div>
      {projects
        ? <div className="mainLayout"><div className="cardsSection">{projects.map(project => <ProjectCardComponent key={project.system_id} project={project}></ProjectCardComponent>)}</div></div>
        : <div className="loadingLayout"><LinearProgress /></div>}
    </div>
  );
};

LandingPageComponent.propTypes = {
  projects: PropTypes.array,
};
