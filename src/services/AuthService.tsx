import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:8080/api/auth";

interface IRegister {
  email: string;
  name: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

const login = async ({ email, password }: ILogin) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    jwtDecode(response.data.token);
    return response.data;
  } catch (error) {
    throw new Error("Falha ao realizar login");
  }
};

const register = async ({ email, name, password }: IRegister) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      name,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error("Falha ao realizar registro");
  }
};

const AuthService = {
  login,
  register,
};

export default AuthService;
