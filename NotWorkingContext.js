import React, { useContext, useState } from "react";

export const themes = {
  lightMode: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  darkMode: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const AppContext = React.createContext({
  theme: undefined,
  setTheme: async (theme) => null,
});

export const useTheme = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.lightMode);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
