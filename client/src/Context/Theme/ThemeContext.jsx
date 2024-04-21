import { createContext, useState, useContext, useEffect } from "react";
import PropType from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(
    localStorage.getItem("theme") === "true" || false
  );

  useEffect(() => {
    Theme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [Theme]);

  const ToggleTheme = (Theme) => {
    setTheme(Theme);
    document.body.classList.toggle("dark", Theme);
    localStorage.setItem("theme", Theme);
  };

  return (
    <ThemeContext.Provider value={{ Theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function UseTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("null value");
  }
  return context;
}

ThemeProvider.propTypes = {
  children: PropType.node.isRequired,
};
