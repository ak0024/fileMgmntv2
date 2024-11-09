import React, { createContext, useContext, useState } from 'react';

// Create a Context
const GlobalContext = createContext();

// Create a Provider component
export function GlobalProvider({ children }) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [navPath, setNavPath] = useState(null);
    const [divHeight, setDivHeight] = useState(0);
    const [divSideBar, setDivSideBar] = useState(0);
    const [breadCrumbList, setBreadcrumbList] = useState([{
        extension: "",
        fileid: 0,
        filename: "My Files",
        parentfile: 0,
        path: "/",
        type: "Folder",
        uniquefilename: "My Files",
    }]);



    return (
        <GlobalContext.Provider value={{
            isCollapsed, setIsCollapsed, navPath, setNavPath,
            divHeight, setDivHeight, divSideBar, setDivSideBar,
            breadCrumbList, setBreadcrumbList
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

// Custom hook to use global context
export function useGlobalContext() {
    return useContext(GlobalContext);
}
