import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import GadgetCategory from './components/GadgetCategory/GadgetCategory';
import Gadgetscard from './components/Gadgetscard/Gadgetscard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categoryData.json'),
        children : [{
          path: '/category/:category',
          element: <Gadgetscard></Gadgetscard>
        }]
      },
      {
        path: 'Gadgets/:productId',
        element: <GadgetDetail></GadgetDetail>,
        loader : () => fetch('/allData.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
