import axios from "axios";



class CategoriesService {
    static Categories_Rest_Api_url="http://localhost:8080/api/v1/categories/"
    getCategories(){
        return  axios.get(CategoriesService.Categories_Rest_Api_url)
    }
}
export default new CategoriesService();