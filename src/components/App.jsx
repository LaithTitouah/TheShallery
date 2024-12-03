import './App.css';
import Search from "./Search";
import Results from "./Results";
import useState from "react"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [game, setGame] = useState("");

  useEffect(() => {
    fetch(`https://www.giantbomb.com/api/game/[guid]/?api_key=[76d5e45e91800071790366678ca2e86a3220ffce]`)
  })

  return (
    <>
      <h1>PlayScore</h1>
      <Search />
      <Results />
    </>
  )
}
export default App
