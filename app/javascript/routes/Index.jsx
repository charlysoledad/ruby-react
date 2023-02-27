import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../components/Home';

export const Router = () => (

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);