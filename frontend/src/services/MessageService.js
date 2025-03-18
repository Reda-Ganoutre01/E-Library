import axios from "axios";

class MessageService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/messages" });

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

  async getAllUserMessages(user) {
    return this.http.get(`/user/${Number(user)}`);
  }
}

export default new MessageService();