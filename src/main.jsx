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
import PageNotFound from './Error/PageNotFound';
import Private from './Routes/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allSpots')
      },
      {
        path: '/allSpot',
        element: <Private>
          <AllSpot></AllSpot>
        </Private>,
        loader: () => fetch('http://localhost:5000/allSpots')
      },
      {
        path: '/addSpot',
        element: <Private><AddSpot></AddSpot></Private>
        
      },
      {
        path: '/myList/:userEmail',
        element: <Private><MyList></MyList></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/mySpot/${params.userEmail}`)
      },
      {
        path: '/spotDetails/:id',
        element: <Private><SpotDetails></SpotDetails></Private>,
        loader: ({ params }) => fetch(`http://localhost:5000/allSpots/${params.id}`)
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
