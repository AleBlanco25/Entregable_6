
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

 // Este es el código para crear un usuario
// useEffect (()=> {
//   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'

//   const data ={
//     firstName:'Alejandro',
//     lastName:'Blanco',
//     email: 'ale.blanco.2589@gmail.com',
//     password:'0123456789',
//     phone: '4249015249' ,
//     role: "dev"
//   }

//   axios.post(URL, data)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// },[])

  // Aquí termina
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:id' element={<ProductInfo />} />
      {/*---Rutas protegidas---*/}
      <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
      </Route>
      
    </Routes>
    <Footer/>
    </div>
  )
}

export default App

