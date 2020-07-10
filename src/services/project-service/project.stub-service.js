import projects from "./../../mocks/mock.json";
import { parseApiToModel } from "./../../models/project-model";

export class ProjectStubService {
  static fetchProjectsByUser = () => {
    return Promise.resolve(
      projects.data.map(function (project_it) {
        return parseApiToModel(project_it);
      })
    );
  };
}
