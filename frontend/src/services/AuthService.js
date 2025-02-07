import axios from "axios";

class AuthService {
    constructor() {
        this.http = axios.create({baseURL : "http://localhost:8080"});
    }
    async login(username, password) {
        return this.http.post("/api/v1/auth/login", {username, password});
    }
    async logout() {
        return this.http.post("/api/v1/auth/logout");
    }
    async register(username, password , fullName , email) {
        return this.http.post("/api/v1/auth/register", {username, password , fullName , email});
    }
}

export default new AuthService();