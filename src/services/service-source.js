import { ProjectApiService } from "./project-service/project.api-service";
import { ProjectStubService } from "./project-service/project.stub-service";
import { MOCK_CONTEXT } from "../settings/constants";

export const ProjectSource =
  process.env.REACT_APP_CONTEXT === MOCK_CONTEXT
    ? ProjectStubService
    : ProjectApiService;
