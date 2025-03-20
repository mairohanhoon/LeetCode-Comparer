import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <div className='flex items-center justify-evenly h-screen'>
      
      <div>
        
        <Card/>
      </div><div>
        <Card/>
      </div>

    </div>
  )
}

export default App
