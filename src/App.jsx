import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SpotifyProvider } from './context/spotify/SpotifyContext'
import { AlertProvider } from './context/alert/AlertContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import Home from './pages/Home'
import Song from './pages/Song'
import Profile from './pages/Profile'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
      <AlertProvider>
        <SpotifyProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen'>
              <Navbar />
                <main className='container mx-auto px-3 pb-12'>
                  <Alert />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/tracks/:id' element={<Song />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
                </main>
              <Footer />
            </div>
          </Router>
        </SpotifyProvider>
      </AlertProvider>
  )
}

export default App
