import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Search from './components/Pages/Search'
import RoomInfo from './components/Pages/RoomInfo'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/room-info' element={<RoomInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}