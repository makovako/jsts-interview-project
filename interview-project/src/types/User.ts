class User {
    login:string;
    name:string;
    avatar_url:string;
    url: string;

    constructor(login: string, name: string, avatar_url: string, url: string) {
        this.login = login;
        this.name = name;
        this.avatar_url = avatar_url;
        this.url = url;

    }
}

export default User;