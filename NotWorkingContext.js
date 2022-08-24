import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  },[darkMode])

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext= ()=> {
  return useContext(AppContext);
}

export default AppProvider;
