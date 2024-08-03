import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/input.css'
import './assets/index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from './Pages/components/NotFound.jsx';
import Index from './Pages/Index/Index.jsx';
import About from './Pages/About/About.jsx';
import Recipes from './Pages/Recipes/Recipes.jsx';
import Recipe from './Pages/Recipe/Recipe.jsx';
import LoginPage from './Pages/Login/LoginPage.jsx';
import RegisterPage from './Pages/Login/RegisterPage.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <Index/>,
  errorElement: <NotFoundPage/>
  },{
  path: '/notFound',
  element: <Index/>,
  errorElement: <NotFoundPage/>
  },{
  path:'/about',
  element: <About/>,
  },{
  path:'/login',
  element: <LoginPage/>,
  },{
  path:'/register',
  element: <RegisterPage/>,
  },{
  path:'/lists',
  element: <NotFoundPage/>,
  },{
  path:'/recipes/',
  element: <Recipes/>,
  },{
    path: '/recipes/:recipeId',
    element: <Recipe/>,
  }]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
