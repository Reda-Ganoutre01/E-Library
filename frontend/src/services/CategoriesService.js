import axios from "axios";


const Categories_Rest_Api_url="http://localhost:8080/api/v1/categories/"

// const Categories_Rest_By_Cat="http://localhost:8080/api/v1/books/categorie=History"
class CategoriesService {
    getCategories(){
        return  axios.get(Categories_Rest_Api_url)
    }
}
export default new CategoriesService();