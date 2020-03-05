class Organisation {
    login: string;
    description: string;
    avatar_url: string;
    url: string;

    constructor(login: string, description: string, avatar_url: string, url: string){
        this.login = login;
        this.description = description;
        this.avatar_url = avatar_url;
        this.url = url;
    }
}

export default Organisation;