import React from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';

export const Pages = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}

export default Pages;