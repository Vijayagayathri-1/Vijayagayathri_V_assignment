import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './header.css';

const Header = ({ onSearchChange }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1 className="header-title">Event Services</h1>
      <div className="header-controls">
        <input
          type="text"
          placeholder="Search for services..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;