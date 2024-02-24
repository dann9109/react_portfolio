import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
// Import Components
import Header from './components/Header'
import Footer from './components/Footer'


// Import the Home Page
import Home from './pages/Home'
// Import the Contact Page
import Contact from './pages/Contact'
// Import the About Page
import About from './pages/About'
// Import the Resume Page
import Resume from './pages/Resume'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const quote_url = 'https://api.quotable.io/random'

    fetch(quote_url)
      .then(res => res.json())
      .then(data => {
        const mode = localStorage.getItem('mode')

        if (mode) setIsDarkMode(mode === 'true' ? true : false)

        setQuote(data.content)

        setLoading(false)
      })
  }, [isDarkMode])

  return (
    loading ?
      <div className="loading-overlay">
        <p>Loading...</p>
      </div> :
      <div className={`main-content ${isDarkMode ? 'dark' : 'light'}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <div className="quote-wrap">
            {quote && <p className="quote">"{quote}"</p>}
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />

      </div>
  )
}

export default App
