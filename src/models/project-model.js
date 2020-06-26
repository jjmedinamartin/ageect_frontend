export class Project {
    static parseApiToModel(apiData) {
        const project = new Project();
        project.system_id = apiData.system_id;
        project.name = apiData.name;
        project.description = apiData.description;
        project.complexity = apiData.complexity;
        project.status = apiData.status;
        project.createdAt = apiData.createdAt;
        project.updatedAt = apiData.updatedAt;
        return project;
    }
}