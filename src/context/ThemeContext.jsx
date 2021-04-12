import React, { useState } from "react";

export const ThemeContext = React.createContext({ color: "red" });

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({ color: "blue" });
  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/* export const useThemeContext = () => useContext(ThemeContext);
 */