import React from 'react'
import Profile from '../pages/Profile'
import About from '../pages/About'
import TaskList from '../pages/TaskList'
import CreateTask from '../pages/CreateTask'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../Components/Navbar'
import Register from '../auth/Register'
import Login from '../auth/Login'
import { Authprovider } from '../auth/AuthContext'
import ProtectedRoute from '../auth/ProtectedRoute'
import { TaskProvider } from '../context/TaskContext'



function AppRouter() {
    return (
        <BrowserRouter>
            <Authprovider>
                <TaskProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Navigate to="/login" />}></Route>
                        <Route path='/' element={<Home />}>
                            <Route path='login' element={<Login />}></Route>
                            <Route path='Register' element={<Register />} /></Route>

                        <Route path='about' element={<About />}></Route>
                        <Route path='task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
                        <Route path='create-task' element={<ProtectedRoute><CreateTask /></ProtectedRoute>}></Route>
                        <Route path='profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
                    </Routes>
                </TaskProvider>
            </Authprovider>
        </BrowserRouter >
    )
}


export default AppRouter