import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout/Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './components/Details/Details.jsx'
import Home from './components/Home.jsx'

const routes= createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    errorElement: <h1>Error</h1>,
    children:[
      {
        path:"",
        element: <Home></Home>,
        loader:()=>fetch("data.json")
      },
      {
        path:"login",
        element: <h1>Log-in</h1>
      },
      {
        path:"register",
        element: <h1>Register</h1>
      },
      {
        path:"detail/:id",
        element: <Details></Details>,
        loader:(params)=>fetch(`data.json/${params.id}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}><Layout /></RouterProvider>
  </React.StrictMode>,
)
