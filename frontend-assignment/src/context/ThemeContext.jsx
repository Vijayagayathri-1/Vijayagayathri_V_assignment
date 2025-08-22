import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext with a default value.
export const ThemeContext = createContext();

// Create the ThemeProvider component.
export const ThemeProvider = ({ children }) => {
  // Use state to manage the current theme, starting with 'light'.
  const [theme, setTheme] = useState('light');

  // Use a useEffect hook to update the body class whenever the theme changes.
  // This is the crucial part that links your JavaScript state to your CSS.
  useEffect(() => {
    // Set the class name on the body element.
    document.body.className = theme;
  }, [theme]); // The effect re-runs whenever the 'theme' state variable changes.

  // The function to toggle the theme.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the theme state and the toggle function to the rest of the app.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};