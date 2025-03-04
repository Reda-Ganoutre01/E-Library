import axios from "axios";

class UserService {
    constructor() {
        this.http = axios.create({ baseURL: "http://localhost:8080/api/v1/users" });
    }

 
    async getAllUsers(page = null, pageSize = null, sortBy = null) {
        let url = "/";
        if (page !== null && pageSize !== null && sortBy !== null) {
            url += `?page=${page}&size=${pageSize}&sortBy=${sortBy}`;
        }
        return this.http.get(url);
    }
    async getUserProfile(username) {
        return this.http.get(`/profile/${username}`)
    }
    async addUser(userData) {
        return this.http.post(`/`, userData); 
    }
    async updateUser(userId, userData) {
        return this.http.put(`/${userId}`, userData)
    }
    async deleteUser(userId) {
        return this.http.delete(`/${userId}`)
    }


}

export default new UserService();


