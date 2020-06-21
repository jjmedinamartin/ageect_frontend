export class Project {
    parseApiToModel(apiData) {
        this.system_id = apiData.system_id;
        this.name = apiData.name;
        this.description = apiData.description;
        this.complexity = apiData.complexity;
        this.status = apiData.status;
        this.createdAt = apiData.createdAt;
        this.updatedAt = apiData.updatedAt;
    }
}