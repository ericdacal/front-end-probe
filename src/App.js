import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListPage/>} />
        <Route path="/details" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
