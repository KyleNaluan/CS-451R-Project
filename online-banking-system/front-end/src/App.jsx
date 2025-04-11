import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Accounts from "./components/Accounts";
import IndividualAccount from "./components/IndividualAccount";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/account/:accountId" element={<IndividualAccount />} />
        <Route path="/transfer" element={<Transfer />} />

      </Routes>
    </div>
  );
}

export default App;
