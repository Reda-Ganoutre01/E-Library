import axios from "axios";

class BookService {
    constructor() {
        this.http = axios.create({ baseURL: "http://localhost:8080/api/v1/books" });

    }
    
    async getAllBooks(page = null, pageSize = null, sortBy = null) {
        let url = "/";
        if (page !== null && pageSize !== null && sortBy !== null) {
            url += `?page=${page}&size=${pageSize}&sortBy=${sortBy}`;
        }
        return this.http.get(url);
    }
    async getTopBooks() {
        return this.http.get("/topbooks");
    }
    async getLatestBooks() {
        return this.http.get("/latest")
    }

    async getBooksByCategory(category) {
        return this.http.get(`/category/${category}`);
    }

    async searchBooks(search) {
        return this.http.get(`/search/${search}`);
    }
    async getBook(id) {
        return this.http.get(`/${id}`)
    }
    async deleteBook(id) {
        return this.http.delete(`/${id}`)
    }
}

export default new BookService();