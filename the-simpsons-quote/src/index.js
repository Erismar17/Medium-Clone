import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quotes from './Quotes/Quotes';
import NotFound from './NotFound/NotFound';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/quotes",
    element: <Quotes />,
  },
  {
    path: "/NotFound",
    element: <NotFound />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals();