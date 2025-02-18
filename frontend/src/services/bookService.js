import axios from "axios";


class BookService {
    static Books_Rest_Api_url = "http://localhost:8080/api/v1/books/";
    getBooks(page,pageSize) {
        return axios.get(`${BookService.Books_Rest_Api_url}?page=${page}&size=${pageSize}`);
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

    getBookByCategories(category) {
        return axios.get(`${BookService.Books_Rest_Api_url}category=${category}`);
    }
}

export default new BookService();
