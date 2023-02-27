import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedUserLogged from './components/App/ProtectedUserLogged'
import Navbar from './components/Layout/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import { getAllCartProducts } from './store/slices/cart.slice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<Product />} />

        <Route element={<ProtectedUserLogged />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
