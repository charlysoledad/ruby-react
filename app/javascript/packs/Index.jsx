import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { App } from "../components/App";
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
})