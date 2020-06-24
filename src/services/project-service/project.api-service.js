import { service_string } from '../../settings/service-settings';

const AllProjectsEndpoint = '/projects';

export const fetchAllProjects = () => {
    return Promise.resolve(fetch(`${service_string()}${AllProjectsEndpoint}`)
    .then(response => response.json())
    )
    
};