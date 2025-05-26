import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Component/Layout/AppLayout'
import Heropage from './pages/Heropage'
import Fresherspage from './pages/Fresherspage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Heropage/>

      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
