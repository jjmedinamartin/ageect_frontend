export const parseApiToModel = (apiData) => {
  const project = {
    system_id: apiData.system_id,
    name: apiData.name,
    description: apiData.description,
    complexity: apiData.complexity,
    status: apiData.status,
    createdAt: apiData.createdAt,
    updatedAt: apiData.updatedAt,
  }
  return project;
}
