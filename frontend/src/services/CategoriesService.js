import axios from "axios";


const Categories_Rest_Api_url="http://localhost:8080/api/v1/categories/"

class CategoriesService {
    getCategories(){
        return  axios.get(Categories_Rest_Api_url)
    }
}
export default new CategoriesService();