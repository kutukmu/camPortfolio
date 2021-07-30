import React from 'react'
import Header from '../components/header'
import Home from "../components/home"
import About from '../components/about'
import Skills from '../components/skills'
import Qualifications from '../components/qualifications'
import Services from '../components/services'
import Contact from '../components/contact'
import "../styles/global.scss"
const HomePage = () => {
  return (
    <div className="main">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Qualifications/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default HomePage
