import { createContext, useContext, useEffect, useState } from "react";
const C = createContext(null);
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("avenqori-theme") || "light",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("avenqori-theme", theme);
  }, [theme]);
  return (
    <C.Provider
      value={{ theme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) }}
    >
      {children}
    </C.Provider>
  );
}
export const useTheme = () => useContext(C);
