
import { Project } from "./../../models/project-model";
import { ALL_PROJECTS_ENDPOINT } from "../service-endpoints";
import { getServiceString } from "../service-utils";

export class ProjectApiService {
  static fetchAllProjects = () => {
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
}
