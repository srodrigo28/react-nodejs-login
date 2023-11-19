import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/Login'
import  Home  from './pages/Home'
import Register from './pages/Register'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/Home", element: <Home /> },
  { path: "/register", element: <Register /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
