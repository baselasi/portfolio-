import logo from './logo.svg';
import './App.css';
import Navbar from './components/nabar';
import Resume from './components/resume'
import CreateResume from "./components/creatResume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Resume/>}/>
        <Route path='/createReume' element={<CreateResume/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
