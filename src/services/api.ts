import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleError = (error: unknown, customMessage: string) => {
  if (axios.isAxiosError(error)) {
    console.error(customMessage, error.response?.data);
  } else {
    console.error(customMessage, error);
  }
};

export default api;
