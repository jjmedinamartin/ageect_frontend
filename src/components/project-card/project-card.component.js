import React from "react";
import PropTypes from "prop-types";
import './project-card.component.scss';
import Brightness1Icon from '@material-ui/icons/Brightness1'

export const ProjectCardComponent = (props) => {
  const { project } = props;
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <div className="ellipsis">
          {project.name}
        </div>
      </div>
      <div className="cardBody">
        <div className="ellipsis">
          {project.description}
        </div>
        <div className="status">
          <Brightness1Icon className={getStatusIconStyle(project.status)}></Brightness1Icon>
          <div className="statusText">{project.status}</div>
        </div>
      </div>
    </div>

  );
};

ProjectCardComponent.propTypes = {
  project: PropTypes.shape({
    system_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    complexity: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
  })
};

const getStatusIconStyle = (status) => {
  return `statusIcon ${status === 'active' ? 'active' : 'inactive'}`;
}

