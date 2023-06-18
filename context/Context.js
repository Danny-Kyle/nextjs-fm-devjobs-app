import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const initialValue = {}

// const JobContextProvider = ()=> {
//   const filterByInfos
// }

const filterByInfos = {}

const filterByLocation = {}

const fullTimeOnly = {}

const updateFilterParams = ()=> {}

const updateNumberOfJobs = ()=> {}

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const contextValue = {}

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
