import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from "../components/Form";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
