import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Preview from './Components/Preview';

const App = () => {
  const [activeKey, setActiveKey] = useState<string>('movies-in-theaters');
  return (
    <Routes>
      <Route path='/' element={<Home activeKey={activeKey} setActiveKey={setActiveKey}></Home>}></Route>
      <Route path='/:movieName' element={<Preview></Preview>}></Route>
    </Routes>
  )
}

export default App;