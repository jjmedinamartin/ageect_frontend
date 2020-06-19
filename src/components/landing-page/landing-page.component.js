import React  from 'react';
import PropTypes from 'prop-types';


export const LandingPageComponent = (props) => {
    const { projects } = props;
        return (<div>{ projects.map(x => x.cosa) }</div>)
};

LandingPageComponent.propTypes={
    projects: PropTypes.array.isRequired,
}