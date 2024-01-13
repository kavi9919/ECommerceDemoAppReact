import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AddProduct from './Pages/AddProduct';
import LandingPage from './Pages/LandingPage';
import Update from './Pages/Update';
function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
       </Routes>

       <Routes>
        <Route path='/add-product' element={<AddProduct/>}></Route>
       </Routes>
       <Routes>
        <Route path='/update/:id' element={<Update/>}></Route>
       </Routes>
    </>
      );
}

export default App;
