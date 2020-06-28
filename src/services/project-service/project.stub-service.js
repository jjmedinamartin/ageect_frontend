import projects from "./../../mocks/mock.json";
import { Project } from "./../../models/project-model";

export class ProjectStubService {
  static fetchAllProjects = () => {
    return Promise.resolve(
      projects.data.map(function (project_it) {
        return Project.parseApiToModel(project_it);
      })
    );
  };
}
