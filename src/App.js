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
import PatientDetails from "./Admin/Pages/PatientDetails";
// import PatientDetailsAd from "./Admin/Pages/patientDetailsDoc";
import PatientDetailsDoc from "./Admin/Pages/patientDetailsDoc";
import Ipr from "./Admin/Pages/Ipr";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import DoctorProfile from "./Admin/Pages/DoctorProfile";
import EditPatient from "./Admin/Pages/EditPatient";
import EditDoctor from "./Admin/Pages/EditDoctor";
import Payment from "./Admin/Pages/Payment";
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
          <Route path="/doctor-dashboard/:DoctorUserId" element={<Dashboard/>}/>
          <Route path="/patient-list/:DoctorUserId" element={<PatientList />} />
          <Route path="/patient-details/:PatientId" element={<PatientDetails/>}/>
          <Route path="/patient-details-doc/:PatientId" element={<PatientDetailsDoc/>}/>
          <Route path="/ipr" element={<Ipr/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/doctor-profile/:DoctorId" element={<DoctorProfile/>}/>
          <Route path="/edit-patient/:PatientId" element={<EditPatient/>}/>
          <Route path="/edit-doctor/:DoctorId" element={<EditDoctor/>}/>
          <Route path="/payment/:PatientId" element={<Payment/>}/>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
