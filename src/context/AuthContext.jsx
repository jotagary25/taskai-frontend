import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { get_tasks_api } from "../api/tasks";

const AuthContext = createContext();

function getUserFromToken(token) {
  if (!token) return null;
  try {
    const payload = jwtDecode(token);
    return {
      id: payload.user_id,
      email: payload.user,
      ...payload,
    };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const user = getUserFromToken(storedToken);
      setUser(user);

      get_tasks_api(storedToken)
        .then((res) => {
          setTasks(res);
        })
        .catch((err) => {
          setTasks([]);
        });
    }
    setLoading(false);
  }, []);

  const login = async (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(getUserFromToken(newToken));
    const res = await get_tasks_api(newToken);
    if (res) {
      setTasks(res);
    } else {
      setTasks([]);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated, loading, tasks }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuth() {
  return useContext(AuthContext);
}
