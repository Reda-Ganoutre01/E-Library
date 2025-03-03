import axios from "axios";

class BorrowRecordService {
    constructor() {
        this.http = axios.create({ baseURL: "http://localhost:8080/api/v1/borrowRecords" });
    }

    async getAllBorrowRecords() { 
        return this.http.get(`/`);
    }
    
}

export default new BorrowRecordService();
