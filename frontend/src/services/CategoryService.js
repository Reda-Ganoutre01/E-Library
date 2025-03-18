import axios from "axios";

class CategoryService
{
    constructor()
    {
        this.http = axios.create({baseURL : "/api/v1/categories"});
    }
    async getAllCategories()
    {
        return this.http.get("/")
    }
}

export default new CategoryService();