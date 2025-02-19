import axios from "axios";

class UserService {
    static Base_Url = "http://localhost:8080/api/v1/";

    static async login(username, password) {
        const response=await axios.post(`${UserService.Base_Url}auth/authenticate`, { username, password });
        return response.data;
    }
    static async register(userData){
        const response=await axios.post(`${UserService.Base_Url}auth/register`,userData);
        return response.data;
    }
   // In UserService.js
static async getAllUsers(token, page = 0) {
    const response = await axios.get(`${UserService.Base_Url}users/`, {
      params: { page: page, size: 6 },
    });
    return response.data;
  }
  
    // static async getAllUsers(token){
    //     const response=await axios.get(`${UserService.Base_Url}users/`,{
    //         headers:{Authorization:`Bearer ${token}`}
    //     })
    //     return response.data;
    // }
    static async getUserById(userId,token){
        const response=await axios.get(`${UserService.Base_Url}users/${userId}`,{
            headers:{Authorization:`Bearer ${token}`}
        })
        return response.data;
    }
    static async updateUser(userId,userData,token){
        const response=await axios.put(`${UserService.Base_Url}users/${userId}`,userData,{
            headers:{Authorization:`Bearer ${token}`}
        })
        return response.data;
    }
    
    static async deleteUser(userId,token){
        const response=await axios.delete(`${UserService.Base_Url}users/${userId}`,{
            headers:{Authorization:`Bearer ${token}`}
        })
        return response.data;
    }
  
    static async getYourProfile(username){
        const response = await axios.get(`${UserService.Base_Url}users/profile/${username}`);
        return response.data;
    }
    


   
    // Authentication check
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('username')
    }

    static isAuthanticate(){
        const token=localStorage.getItem('token');
        return !!token;
    }

    static isAdmin(){
        const role=localStorage.getItem('role')
        return role=='LIBRARIAN'
    }
    static isUser(){
        const role=localStorage.getItem('role')
        return role=='USER'
    }
    static adminOnly(){
        return this.isAuthanticate() && this.isAdmin();
    }

}

export default  UserService;
