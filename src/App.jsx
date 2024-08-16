import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import './App.css'

function App() {

  return <BrowserRouter>
    <nav>
      <Link to='/'>Catálogo</Link>
      <Link to='/cart'>Carrinho</Link>
    </nav>
  </BrowserRouter>
  
}

export default App
