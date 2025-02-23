import { createContext, useState, useEffect, ReactNode } from "react";
import {jwtDecode} from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import User from "../models/User";

// Define context type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean | null;
  logout: () => void;
}

// Create context with default values
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define provider props type
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setUser(null);
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const tokenExpiration = decoded.exp;
      const now = Date.now() / 1000;

      if (tokenExpiration < now) {
        await refreshToken();
      } else {
        await fetchUserInfo(token);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const fetchUserInfo = async (token: string) => {
    try {
      const res = await api.get('/api/user/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const refreshToken = async () => {
    const refresh = localStorage.getItem(REFRESH_TOKEN);
    if (!refresh) {
      setUser(null);
      setIsAuthenticated(false);
      return;
    }

    try {
      const res = await api.post("/api/token/refresh", { refresh });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        await fetchUserInfo(res.data.access);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  // const login = async (username: string, password: string): Promise<boolean> => {
  //   try {
  //     const res = await api.post("/api/token/", { username, password });
  //     localStorage.setItem(ACCESS_TOKEN, res.data.access);
  //     localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      
  //     const decoded = jwtDecode(res.data.access);
  //     setUser(decoded);
  //     setIsAuthenticated(true);
      
  //     return true;
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     return false;
  //   }
  // };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
