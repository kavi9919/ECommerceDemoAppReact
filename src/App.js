import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AddProduct from './Pages/AddProduct';
import LandingPage from './Pages/LandingPage';
function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
       </Routes>

       <Routes>
        <Route path='/add-product' element={<AddProduct/>}></Route>
       </Routes>
    </>
      );
}

export default App;
