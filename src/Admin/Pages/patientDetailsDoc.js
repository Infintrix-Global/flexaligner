import React,{useState,useEffect} from "react";
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
    Form
  } from "react-bootstrap";
import user from "../../Assets/user.png";
// import user from "../../Assets/user.png";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars,FaEdit } from "react-icons/fa";
import $ from "jquery";
import { useParams } from "react-router-dom";




function PatientDetailsDoc(){
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();
  const urlParams = useParams()
console.log(urlParams);
const ID=urlParams.PatientId;
  const url ="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientAllList/"+ID;

useEffect(() => {
  console.log(urlParams);
  fetch(url)
    .then((res) => res.json())
    .then((det) => {
      console.log(det.Data);
      setPatient(det.Data);
      // console.log(patient);
    });
}, []);


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


    return(
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
                      <span className="px-3" onClick={()=>{navigate("/");
                    sessionStorage.removeItem("Role");
                    }}>
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
        </Container>



         <Container fluid>
          <Row className="justify-content-center">
            <Col md={10}>
              <Row className="mt-5 mb-5 p-5 pt-0" style={{ backgroundColor: "white",boxShadow: "0px 0px 15px  #C49358",borderRadius:"8px" }}>
                <Col className="mt-5" md={10}>
                  <Row className="mb-5">
                    <Col>
                    <p className="pd-title">Patient Details</p>
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    <Col md={3}>
                    <p className="mx-4 px-2 fs-5">
                      <b>Patient Potrait</b>
                    </p>
                    <Row>
                      <Stack direction="horizontal" gap={5}>
                        <img
                          src={user}
                          className="rounded"
                          style={{
                            boxShadow: "0px 5px 5px 5px #E8E8E8",
                            height: "200px",
                            width: "200px",
                          }}
                        ></img>
                      </Stack>
                    </Row>
                    </Col>
                    <Col md={9}>
                      <table style={{width: "45em"}} className="mt-5">
                        <tr>
                          <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>PatientId:</th>
                          <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.PatientId}</td>
                          <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>Name:</th>
                          <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.Name}</td>
                          <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>CaseNo:</th>
                          <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.CaseNo}</td>
                          <Button variant="" className="action-i edit editbtn mt-4">
                          Edit
                        </Button>
                          <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>Gender:</th>
                          <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.Gender}</td>
                          <th style={{width:"110px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>DOB:</th>
                          <td contentEditable="false" style={{width:"100px", wordWrap:"break-word",display:"inline-block",marginTop:"10px"}}>{patient[0]?.DateofBirth}</td>
              
                        </tr>
              
                      </table>
                    </Col>
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
                {/* <Row className="mt-4 mb-5">
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
                </Row> */}
                <Row className="mt-4 mb-5 mt-5">
                  <Col md={{ span: 12 }}>
                    <p className="fs-4">
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
                      {/* <img
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
                      ></img> */}
                    </Stack>
                  </Col>
                </Row>
                <Row className="mt-4 mb-5">
                  <Col md={{ span: 12 }}>
                    <p className="fs-4">
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
                      {/* <img
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
                      ></img> */}
                    </Stack>
                  </Col>
                </Row>
                <Row className="mt-4 mb-5">
                  <Col md={{ span: 12 }}>
                    <p className="fs-4">
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
                      {/* <img
                        src={user}
                        className="rounded"
                        style={{
                          boxShadow: "0px 5px 5px 5px #E8E8E8",
                          height: "100px",
                          width: "100px",
                        }}
                      ></img> */}
                    </Stack>
                  </Col>
                </Row>
                </Row>
                </Col></Row></Container>
        </>
    );
}


export default PatientDetailsDoc;