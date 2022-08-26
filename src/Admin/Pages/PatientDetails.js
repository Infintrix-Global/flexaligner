import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Navbar,
  Dropdown,
  Card,
  Stack,
} from "react-bootstrap";
import "../../Doctor/Styles/PatientList.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars,FaEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Male from "../../Assets/Male.png";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

function PatientList() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  //   const getPatient = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientDetailsList/0/0"
  //       );
  //       setPatient(response.data.Data);
  //       setFilteredNames(response.data.Data);
  //       console.log(response.data.Data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const url =
    "https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientDetailsList/0/0";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((details) => {
        console.log(details.Data);
        setPatient(details.Data);
        // console.log(patient);
      });
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
  $(document).ready(function () {
    $(".editbtn").click(function () {
      var currentTD = $(this).parents("tr").find("td");
      if ($(this).html() == "Edit") {
        currentTD = $(this).parents("tr").find("td");
        $.each(currentTD, function () {
          $(this).prop("contenteditable", true);
          $(this).parents("tr").find("td").focus();
        });
      } else {
        $.each(currentTD, function () {
          $(this).prop("contenteditable", false);
        });
      }

      $(this).html($(this).html() == "Edit" ? "Save" : "Edit");
    });
  });
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
                <IoMdNotifications
                  fontSize={30}
                  color="#C49358"
                  className="notification"
                />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare
                  fontSize={30}
                  color="#C49358"
                  className="me-2 notification"
                />
              </Nav.Link>
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
                    admin@gmail.com
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={() => navigate("/")}>
                        Logout
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className="menuTab">
          <Col>
            <Card body className="border-0">
              <Nav className="justify-content-center">
                <Nav.Link href="#deets" className="doc-tab active">
                  Doctor
                </Nav.Link>
                <Nav.Link href="#deets" className="prof-tab">
                  Profile
                </Nav.Link>
              </Nav>
            </Card>
          </Col>
        </Row>

        <Container>
          <Row className="mt-5 mb-5 p-4" style={{ backgroundColor: "white" }}>
            <Col className="mt-5">
              <Row>
                <table style={{width: "45em"}}>
                  <tr>
                    <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>PatientId:</th>
                    <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.PatientId}</td>
                    <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>PatientId:</th>
                    <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.PatientId}</td>
                    <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>PatientId:</th>
                    <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.PatientId}</td>
                    <Button variant="" className="action-i edit editbtn mt-4">
                    Edit
                  </Button>
                    <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>PatientId:</th>
                    <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.PatientId}</td>
                    <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>PatientId:</th>
                    <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.PatientId}</td>
                 
                  </tr>
                 
                </table>
                {/* <Col>
                  <p>
                    <b>PatientId:</b>&nbsp;{patient[0]?.PatientId}
                  </p>
                  <p>
                    <b>Patient Name:</b>&nbsp;{patient[0]?.Name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Patient Case No:</b>&nbsp;{patient[0]?.CaseNo}
                  </p>
                  <p>
                    <b>Patient Gender:</b>&nbsp;{patient[0]?.Gender}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Patient DOB:</b>&nbsp;{patient[0]?.DateofBirth}
                  </p>
                </Col>
                <Col>
                  {" "}
                  <Button variant="" className="action-i edit editbtn">
                    Edit
                  </Button>
                </Col> */}
              </Row>
            </Col>
            <Row className="mt-4 mb-5">
              <Col md={{ span: 12 }}>
                <p>
                  <b>View Patient Potrait</b>
                </p>
                <Row>
                  <Stack direction="horizontal" gap={5}>
                    <img
                      src={user}
                      className="rounded"
                      style={{
                        boxShadow: "0px 5px 5px 5px #E8E8E8",
                        height: "100px",
                        width: "100px",
                      }}
                    ></img>
                  </Stack>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 mb-5">
              <Col md={{ span: 12 }}>
                <p>
                  <b>View Extraoral Photos</b>
                </p>
                <Stack direction="horizontal" gap={5}>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                </Stack>
              </Col>
            </Row>

            <Row className="mt-4 mb-5">
              <Col md={{ span: 12 }}>
                <p>
                  <b>View Intraoral Photos</b>
                </p>
                <Stack direction="horizontal" gap={5}>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                </Stack>
              </Col>
            </Row>

            <Row className="mt-4 mb-5">
              <Col md={{ span: 12 }}>
                <p>
                  <b>Radiographs</b>
                </p>
                <Stack direction="horizontal" gap={5}>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                  <img
                    src={user}
                    className="rounded"
                    style={{
                      boxShadow: "0px 5px 5px 5px #E8E8E8",
                      height: "100px",
                      width: "100px",
                    }}
                  ></img>
                </Stack>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default PatientList;
