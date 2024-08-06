
import { Hero } from "./Components/Hero"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {SpotifyCallback} from "./Components/Auth/SpotifyCallback"
import "./index.css"
function App() {

  return (
    <Router>
      <div className = "w-screen h-screen bg-primary ">
          <Route path = "/" component = {Hero} />
          <Route path = "/callback" component = {SpotifyCallback} />

      </div>
    </Router>
  )
}

export default App
