
import React from 'react'
import {createBrowserRouter}from 'react-router-dom'
  import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Movies } from './Pages/Movies'
import { Applayout } from './Components/layout/Applayout';
import { Errorpage } from './Pages/Errorpage';
import { getMovie } from './api/GetApi';
import { Moviedetail } from './Components/UI/Moviedetail';
import {RouterProvider} from 'react-router-dom'
import { Getdetail } from './api/Getdetail';
import {contactdetail} from './Pages/Contact';
const App=()=> {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      errorElement:<Errorpage/>,
      children:[
      {
      path:"/",
      element:<Home/>

    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>,
      action:contactdetail,
    },
    {
      path:"/Movies",
      element:<Movies/>,
      loader:getMovie
    },
    {
      path:"/Movies/:movieid",
      element:<Moviedetail/>,
      loader:Getdetail

    }
    ]
    }
    
  ])
  return (
            <RouterProvider router={router}/>
        );
}

export default App
