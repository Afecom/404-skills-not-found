import { Routes, Route } from "react-router-dom"
import { Home } from "./home.jsx"
import { About } from './about.jsx'
import { Nav } from "./Nav.jsx"

function App(){
  return(
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
