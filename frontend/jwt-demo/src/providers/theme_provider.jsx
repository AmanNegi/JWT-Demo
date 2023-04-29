import React, { useState } from "react";

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode((darkMode) => !darkMode);
  }
  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
