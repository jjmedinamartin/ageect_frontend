import { ProjectApiService } from "./project.api-service";
import { ProjectStubService } from "./project.stub-service";
import { REAL_CONTEXT, MOCK_CONTEXT } from "../../settings/generalSettings";

export class ProjectService {
  static projectSource =
    process.env.REACT_APP_CONTEXT === REAL_CONTEXT
      ? ProjectApiService
      : process.env.REACT_APP_CONTEXT === MOCK_CONTEXT
      ? ProjectStubService
      : null;

  static fetchAllProjects = () => {
    return Promise.resolve(ProjectService.projectSource.fetchAllProjects());
  };
}
