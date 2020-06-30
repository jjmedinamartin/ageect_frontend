import { ProjectSource } from "../service-source";

export class ProjectService {

  static fetchProjectsByUser = () => {
    return Promise.resolve(ProjectSource.fetchProjectsByUser());
  };
}
