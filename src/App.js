import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import "./css/index.scss"
import About from './page/About'
import TechStack from './page/TechStack'
import Project from './page/Project'
import ProjectDetail from './page/ProjectDetail'

function App() {
  const [mode, setMode] = useState("dark")
  const handleMode = (newMode) => {
    setMode(newMode)
  }
  console.log(mode);
  return (
    <div >
      <Routes>
        <Route path="/" index element={<Home handleMode={handleMode} />}></Route>
        <Route path="/about" index element={<About />}></Route>
        <Route path="/techstack" index element={<TechStack />}></Route>
        <Route path="/project" index element={<Project />}></Route>
        <Route path="/projectDetail/:id" index element={<ProjectDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App