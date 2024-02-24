import { NavLink } from 'react-router-dom';

function Header({ isDarkMode, setIsDarkMode }) {
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    localStorage.setItem('mode', newTheme);
    setIsDarkMode(newTheme);
  };

  return (
    <header>
      <h3>Portfolio Practice</h3>

      <nav>
        <span>Mode: {isDarkMode ? 'Dark' : 'Light'}</span>
        <button
          onClick={toggleTheme}
          className={`theme-btn ${isDarkMode ? 'dark-btn' : ''}`}
        >
          Switch Theme
        </button>
        <NavLink
          to="/"
          exact
          activestyle={{
            color: isDarkMode ? '#eee' : '#242424'
          }}
          className={isDarkMode ? 'dark-mode-link nav-link' : 'light-mode-link nav-link'}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activestyle={{
            color: isDarkMode ? '#eee' : '#242424'
          }}
          className={isDarkMode ? 'dark-mode-link nav-link' : 'light-mode-link nav-link'}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          activestyle={{
            color: isDarkMode ? '#eee' : '#242424'
          }}
          className={isDarkMode ? 'dark-mode-link nav-link' : 'light-mode-link nav-link'}
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          activestyle={{
            color: isDarkMode ? '#eee' : '#242424'
          }}
          className={isDarkMode ? 'dark-mode-link nav-link' : 'light-mode-link nav-link'}
        >
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;