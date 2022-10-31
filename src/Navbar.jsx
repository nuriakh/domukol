import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Counter from './Counter';


const Sidebar = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={ <Homepage/>}/>
        <Route path='/counter' element={ <Counter/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Sidebar