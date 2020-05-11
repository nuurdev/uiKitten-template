import React from "react";

const ThemeStateContext = React.createContext();
const ThemeToggleContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeStateContext.Provider>
  );
};

const useThemeState = () => {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useThemeState must be used within a ThemeProvider");
  }
  return context;
};

const useThemeToggle = () => {
  const context = React.useContext(ThemeToggleContext);
  if (context === undefined) {
    throw new Error("useThemeToggle must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useThemeState, useThemeToggle };
