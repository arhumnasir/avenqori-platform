import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
const C = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("avenqori-user"));
    } catch {
      return null;
    }
  });
  async function login(payload) {
    if (import.meta.env.VITE_AUTH_MODE === "api") {
      const r = await api.post("/auth/login", payload);
      setUser(r.data.user);
      localStorage.setItem("avenqori-user", JSON.stringify(r.data.user));
      return r.data.user;
    }
    const demo = {
      name: payload.email.split("@")[0],
      email: payload.email,
      role: payload.role,
    };
    setUser(demo);
    localStorage.setItem("avenqori-user", JSON.stringify(demo));
    return demo;
  }
  async function signup(payload) {
    if (import.meta.env.VITE_AUTH_MODE === "api") {
      const r = await api.post("/auth/register", payload);
      return r.data;
    }
    return {
      message: "Demo signup submitted. Connect the backend to create a real account.",
    };
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("avenqori-user");
  }
  return <C.Provider value={{ user, login, signup, logout }}>{children}</C.Provider>;
}
export const useAuth = () => useContext(C);
