
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisaApplyPage from './Component/VisaApply/VisaApplyPage';
// import LoginForm from './Component/StartApplication/LoginForm';
import TravelerDetails from './Component/StartApplication/TravelerDetails';
import Document from './Component/StartApplication/SubmitDocument/Document';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>         
        <Route path="/visatour/:id" element={<VisaApplyPage />} />       
        <Route path="/TravelDetails" element={<TravelerDetails/>} />       
        <Route path="/document" element={<Document/>} />       
        
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
