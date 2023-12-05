import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {
    
    // login function calling server api endpoint 
    async login(user,pass){
        const response = await axios
            .post(API_URL + "signin", { user, pass });
        // setting local storage with response data
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    // logout function removing userdata from local storage
    logout(){
        localStorage.removeItem("user");
    }

    // register user function calling signup server endpoint
    async register(user,email,pass){
        const response = await axios
            .post(API_URL + "signup", {user,email,pass});
            return response.data;
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

const AuthServices = new AuthService();

export default AuthServices;