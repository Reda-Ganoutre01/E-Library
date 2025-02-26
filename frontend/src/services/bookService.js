import axios from "axios";

class BookService
{
    constructor()
    {
        this.http = axios.create({baseURL : "http://localhost:8080/api/v1/books"});

    }
    async getAllBooks(page , pageSize )
    {
        return this.http.get(`/?page=${page}&size=${pageSize}`);
            //         return axios.get(`${BookService.Books_Rest_Api_url}?page=${page}&size=${pageSize}`);

    }
    async getTopBooks()
    {
        return this.http.get("/topbooks")
    }
    async getLatestBooks()
    {
        return this.http.get("/latest")
    }
    async getBooksByCategory(category)
    {
        return this.http.get(`/category=${category}`)
    }
    async getBook(id)
    {
        return this.http.get(`/${id}`)
    }
}

export default new BookService();