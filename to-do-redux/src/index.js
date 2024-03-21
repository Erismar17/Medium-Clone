import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Add from './Components/Add/Add.js';
import Details from './Components/Details/Details.js';
import List from './Components/List/List.js';

const router = createBrowserRouter ([
  /* cada una de las vistas/ pantallas son una ruta */
  {
    /* el path inicial se deja solo con el slash */
    path: "/",
    element: <List />,
    errorElement: <div>404 Not Found</div>,
    /* EJEMPLO -------------------------------------------------------------------
    path: "/contacto/:contactoId" lo que está después de los dos puntos es la
    variable que puede cambiar para encontrar más información por medio de rutas*/
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/add",
    element: <Add />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();