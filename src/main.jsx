import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    { /*<MyCart/> */}

    <RouterProvider router={router} />
    
  </StrictMode>,
)
