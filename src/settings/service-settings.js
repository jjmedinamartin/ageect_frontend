export const server_url = "http://localhost:8000";
export const service_api = "/api";

export const ALL_PROJECTS_ENDPOINT = "/projects";

export const getServiceString = (endpoint) => {
  return `${server_url}${service_api}${endpoint}`;
};
