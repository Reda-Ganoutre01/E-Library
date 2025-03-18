import axios from "axios";

class AuthService
{
    constructor()
    {
        this.http = axios.create({baseURL : "/api/v1/auth"});
    }
    async authenticate(credintials)
    {
        return await this.http.post("/authenticate", credintials);
    }
    async register(credintials)
    {
        return await this.http.post("/register" , credintials)
    }
}

export default new AuthService()