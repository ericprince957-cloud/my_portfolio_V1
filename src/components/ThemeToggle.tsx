import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Theme Toggle Component
 * Switches between light and dark mode
 * Vibrates on hover for visual feedback
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn relative p-2 rounded-lg glass-card hover:animate-vibrate transition-all cursor-pointer group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon size={18} className="text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
