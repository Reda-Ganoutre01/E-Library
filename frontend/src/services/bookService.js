import axios from "axios";


class BookService {
    static Books_Rest_Api_url = "http://localhost:8080/api/v1/books/";
    getBooks() {
        return axios.get(BookService.Books_Rest_Api_url);
    }

    getThreeNewBooks() {
        return axios.get(`${BookService.Books_Rest_Api_url}latest`);
    }

    getBookById(id) {
        return axios.get(`${BookService.Books_Rest_Api_url}${id}`);
    }

    // Updated to match backend route `/search={search}`
    searchBooks(search) {
        return axios.get(`${BookService.Books_Rest_Api_url}${search}`); // Corrected path parameter
    }

    getTopBrrowRecordsBooks() {
        return axios.get(`${BookService.Books_Rest_Api_url}topbooks`);
    }

    getBookByCategories(categorie) {
        return axios.get(`${BookService.Books_Rest_Api_url}categorie=${categorie}`);
    }
}

export default new BookService();
