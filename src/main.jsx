import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import App from './pages/App';
import Index from './pages/product';
import Detail from './pages/product/detail';
import Carts from './pages/cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/product",
    element: <Index/>
  },
  {
    path: "/product/:name",
    element: <Detail/>
  },
  {
    path: "/cart",
    element: <Carts/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
