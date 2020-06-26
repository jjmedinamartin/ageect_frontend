import { getServiceString, ALL_PROJECTS_ENDPOINT } from "../../settings/service-settings";
import { Project } from "./../../models/project-model";

export const fetchAllProjects = () => {
  return Promise.resolve(
    fetch(getServiceString(ALL_PROJECTS_ENDPOINT))
      .then((response) => response.json())
      .then((api_projects) => {
        return api_projects.data.map(function (project_it) {
          return Project.parseApiToModel(project_it);
        });
      })
  );
};
