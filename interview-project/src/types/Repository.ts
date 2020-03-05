class Repository {
    name: string;
    open_issues_count: number;
    created_at: string;
    description: string;
    forks_count: number;
    url: string;


    constructor(name: string, open_issue_count: number, created_at: string, description: string, forks_count: number, url: string) {
        this.name = name;
        this.open_issues_count = open_issue_count;
        this.created_at = created_at;
        this.description = description;
        this.forks_count = forks_count;
        this.url = url;
    }
}

export default Repository;