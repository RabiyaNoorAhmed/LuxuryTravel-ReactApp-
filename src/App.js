import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Service from './routes/Service'
import About from './routes/About'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>


    </div>
  )
}

export default App
