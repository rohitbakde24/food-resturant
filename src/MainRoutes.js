import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Cart from './Component/Cart/Cart'


import FoodNavbar from'./Component/FoodNavbar'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Register from './Component/Login/Register'
import Menu from './Component/Menu/Menu'
import Thankyou from './Component/Thankyou/Thankyou'
const MainRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/' element={<FoodNavbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/thankyou' element={<Thankyou/>}/>
        
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MainRoutes