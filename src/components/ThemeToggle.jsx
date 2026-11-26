import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
      {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
