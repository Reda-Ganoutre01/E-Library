import axios from "axios";

class BookService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/books" });

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

  async getAllBooks(page, size, sortBy) {
    return this.http.get(`/?page=${page}&size=${size}&sortBy=${sortBy}`);
  }

  async getTopBooks() {
    return this.http.get("/topBooks");
  }

  async getLatestBooks() {
    return this.http.get("/latest");
  }

  async getBooksByCategory(category) {
    return this.http.get(`/category=${category}`);
  }

  async getBook(id) {
    return this.http.get(`/${Number(id)}`);
  }

  async getBooksBySearch(search) {
    return this.http.get(`/search=${search}`);
  }

  async updateBook(id, data) {
    return this.http.put(`/update/${Number(id)}`, data);
  }

  async deleteBook(id) {
    return this.http.delete(`/delete/${Number(id)}`);
  }

  async createBook(data) {
    return this.http.post("/create", data);
  }
}

export default new BookService();