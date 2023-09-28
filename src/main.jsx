import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Users from './components/users/Users.jsx'
import UserDetails from './components/userDetails/UserDetails.jsx'
import Posts from './post/Posts.jsx'
import PostDetails from './post/PostDetails.jsx'
import ErrorPage from './components/error/ErrorPage'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
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
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users/>
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>
      },
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts/>
      },
      {
        path: '/posts/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <PostDetails/>

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
    
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
