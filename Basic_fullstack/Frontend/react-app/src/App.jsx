import { useState } from 'react'

import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

  return (
    <>
      <h1>Chai aur code</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke,index) =>{
          <div key={joke.div}>
                <h3>{jokes.title}</h3>
                <p>{jokes.content}</p>
          </div>

        })
      }
    </>
  )
}

export default App
