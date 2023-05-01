import { useState } from 'react';
import AppPortal from './components/AppPortal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {

  const [customers, setCustomers] = useState()

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AppPortal customers={customers} setCustomers={setCustomers}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
