import './App.css';
import ALQ1 from './forms/ALQ1';
import ALQ2 from './forms/ALQ2';
import ALQ3 from './forms/ALQ3';

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import MainLayout from './forms/mainlayout';
import ALQ9 from './forms/ALQ9';
import FinalResults from './forms/FinalResults';
import { connect } from 'react-redux';
import { formReset, resetButtons } from './FormState/actionCreators';

function App(props) {
const {formReset} = props

  const handleFormReset = () =>{
    formReset()
    localStorage.clear();

  }



  return (
    <BrowserRouter>
    <div className="App">
    <h1> The After Life</h1>
    <nav>
        <NavLink to="/"><button onClick={handleFormReset}>Home</button></NavLink>&nbsp;
      
      </nav>
    </div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="1" element={<ALQ1 />} />
        <Route path="1/2" element={<ALQ2 />} />
        <Route path="1/2/3" element={<ALQ3 />} />
        <Route path="1/2/3/9" element={<ALQ9 />} />
        {/* <Route path="1/2/3/4/5" element={<ALQ5 />} />
        <Route path="1/2/3/4/5/6" element={<ALQ6 />} />
        <Route path="1/2/3/4/5/6/7" element={<ALQ7 />} />
        <Route path="1/2/3/4/5/6/7/8" element={<ALQ8 />} />
        <Route path="1/2/3/4/5/6/7/8/9" element={<ALQ9 />} /> */}
        <Route path="1/2/3/9/10" element={<FinalResults />} />
      </Routes>
   </BrowserRouter>
  );
}

export default connect(mstp=>mstp, {resetButtons, formReset})(App);
