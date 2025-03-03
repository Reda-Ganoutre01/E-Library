import axios from "axios";

class CategoryService {
    constructor() {
        this.http = axios.create({ baseURL: "http://localhost:8080/api/v1/categories" });
    }

    async getAllCategories(page = null, pageSize = null, sortBy = null) {
        let url = "/";
        if (page !== null && pageSize !== null && sortBy !== null) {
            url += `?page=${page}&size=${pageSize}&sortBy=${sortBy}`;
        }
        return this.http.get(url);
    }
}

export default new CategoryService();
