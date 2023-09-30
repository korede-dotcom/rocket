/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExchangeRates from './components/ExchangeRates'
import "@arco-design/web-react/dist/css/arco.css"
import Login from './components/Login'
import Register from './components/Register'
import { ProtectedRoute } from './hooks';
import InActivityTimeOut from './hooks/InActivityTimeOut'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from 'react-router-dom';
import Dashboard from './Routes/User/Dashboard'
import AgentDashboard from './Routes/Agent/Dashboard'
import Beneficiary from './Routes/User/Beneficiary'
import BeneficiaryDetails from './Routes/User/BeneficiaryDetails'
import CreateBeneficiary from './Routes/User/CreateBeneficiary'
import History from './Routes/User/History'
import TransactionDetails from './Routes/User/TransactionDetails'
import 'react-toastify/dist/ReactToastify.css';
import UploadBeneficiaryFiles from './Routes/User/UploadBeneficiaryFiles'
import SendMoney from './Routes/User/SendMoney'
import Wallet from './Routes/User/Wallet';
import AgentCustomer from './Routes/Agent/AgentCustomer'





function App() {
  return (
      <Router>
      <Routes>
        {/* <Route element={<InActivityTimeOut />}> */}
        <Route>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Register/>} />
          
            {/* Dashboard Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path='/user/dashboard' element={<Dashboard/>} />
              <Route path='/user/beneficiary' element={<Beneficiary/>} />
              <Route path='/user/beneficiary/details' element={<BeneficiaryDetails/>} />
              <Route path='/user/beneficiary/upload' element={<UploadBeneficiaryFiles/>} />
              <Route path='/user/create/beneficiary' element={<CreateBeneficiary/>} />
              <Route path='/user/transactions/' element={<History/>} />
              <Route path='/user/transactions/details' element={<TransactionDetails/>} />
              <Route path='/user/sendmoney' element={<SendMoney/>} />
              <Route path='/user/transaction/history' element={<Dashboard/>} />
              <Route path='/user/setting' element={<Dashboard/>} />
              <Route path='/user/wallet' element={<Wallet/>} />
              <Route path='/agent/dashboard' element={<AgentDashboard/>} />
              <Route path='/agent/customers' element={<AgentCustomer/>} />
            {/* </Route> */}
            <Route path='*' element={<h1>Error</h1>} />

        </Route>
      </Routes>
      </Router>
 
    

  )
}

export default App
