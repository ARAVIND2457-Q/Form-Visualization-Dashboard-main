import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import GlassDashboard from "./components/GlassDashboard";


const App = () => {

  const [DashUser, setDashUser] = useState({});

  return (

    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Form  DashUser={DashUser} setDashUser={setDashUser} />} />


        <Route exact path="/dashboard" element={<GlassDashboard DashUser={DashUser} setDashUser={setDashUser} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
