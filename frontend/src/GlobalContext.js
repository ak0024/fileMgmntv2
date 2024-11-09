import React, { createContext, useContext, useState } from 'react';

// Create a Context
const GlobalContext = createContext();

// Create a Provider component
export function GlobalProvider({ children }) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [navPath, setNavPath] = useState(null);
    const [divHeight, setDivHeight] = useState(0);
    const [divSideBar, setDivSideBar] = useState(0);


    return (
        <GlobalContext.Provider value={{
            isCollapsed, setIsCollapsed, navPath, setNavPath,
            divHeight, setDivHeight, divSideBar, setDivSideBar
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

// Custom hook to use global context
export function useGlobalContext() {
    return useContext(GlobalContext);
}
