import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Navbar,
  Dropdown,
  Card,
} from "react-bootstrap";
import "../../Doctor/Styles/PatientList.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Male from "../../Assets/Male.png";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";


function PatientList() {
  
  const navigate=useNavigate();
  const [patient, setPatient] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const urlParams = useParams()
  console.log(urlParams);
const ID=urlParams.DoctorUserId;  

  const getPatient = async () => {
    console.log(urlParams);
    try {
      const response = await axios.get(
        "https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientDetailsList/0/0/"+ID 
      );
      setPatient(response.data.Data);
      setFilteredNames(response.data.Data);
      console.log(response.data.Data);
    } catch (error) {
      console.log(error);
    }
  };

  const RoleId = sessionStorage.getItem("Role");
  let DoctorUserID=sessionStorage.getItem("DocUserId")

// sessionStorage.setItem("PatientId",patient.PatientId)

  const columns = [
    {
      name: "Patient Code",
      selector: (row) => row.PatientId,
      sortable: true,
    },
    {
      name: "CaseNo",
      selector: (row) => row.CaseNo,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "DateOfBirth",
      selector: (row) => row.DateofBirth,
      sortable: true,
    },
    {
      name: "Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.Gender,
      sortable: true,
    },
    {
      name: "MI",
      selector: (row) => row.Mi,
      sortable: true,
    },
    
    {
      name: "Action",
      cell: row => <button className="edit-patient-btn"  onClick={() =>{ RoleId==="1"? navigate(`/patient-details/${row?.PatientId}`):navigate(`/patient-details-doc/${row?.PatientId}`);
    console.log(patient);
    }}>Edit</button>
    },

    // {
    //   // name: `${RoleId==="1"?"Action":""}`,
    //   cell: row => RoleId==="1"? <button className="edit-patient-btn" onClick={()=>{navigate(`/payment/${row?.PatientId}`)
    // sessionStorage.setItem("Pid",row.PatientId)
    // }}>Payment</button>:""
    // }
  ];

  useEffect(() => {
    getPatient();
  }, []);

  useEffect(() => {
    const result = patient.filter((patientname) => {
      return patientname.Name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredNames(result);
  }, [search]);
  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };

let DoctorName=sessionStorage.getItem("DocName");

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navb">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant="" onClick={tglContent} className="navhide">
                <FaBars fontSize={28} color="#C49358" />
              </Button>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <IoMdNotifications fontSize={30} color="#C49358" className="notification" />
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare fontSize={30} color="#C49358" className="me-2 notification" />
              </Nav.Link> */}
              <span className="address">
                <img src={user} alt="" width={35} className="mt-1" />
              </span>
              <Nav.Link href="#deets" className="p-0 mx-2 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                    {DoctorName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={()=>{navigate("/")
                    // sessionStorage.clear();
                    }}>Logout</span>

                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        {RoleId==="1"?"":
        <Row className="menuTab">
          <Col>
            <Card body className="border-0">
              <Nav className="justify-content-center">
                <Nav.Link href="" className="doc-tab active" onClick={()=>navigate(`/doctor-dashboard/${DoctorUserID}`)}>
                  Dashboard
                </Nav.Link>
                {/* <Nav.Link href="#deets" className="prof-tab">
                  Profile
                </Nav.Link> */}
              </Nav>
            </Card>
          </Col>
        </Row>
}
        <Container>
          <Row className="mt-5 mb-5" style={{ backgroundColor: "white" }}>
            <Col>
              <Row>
                <Col
                  className="m-5"
                  style={{ border: "solid 0.1em lightgray" }}
                >
                  <DataTable
                    columns={columns}
                    data={filteredNames}
                    pagination
                    fixedHeader
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                      <input
                        type="text"
                        className="w-25 form-control mt-4 mb-4"
                        placeholder="Search by Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      ></input>
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default PatientList;
