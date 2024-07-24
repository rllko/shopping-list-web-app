import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/input.css'
import './assets/index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from './Pages/components/NotFound.jsx';
import Index from './Pages/Index/Index.jsx';
import About from './Pages/About/About.jsx';

const router = createBrowserRouter([{
  path: '/reciepts-web-app/',
  element: <Index/>,
  errorElement: <NotFoundPage/>
},{
  path:'/reciepts-web-app/about',
  element: <About/>,
}]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
