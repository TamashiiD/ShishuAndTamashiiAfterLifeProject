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
import ALQ6 from './forms/ALQ6';
import ALQ7 from './forms/ALQ7';
import ALQ8 from './forms/ALQ8';
import ALQ9 from './forms/ALQ9';
import FinalResults from './forms/FinalResults';
import { connect } from 'react-redux';
import { formReset } from './FormState/actionCreators';

function App(props) {
const {formReset} = props
  const handleFormReset = () =>{
    formReset()
  }
  
  return (
    <BrowserRouter>
    <h1> The After Life</h1>
    <nav>
        <NavLink to="/"><button onClick={handleFormReset}>Home</button></NavLink>&nbsp;
      
      </nav>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="1" element={<ALQ1 />} />
        <Route path="1/2" element={<ALQ2 />} />
        <Route path="1/2/3" element={<ALQ3 />} />
        <Route path="1/2/3/4" element={<ALQ4 />} />
        <Route path="1/2/3/4/5" element={<ALQ5 />} />
        <Route path="1/2/3/4/5/6" element={<ALQ6 />} />
        <Route path="1/2/3/4/5/6/7" element={<ALQ7 />} />
        <Route path="1/2/3/4/5/6/7/8" element={<ALQ8 />} />
        <Route path="1/2/3/4/5/6/7/8/9" element={<ALQ9 />} />
        <Route path="1/2/3/4/5/6/7/8/9/10" element={<FinalResults />} />
      </Routes>
   </BrowserRouter>
  );
}

export default connect(mstp=>mstp, {formReset})(App);
