import React from "react";
import Login from "./Admin/Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDoctor from "./Admin/Pages/AddDoctor";
import DoctorsList from "./Admin/Pages/DoctorsList";
import AddPatient from "./Doctor/Pages/AddPatient";
import PatientLogin from "./Doctor/Pages/PatientLogin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/add-doctor" element={<AddDoctor/>}/>
          <Route path="/view-doctors" element={<DoctorsList/>}/>
          <Route path="/add-patient" element={<AddPatient/>}/>
          <Route path="/patient-login" element={<PatientLogin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
