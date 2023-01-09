import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {SpotifyProvider} from './context/spotify/SpotifyContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
      <SpotifyProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
              <main className='container mx-auto px-3 pb-12'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </main>
            <Footer />
          </div>
        </Router>
      </SpotifyProvider>
  )
}

export default App
