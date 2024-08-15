import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import "./css/index.scss"
import About from './page/About'
import TechStack from './page/TechStack'
import Project from './page/Project'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" index element={<About />}></Route>
        <Route path="/techstack" index element={<TechStack />}></Route>
        <Route path="/project" index element={<Project />}></Route>
      </Routes>
    </>
  )
}

export default App