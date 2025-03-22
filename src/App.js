import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Admissions from './components/Admission'
import Academics from './components/Academics';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/admissions" element={<Admissions/>}/>
      <Route path="/academics" element={<Academics/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;