import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import LoginModal from './components/LoginModal';
import MainContext from './context/MainContext';
import './config/api'
import { PageProvider } from './hooks/usePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageProvider>
        <App />
      </PageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
