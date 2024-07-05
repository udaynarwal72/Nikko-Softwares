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
import AddAccDetails from './pages/AddAccDetails.jsx';
import CreateSection from './pages/CreateSection.jsx';
import EditableTable from './component/CustomXcelTable/CustomXcelTable.jsx';

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
  },
  {
    path:'/addaccdetails',
    element:<AddAccDetails/>
  },
  {
    path: '/createsection',
    element: <CreateSection />
  },
  {
    path:'/editabletable',
    element:<EditableTable/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
