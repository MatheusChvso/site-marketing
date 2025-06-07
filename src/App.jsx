import './styles.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Oferta from '../pages/oferta'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </Router>
  )
}

export default App






