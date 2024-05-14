import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Home from './Components/Home/Home';
import AllSpot from './Components/All_Tourist_Spot/AllSpot';
import AddSpot from './Components/Add_Tourist_spot/AddSpot';
import MyList from './Components/MyList/MyList';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import AuthProvider from './Auth/AuthProvider';
import SpotDetails from './Components/SpotDetails/SpotDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allSpot',
        element: <AllSpot></AllSpot>,
        loader: ()=> fetch('http://localhost:5000/allSpots') 
      },
      {
        path: '/addSpot',
        element: <AddSpot></AddSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      },
      {
        path: '/spotDetails/:id',
        element: <SpotDetails></SpotDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allSpots/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
