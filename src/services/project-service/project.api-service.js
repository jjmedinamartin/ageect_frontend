
import { Project } from "./../../models/project-model";
import { PROJECTS_BY_USER_ENDPOINT } from "../service-endpoints";
import { getServiceString } from "../service-utils";
import { TEMP_USER } from "../../settings/constants";

export class ProjectApiService {
  static fetchProjectsByUser = () => {
    return Promise.resolve(
      fetch(getServiceString(PROJECTS_BY_USER_ENDPOINT, TEMP_USER))
        .then((response) => response.json())
        .then((api_projects) => {
          return api_projects.data.map(function (project_it) {
            return Project.parseApiToModel(project_it);
          });
        })
    );
  };
}
