import { createContext, useContext, useState } from "react";
import { apiFetch } from "/utils/api";

const AuthContext = createContext({ token: null });

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    const data = await apiFetch("/login", { method: "POST", body: JSON.stringify({ username, password }) });
    setToken(data.token);
  };

  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
