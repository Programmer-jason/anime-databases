import React from 'react'
import ReactDOM from 'react-dom/client'
import "./input.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AddAdmin from './components/AddAdmin.tsx'
import AddAnime from './components/AddAnime.tsx'
import AdminSignin from './components/AdminSignin.tsx';
import App from './App.tsx';
import ListAnime from './components/ListAnime.tsx';
import ListAdmin from './components/ListAdmin.tsx';
import Admin from './components/Admin.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <AdminSignin />,
  },
  {
    path: 'adminPage',
    element: <Admin />,
    children: [
        {
            path: 'listAdmin',
            element: <ListAdmin />
        },
        {
            path: 'addAdmin',
            element: <AddAdmin />
        },
        {
        path: 'listAnime',
        element: <ListAnime />,
        },
        {
        path: 'addAnime',
        element: <AddAnime />
        }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
