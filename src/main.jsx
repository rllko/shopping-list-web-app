import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/input.css'
import './assets/index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from './Pages/components/NotFound.jsx';
import Index from './Pages/Index/Index.jsx';
import About from './Pages/About/About.jsx';

const router = createBrowserRouter([{
  path: '/shopping-list-web-app/',
  element: <Index/>,
  errorElement: <NotFoundPage/>
},{
  path:'/shopping-list-web-app/about',
  element: <About/>,
},
{
  path:'/shopping-list-web-app/login',
  element: <NotFoundPage/>,
},
{
  path:'/shopping-list-web-app/lists',
  element: <NotFoundPage/>,
},
{
  path:'/shopping-list-web-app/recipes',
  element: <NotFoundPage/>,
}]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
