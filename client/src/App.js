import React from "react";
import "./App.css";
import { Head, MainRoutes } from "./components/header";
require('dotenv').config();

const App = () => {
  return (
    <>
      <Head />
      <MainRoutes />
    </>
  );
};

export default App;