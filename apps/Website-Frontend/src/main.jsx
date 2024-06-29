import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import TutionFeesVoucherEntry from './pages/TutionFeesVoucherEntry.jsx';
import Table from './component/Tables/CreditTable.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/tutionfeesvoucherentry',
    element: <TutionFeesVoucherEntry />
  },
  {
    path:'/table',
    element:<Table/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
