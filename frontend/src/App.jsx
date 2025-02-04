
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Nav from './Component/nav/Nav'
import Layout from './Component/Layout'
import Nbr from './Component/Nbr'
function App() {

  return (
    <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route element={<Home/>} path='/'></Route>
    <Route element={<Layout/>} path='/layout'></Route>
    <Route element={<Nbr/>} path='/nbr'></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
