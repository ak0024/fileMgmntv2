
import './App.css';
import React, { useEffect, useRef, useState } from 'react';


import Sidebar from './Sidebar'; // Adjust the path if Sidebar is in a different folder
import './App.css'; // Optional: if you want to style the main layout
import './Sidebar.css';
import { useGlobalContext } from './GlobalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faSignOut } from '@fortawesome/free-solid-svg-icons';



function App() {


  const { isCollapsed, navPath } = useGlobalContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    // Add logic to handle dark mode theme if necessary
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log("Logged out");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown if clicking outside
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`wrapper ${isCollapsed ? "sidebar-collapse" : ""}`}>
        <div className="header">
          <div className="header-logo">
            <img
              src={require("./Assets/lionlogo.png")}
              alt="App Logo"
              className="logo"
            />
          </div>
          <div className="header-app-name">
            <h1>App Name</h1>
          </div>
          <div className="header-right">
            <div className="profile-dropdown" ref={dropdownRef}>
              <img
                src={require("./Assets/lionlogo.png")} // Add your profile icon path
                alt="Profile"
                className="profile-icon"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <p onClick={() => console.log("My Profile clicked")}>
                    My Profile
                  </p>
                  <p onClick={() => console.log("Settings clicked")}>
                    Settings
                  </p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </div>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <FontAwesomeIcon icon={faMoon} /> // Moon icon for dark mode
              ) : (
                <FontAwesomeIcon icon={faSun} /> // Sun icon for light mode
              )}
            </button>

            <button className="sign-out">
              <FontAwesomeIcon icon={faSignOut} />
            </button>
          </div>
        </div>

        <div className="body">
          <header className="body-header">
            <h1>My keeper</h1>
            <br></br>
            <p>File Vault: Securely store and protect your files.</p>
          </header>

          <div className="body-content">
            <section>
              <p>{navPath}</p>
            </section>
          </div>
        </div>
        {/* <Footer /> */}
      </div>

      <Sidebar />

    </div>
  );
}

export default App;
