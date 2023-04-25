import logo from './logo.svg';
import './App.css';
import AfterLifeForm from './forms/ALQ1';
import ALQ1 from './forms/ALQ1';
import ALQ2 from './forms/ALQ2';
import ALQ3 from './forms/ALQ3';

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import MainLayout from './forms/mainlayout';
import ALQ4 from './forms/ALQ4';
import ALQ5 from './forms/ALQ5';

function App() {



  return (
    <BrowserRouter>
    <h1> The After Life</h1>
    <nav>
        <NavLink to="/"><button>Home</button></NavLink>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="1" element={<ALQ1 />} />
        <Route path="1/2" element={<ALQ2 />} />
        <Route path="1/2/3" element={<ALQ3 />} />
        <Route path="1/2/3/4" element={<ALQ4 />} />
        <Route path="1/2/3/4/5" element={<ALQ5 />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
