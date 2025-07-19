import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

function getUserFromToken(token) {
  if (!token) return null;
  try {
    const payload = jwtDecode(token);
    console.log(payload);
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

  // Cuando cambia el token en localStorage, actualiza el estado
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setUser(getUserFromToken(storedToken));
    setLoading(false);
  }, []);

  // Login: guarda token
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(getUserFromToken(newToken));
  };

  // Logout: elimina token
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuth() {
  return useContext(AuthContext);
}
