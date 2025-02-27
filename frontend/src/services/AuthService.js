import axios from "axios";

class AuthService
{
    constructor()
    {
        this.http = axios.create({baseURL : "http://localhost:8080/api/v1/auth"});
    }
    async authenticate(credintials)
    {
        return await this.http.post("/authenticate", credintials);
    }
    
}

export default new AuthService()