// export const Const_Api_Books=fetch("http://localhost:8080/api/v1/books/")
// export const Const_Api_Categories=fetch("http://localhost:8080/api/v1/categories/")

import axios from "axios"



const Books_Rest_Api_url="http://localhost:8080/api/v1/books/"

class Bookservice {
    getBooks(){
        return  axios.get(Books_Rest_Api_url)
    }
}
export default new Bookservice();