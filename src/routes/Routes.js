import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from "../components/Form";
import Registrar from "../components/Registrar";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        { <Route path="/" element={<Form />} /> }
        { <Route path="/Registrar" element={<Registrar />} /> }
        
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
