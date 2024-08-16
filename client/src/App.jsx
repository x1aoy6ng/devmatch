import { useState } from 'react'
import { Navbar, SortBar, RoomInfo } from './components'
import './App.css'

function App() {
  return (
    <div className='relative w-full min-h-screen'>
      <Navbar/>
      <SortBar/>
      <RoomInfo/>
    </div>
  )
}

export default App
