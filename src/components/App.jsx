import { useState, useEffect} from 'react'
import './App.css'
import Entry from './Entry';

function App() {
  const [name, setName] = useState("");

  return (
    <>
    <div className="App">
      <h1>Video Game API</h1>
      <Entry action={setName} />
    </div>
    </>
  )
}

export default App
