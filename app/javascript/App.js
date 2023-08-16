import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Greeting from "./components/Greeting"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<h1>Hello Rails React</h1>} />
        <Route path="/greetings" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  )
}