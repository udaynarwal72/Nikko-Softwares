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
import CashBook from './pages/CashBook.jsx';
import LoginPage from './pages/Signin.jsx';
import ItemTable from './pages/ItemTable.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/voucherentry',
    element: <TutionFeesVoucherEntry />
  },
  {
    path: '/table',
    element: <Table />
  },
  {
    path: '/addaccdetails',
    element: <AddAccDetails />
  },
  {
    path: '/master',
    element: <CreateSection />
  },
  {
    path: '/editabletable',
    element: <EditableTable />
  },
  {
    path: '/itemlist/:sectionId',
    element:<ItemTable/>
  },
  {
    path: '/cashbook',
    element: <CashBook />
  },
  {
    path:'/dashboard',
    element:<App/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
