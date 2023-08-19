import logo from './logo.svg';
import './App.css';
import Navbar from './components/nabar';
import Resume from './components/resume'
import CreateResume from "./components/creatResume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sum from './components/sum';
function App() {
  return (
    <>
    <Sum/>
      {/*<Routes>
        <Route path='/' element={<Resume/>}/>
        <Route path='/createReume' element={<CreateResume/>}/>
      </Routes>*/}
      
    </>
  );
}

export default App;
