import { ProjectSource } from "../service-source";

export class ProjectService {

  static fetchAllProjects = () => {
    return Promise.resolve(ProjectSource.fetchAllProjects());
  };
}
