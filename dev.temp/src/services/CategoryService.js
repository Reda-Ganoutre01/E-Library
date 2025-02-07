import axios from "axios";

class CategoryService {
    constructor() {
        this.http = axios.create({baseURL: 'http://localhost/pm/'})
    }

    async getAll() {
        return this.http.get('?module=category&action=indexJson')
    }
    async getById(id) {
        return this.http.get('?module=category&action=getById&id=' + id)
    }

    async store(data){
        return this.http.post('?module=category&action=saveJson', data)

        /*fetch("http://localhost/pm/?module=category&action=saveJson", {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify(data),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })*/
    }
    async update(data){
        return this.http.post('?module=category&action=updateJson', data)

    }


}
export default new CategoryService()
