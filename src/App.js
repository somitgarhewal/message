import React from 'react';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap'
import '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/approutes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />  
    </BrowserRouter>
  );
}

export default App;
