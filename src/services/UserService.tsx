import axios from "axios";

const API_URL = "http://localhost:8080/api/user";
const token = localStorage.getItem("token");

export interface User {
  id?: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    console.log(token);
    const response = await axios.get<User[]>(`${API_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Erro ao buscar usuários");
    throw error;
  }
};

export const createUser = async (userData: User): Promise<User> => {
  try {
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }

    const response = await axios.post<User>(`${API_URL}/create`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Erro ao criar usuário");
    throw error;
  }
};

export const updateUser = async (id: string, userData: User): Promise<User> => {
  try {
    const response = await axios.put<User>(`${API_URL}/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Erro ao atualizar usuário");
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    handleError(error, "Erro ao excluir usuário");
    throw error;
  }
};

const handleError = (error: unknown, customMessage: string) => {
  if (axios.isAxiosError(error)) {
    console.error(customMessage, error.response?.data);
  } else {
    console.error(customMessage, error);
  }
};

const UserService = {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
};

export default UserService;
