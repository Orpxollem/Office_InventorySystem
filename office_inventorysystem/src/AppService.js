import axios from "axios";

const USER_API_URL = 'https://localhost:5000/users';

class AppService {
    getUsers(){
        return axios.get(USER_API_URL);
    }
}

export default new AppService();