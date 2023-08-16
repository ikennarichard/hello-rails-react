import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Greeting from "./components/Greeting"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/greetings/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  )
}