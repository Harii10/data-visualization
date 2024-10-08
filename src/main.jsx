import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx';
import Contact from './components/Contact.jsx';
import Dashboard from './components/Dashboard.jsx';
import Tsection from './components/Tsection.jsx';
import Getstarted from './components/Getstarted.jsx';


const router = createBrowserRouter([
  {
    path: '/data-visualization',
    element: <Getstarted/>
  },
  {
    path: '/data-visualization',
    element: <Layout/>,
    children:[
      {
      path:'dashboard',
      element: <Dashboard/>

    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'tsection',
      element: <Tsection/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
