import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Github from './components/Github/Github.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className='flex flex-row justify-center items-between'>
    <Github/>
    <Github/>
    </div>
      
    </>
  )
}

export default App
