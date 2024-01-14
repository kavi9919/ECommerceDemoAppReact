import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AddProduct from './Pages/AddProduct';
import LandingPage from './Pages/LandingPage';
import Update from './Pages/Update';
import MoreDetails from './Pages/MoreDetails';
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
       <Routes>
        <Route path='/product/:id' element={<MoreDetails/>}></Route>
       </Routes>
    </>
      );
}

export default App;
