import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/input.css'
import './assets/index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from './Pages/NotFound.jsx';
import Index from './Pages/Index.jsx';

const router = createBrowserRouter([{
  path: '/reciepts-web-app/',
  element: <Index/>,
  errorElement: <NotFoundPage/>
}]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
