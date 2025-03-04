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
    async addCategory(category) {
        return this.http.post("/", category);
    }

    async updateCategory(id, category) {
        return this.http.put(`/update/${id}`, category);
    }

    async deleteCategory(id) {
        return this.http.delete(`/delete/${id}`);
    }
}


export default new CategoryService();
