import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// libraries
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// components
import AlexSolution from './routes/AlexSolution.tsx';
import IsaSolution from './routes/IsaSolution.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/alex',
    element: <AlexSolution />
  },
  {
    path: '/isa',
    element: <IsaSolution />
  },
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
