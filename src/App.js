import React from "react";
import Dashboard from "./Component/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignedWork from "./Component/AssignedWork/AssignedWork";
import PopUp from "./Component/PopUp/PopUp";

const App = () => {
  return (
    <div>
      <Dashboard />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/assignedwork" component={AssignedWork} />
          <Route exact path="/popup" component={PopUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
