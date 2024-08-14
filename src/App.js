import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import "./css/index.scss"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App