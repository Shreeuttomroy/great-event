import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout/Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './components/Details/Details.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Athentic from './Provider/Authentic.jsx'
import Profile from './components/profile/Profile.jsx'
import Private from './PrivateRoutes/Private.jsx'

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
        element: <Login></Login>
      },
      {
        path:"register",
        element: <Register></Register>
      },
      {
        path:"profile",
        element: <Private><Profile></Profile></Private>
      },
      {
        path:"/:id",
        loader:()=>fetch("data.json"),
        element: <Private><Details></Details></Private>,
      },
      {
        path:"order",
        element:<Private><h1>Hello Order</h1></Private>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Athentic><RouterProvider router={routes}><Layout /></RouterProvider></Athentic>
  </React.StrictMode>,
)
