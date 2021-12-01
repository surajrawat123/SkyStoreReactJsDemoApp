import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Menu/Home'
import About from './components/Menu/About'
import Sports from './components/Menu/Sports'
import Premium from './components/Menu/Premium'
import SkyVipFridaySale from './components/Menu/SkyVipFridaySale'
import TV from './components/Menu/TV'
import ReedemVocher from './components/Menu/ReedemVocher'
import SignIn from './components/SignInUp/SignIn'
import SignUp from './components/SignInUp/SignUp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer'


const App = () => {
  return (
      <Router>
        <div>
          <Header />
        </div>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/sports' element={<Sports />}></Route>
            <Route path='/premium' element={<Premium />}></Route>
            <Route path='/SkyVipFridaySale' element={<SkyVipFridaySale />}></Route>
            <Route path='/TV' element={<TV />}></Route>
            <Route path='/ReedemVocher' element={<ReedemVocher />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
          </Routes>
        </main>
        <div>
          <Footer />
        </div>
      </Router>
  )
}

export default App
