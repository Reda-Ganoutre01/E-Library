import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/v1/auth'; // adjust the port as needed

class AuthService {
    login(email, password) {
        return axios.post(`${API_BASE_URL}/authenticate`, { email, password });
    }

    register(email, password) {
        return axios.post(`${API_BASE_URL}/register`, { email, password });
    }
}

export default new AuthService();
