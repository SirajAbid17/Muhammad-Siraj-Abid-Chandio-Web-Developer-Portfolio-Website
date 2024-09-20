import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componnets/Navbar'
import Home from './componnets/Home'
import About from './componnets/About'
import Portfolio from './componnets/Portfolio'
import Footer from './componnets/Footer'
import Projectjs from './Projectjs'
import Team from './Team'
import Contoo from './Contoo'


function App() {


  return (
   <>
   
   <Navbar/>
    <section id='home'> <Home/> </section>
   <section id='about'> <About/></section> 
  <section id='port'><Portfolio/> </section> 
  <section id='project'><Projectjs/> </section> 
  <section id='team'><Team/> </section> 
  <section id='contact'><Contoo/> </section> 
   <Footer/>
   </>
  )
}

export default App
