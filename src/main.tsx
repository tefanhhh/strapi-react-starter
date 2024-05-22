import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import RouterConfig from '@/router.config';

import '@/assets/css/app.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={RouterConfig} />
  </React.StrictMode>,
)
