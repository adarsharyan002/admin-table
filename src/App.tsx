
import React from "react";
import Table from "./components/Table";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";



const App: React.FC = () => {
 


  
return (
    <>
           <Router>
          <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/table" element={<Table/>} />
          </Routes>
          </Router>
    
    </>
    
  );
};











export default App;
