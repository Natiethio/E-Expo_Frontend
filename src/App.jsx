import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import ExploreExpo from './Components/ExploreExpo'
import Realestates from './Components/Realestates'
import Details from './Components/Details'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Real_Estates' element={<Realestates/>}/>
      <Route path='/Expo' element={<ExploreExpo/>}/>
      <Route path="/Details/:companyName" element={<Details />} />
    </Routes>
  </Router>
  )
}

export default App
