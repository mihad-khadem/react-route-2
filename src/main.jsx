import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Users from './components/users/Users.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/users',
        element: <Users/>
      }
    ]
  },
  {
    path: '/about',
    element: <div>Hello from About</div>
  },
  {
    path: '/contact',
    element: <div>Hello from Contact</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
