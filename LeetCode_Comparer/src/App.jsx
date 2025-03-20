import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Input from './components/Input.jsx'
import Button from './components/Button.jsx'
import { useCard } from './context/Card.jsx'

function App() {
  const card = useCard()
  console.log(card);
  
  return (
      <div className='flex items-center justify-evenly h-screen'>
        <div>
          <div>
            <Input name="one"/><Button name="two"
              onClick = {card.fetchData1}
            />
          </div>
          <Card value="one"/>
        </div>
        <div>
          <div>
              <Input name="two"/><Button name="two"
                onClick = {card.fetchData2}
              />
            </div>  
            <Card value="two"/>
          </div>
      </div>
  )
}

export default App
