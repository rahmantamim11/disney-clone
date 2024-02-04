import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import Footer from './Components/Footer'

function App() {


  return (
    <>
     <Header/>
     <Slider/>
     <ProductionHouse/>
     <GenreMovieList/>
     <Footer/>
    </>
  )
}

export default App
