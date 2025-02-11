import {HashRouter as Router,Route,Routes,} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './app.css'
import Nopage from "./Pages/NoPage/Nopage";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Nopage/>} />
      </Routes>
    </Router>

  )
}

export default App
