
import './App.css';

import React from 'react';
import Navbar from './Navbar'




const App = () => {
  return (
    <div>
      <ul  className= ' bg-black text-white flex justify-between py-8 px-8'>
        <li><a href='/home'>Homepage</a></li>
        <li><a href='/counter'>ClientCounter</a></li>
      </ul>
    <Navbar/>
    </div>
  )
}

export default App
