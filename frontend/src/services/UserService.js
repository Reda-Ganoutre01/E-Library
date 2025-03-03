import axios from "axios";

class UserService {
    constructor() {
        this.http = axios.create({ baseURL: "http://localhost:8080/api/v1/users" });
    }

    async getAllUsers(page, pageSize,sortBy) {
        return this.http.get(`/?page=${page}&size=${pageSize}&sortBy=${sortBy}`);
    }
}

export default new UserService(); 




  // static async getUserById(userId,token){
    //     const response=await axios.get(`${UserService.Base_Url}users/${userId}`,{
    //         headers:{Authorization:`Bearer ${token}`}
    //     })
    //     return response.data;
    // }
    // static async updateUser(userId,userData,token){
    //     const response=await axios.put(`${UserService.Base_Url}users/${userId}`,userData,{
    //         headers:{Authorization:`Bearer ${token}`}
    //     })
    //     return response.data;
    // }
    
    // static async deleteUser(userId,token){
    //     const response=await axios.delete(`${UserService.Base_Url}users/${userId}`,{
    //         headers:{Authorization:`Bearer ${token}`}
    //     })
    //     return response.data;
    // }
  
    // static async getYourProfile(username){
    //     const response = await axios.get(`${UserService.Base_Url}users/profile/${username}`);
    //     return response.data;
    // }
    


   
    // static logout(){
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('role')
    //     localStorage.removeItem('username')
    // }

    // static isAuthenticated(){
    //     const token=localStorage.getItem('token');
    //     return !!token;
    // }

    // static isAdmin(){
    //     const role=localStorage.getItem('role')
    //     return role=='LIBRARIAN'
    // }
    // static isUser(){
    //     const role=localStorage.getItem('role')
    //     return role=='USER'
    // }
    // static adminOnly(){
    //     return this.isAuthenticated() && this.isAdmin();
    // }
