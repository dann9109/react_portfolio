import { NavLink } from 'react-router-dom'

function Header(props) {
  const toggleTheme = () => {
    localStorage.setItem('mode', !props.isDarkMode)
    props.setIsDarkMode(!props.isDarkMode)
  }

  return (
    <header>
      <h3>Portfolio Practice</h3>

      <nav>
        <span>Mode: {props.isDarkMode ? 'Dark' : 'Light'}</span>
        <button onClick={toggleTheme} className={`theme-btn ${props.isDarkMode ? 'dark-btn' : ''}`}>Switch Theme</button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header