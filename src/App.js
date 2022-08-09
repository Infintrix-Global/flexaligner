import React from "react";
import Login from "./Admin/Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDoctor from "./Admin/Pages/AddDoctor";
import DoctorsList from "./Admin/Pages/DoctorsList";
import AddPatient from "./Doctor/Pages/AddPatient";
// import PatientLogin from "./Doctor/Pages/PatientLogin";
import Upload from "./Doctor/Pages/Upload";
import PatientList from "./Doctor/Pages/PatientList";
// import File from "./Doctor/Pages/File";
import Dashboard from "./Doctor/Pages/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/view-doctors" element={<DoctorsList />} />
          <Route path="/add-patient" element={<AddPatient />} />
          {/* <Route path="/patient-login" element={<PatientLogin/>}/> */}
          <Route path="/upload" element={<Upload />} />
          {/* <Route path="/file" element={<File/>}/> */}
          <Route path="/doctor-dashboard" element={<Dashboard/>}/>s
          <Route path="/patient-list" element={<PatientList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
