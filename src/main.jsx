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
        element: <AllSpot></AllSpot>
      },
      {
        path: '/addSpot',
        element: <AddSpot></AddSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
