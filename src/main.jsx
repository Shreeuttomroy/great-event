import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout/Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes= createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    errorElement: <h1>Error</h1>,
    children:[
      {
        path:"",
        element: <div>Home</div>
      },
      {
        path:"login",
        element: <h1>Log-in</h1>
      },
      {
        path:"register",
        element: <h1>Register</h1>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}><Layout /></RouterProvider>
  </React.StrictMode>,
)
