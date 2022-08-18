import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [heads, setHeads] = useState(0)
  const [tails, settails] = useState(0)
   
  const[showHead,setshowHead] = useState(false)
   
  function flipCoin() {
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      setHeads(heads + 1)
      setshowHead(true)
    } else {
      settails(tails + 1)
      setshowHead(false)
    }
  }


  return (
    <div className="App">
      <div className="coin">
         {showHead?<h1>Head</h1>:<h1>Tail</h1>}
         <div className='result'>
          <h3>Heads:{heads}</h3>
          <h3>Tails:{tails}</h3>
         </div>
         <div className='buttons'>
         <button onClick={flipCoin}>Flip</button>
         <button className='reset' onClick={()=>{
          setHeads(0)
          settails(0)
          setshowHead(false)
         }}>Reset</button>
         </div>
        

      </div>
       
    </div>
  )
}

export default App
