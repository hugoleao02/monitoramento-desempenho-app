import api from "./api";

interface IRegister {
  email: string;
  name: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

const AuthService = {
  login: async (
    { email, password }: ILogin,
    setToken: (token: string | null) => void
  ) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const token = response.data.token;
      setToken(token);
      return response.data;
    } catch (error) {
      throw new Error("Falha ao realizar login");
    }
  },

  register: async ({ email, name, password }: IRegister) => {
    try {
      const response = await api.post("/auth/register", {
        email,
        name,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Falha ao realizar registro");
    }
  },
};

export default AuthService;
