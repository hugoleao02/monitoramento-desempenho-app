import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface AuthContextType {
  token: string | null;
  setToken: (newToken: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem("token")
  );

  const setToken = useCallback((newToken: string | null) => {
    setToken_(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
  }, [setToken]);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }

    const requestInterceptor = axios.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        config.headers["Authorization"] = `Bearer ${storedToken}`;
      }
      return config;
    });

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

  const contextValue = useMemo(
    () => ({ token, setToken, logout }),
    [token, setToken, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
