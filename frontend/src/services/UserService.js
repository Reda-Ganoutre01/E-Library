import axios from "axios";

class UserService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/users" });

    this.http.interceptors.request.use(config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }, error => {
      return Promise.reject(error);
    });
  }

  async getUsers() {
    return this.http.get("/");
  }

  async getUserById(id) {
    return this.http.get(`/${id}`);
  }

  async createUser(user) {
    return this.http.post("/create", user);
  }

  async updateUser(id, user) {
    return this.http.put(`/update/${id}`, user);
  }

  async deleteUser(id) {
    return this.http.delete(`/delete/${Number(id)}`);
  }
}

export default new UserService();