import api, { handleError } from "./api";
import { User } from "../interfaces/User";

const UserService = {
  fetchUsers: async (): Promise<User[]> => {
    try {
      const response = await api.get<User[]>("/user/all");
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao buscar usuários");
      throw error;
    }
  },

  createUser: async (userData: User): Promise<User> => {
    try {
      const response = await api.post<User>("/user/create", userData);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao criar usuário");
      throw error;
    }
  },

  updateUser: async (id: string, userData: User): Promise<User> => {
    try {
      const response = await api.put<User>(`/user/${id}`, userData);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao atualizar usuário");
      throw error;
    }
  },

  deleteUser: async (id: string): Promise<void> => {
    try {
      await api.delete(`/user/${id}`);
    } catch (error) {
      handleError(error, "Erro ao excluir usuário");
      throw error;
    }
  },

  getUserById: async (id: string): Promise<User> => {
    try {
      const response = await api.get<User>(`/user/${id}`);
      return response.data;
    } catch (error) {
      handleError(error, "Erro ao buscar usuário por ID");
      throw error;
    }
  },
};

export default UserService;
