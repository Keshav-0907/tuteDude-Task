import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroPage from './components/Hero/HeroPage'
import CourseCurriculum from './components/CourseCurriculum/CourseCurriculum'
import Refund from './pages/refund/Refund'
import Opportunities from './pages/opportunities/Opportunities'
import Internship from './pages/internship/Internship'

function App() {

  return (
    <div>
      <Header/>
      <HeroPage/>
      <CourseCurriculum/>
      <Refund/>
      <Opportunities/>
      <Internship/>
    </div>
  )
}

export default App
