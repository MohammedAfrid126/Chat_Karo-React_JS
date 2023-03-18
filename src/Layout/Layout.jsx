import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function Layout() {

    const { currentUser } = useContext(AuthContext);

    const Protector = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }else{
            return children
        }
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Protector> <Home /> </Protector>} />
                        <Route path='register' element={<Register />} />
                        <Route path='login' element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
