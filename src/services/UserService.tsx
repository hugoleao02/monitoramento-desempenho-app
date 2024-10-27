import axios from "axios";
import { User } from "../interfaces/User";

const API_URL = "http://localhost:8080/api/user";

const UserService = {
  fetchUsers: async (): Promise<User[]> => {
    try {
      const response = await axios.get<User[]>(`${API_URL}/all`);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao buscar usuários");
      throw error;
    }
  },

  createUser: async (userData: User): Promise<User> => {
    try {
      const response = await axios.post<User>(`${API_URL}/create`, userData);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao criar usuário");
      throw error;
    }
  },

  updateUser: async (id: string, userData: User): Promise<User> => {
    try {
      const response = await axios.put<User>(`${API_URL}/${id}`, userData);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao atualizar usuário");
      throw error;
    }
  },

  deleteUser: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      handleError(error, "Erro ao excluir usuário");
      throw error;
    }
  },

  // Adicionando a função getUserById
  getUserById: async (id: string): Promise<User> => {
    try {
      const response = await axios.get<User>(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao buscar usuário por ID");
      throw error;
    }
  },
};

const handleError = (error: unknown, customMessage: string) => {
  if (axios.isAxiosError(error)) {
    console.error(customMessage, error.response?.data);
  } else {
    console.error(customMessage, error);
  }
};

export default UserService;
