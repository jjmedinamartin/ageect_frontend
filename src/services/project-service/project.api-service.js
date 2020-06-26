import { service_string } from "../../settings/service-settings";
import { Project } from "./../../models/project-model";

const AllProjectsEndpoint = "/projects";

export const fetchAllProjects = () => {
  return Promise.resolve(
    fetch(`${service_string()}${AllProjectsEndpoint}`)
      .then((response) => response.json())
      .then((api_projects) => {
        return api_projects.data.map(function (project_it) {
          return Project.parseApiToModel(project_it);
        });
      })
  );
};
