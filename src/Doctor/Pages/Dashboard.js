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
} from "react-bootstrap";
import "../../Doctor/Styles/Dashboard.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import ProgressBar from "react-bootstrap/ProgressBar";
import advertisement from "../../Assets/advertisement.png";
import {LinkContainer} from 'react-router-bootstrap';
import patientimg from "../../Assets/mock1.jpg";
import {useNavigate,useParams} from "react-router-dom";

function Dashboard() {
  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };

  const navigate=useNavigate();
const [DocDetails, setDocDetails] = useState([]);
  const urlParams = useParams()
  console.log(urlParams);
  const ID=urlParams.DoctorUserId;
    const url ="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetDoctorDashboard/"+ID;
  
  useEffect(() => {
    console.log(urlParams);
    fetch(url)
      .then((res) => res.json())
      .then((det) => {
        console.log(det.Data);
        setDocDetails(det.Data);
        // console.log(patient);
      });
  }, []);

  // const [data, setData] = useState([]);
  // const url =
  //   "https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetDoctorList/0/0";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((list) => {
  //       console.log(list.Data);
  //       setData(list.Data);
  //     });
  // }, []);

let DoctorName=sessionStorage.getItem("DocName");
let DoctorPhone=sessionStorage.getItem("DocPhone");
let DoctorEmail=sessionStorage.getItem("DocEmail");
let DoctorPracticeName=sessionStorage.getItem("DocPracName");
let DoctorRole=sessionStorage.getItem("DocRole");
let DoctorUser=sessionStorage.getItem("DocUserId");
let DoctorAddress=sessionStorage.getItem("DocAddress");
let DoctorLicense=sessionStorage.getItem("DocLicense");


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
              {/* <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare
                  fontSize={30}
                  color="#C49358"
                  className="me-2 notification"
                />
              </Nav.Link> */}
              <span className="address">
                <img src={user} alt="" width={35} className="mt-1" />
              </span>
              <Nav.Link href="#deets" className="p-0 mx-2 mt-1">
                <Dropdown className="out-dd">
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                   {DocDetails[0]?.Name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={()=>{
                        navigate("/");
                        // sessionStorage.clear();
                      }
                    }>Logout</span>
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
                <LinkContainer to={`/doctor-dashboard/${DoctorUser}`}>
                  <Nav.Link className="doc-tab active">
                  Dashboard
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link href="#deets" className="prof-tab">
                  Profile
                </Nav.Link>
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ backgroundColor: "white" }} className="mt-5 mb-5">
          <Col md={{ span: 12 }} xs={{ span: 12 }}>
            <Row>
              <Col md={{ span: 6 }}>
                <Row className="mt-5">
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white" }}
                    className="mb-1"
                  >
                    <p className="mt-4">
                      In Treatment <span style={{ float: "right" }}>0</span>
                    </p>
                    <ProgressBar now={0} className="mt-5 mb-4" />
                  </Col>
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white" }}
                    className="mb-1"
                  >
                    <p className="mt-4">
                      In Action Required{" "}
                      <span style={{ float: "right" }}>0</span>
                    </p>
                    <ProgressBar now={0} className="mt-5 mb-4" />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white",cursor:"pointer" }}
                    className="mb-1"
                    onClick={()=>navigate(`/patient-list/${DoctorUser}`)}
                  >
                    <p className="mt-4">
                      Total No of Patients
                      <span style={{ float: "right" }}>{DocDetails[0]?.NoOfPatinet}</span>
                    </p>
                    <ProgressBar now={DocDetails[0]?.NoOfPatinet} className="mt-5 mb-4" />
                  </Col>
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white" }}
                    className="mb-1"
                  >
                    <p className="mt-4">
                      Success Story <span style={{ float: "right" }}>0</span>
                    </p>
                    <ProgressBar now={0} className="mt-5 mb-4" />
                  </Col>
                </Row>
              </Col>
              <Col md={{ span: 4, offset: 1 }} className="mt-5">
                <img src={advertisement} className="w-100"></img>
                <Button
                  className="mt-5 w-100"
                  style={{ backgroundColor: "#C49358" }}
                  onClick={()=>navigate("/add-patient")}
                >
                  Add Patient
                </Button>

                <Button
                  className="mt-5 w-100"
                  style={{ backgroundColor: "#C49358" }}
                  onClick={()=>navigate("/allocated-sets")}
                >
                  Aligner's Allocation
                </Button>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={{ span: 6 }}>
                <Row className="mt-5">
                  <Col
                    md={{ span: 8, offset: 1 }}
                    style={{ boxShadow: "0px 0px 5px 5px #dee2e6",backgroundColor:"#ebdbc6" }}
                    className="p-3"
                  >
                    <img
                      src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?b=1&k=20&m=922962354&s=170667a&w=0&h=gpsD4Kn3xGxc_CMswNa_twx-Nxf9og_ipyV_2rjCWj4="
                      className="w-50 p-3"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                      }}
                    ></img>
                    <p className="text-center">
                      <span style={{ fontWeight: "bold", color: "#077396" }}>
                      {DocDetails[0]?.Name}
                      </span>
                      <br />
                      <span style={{ fontWeight: "bold" }}>Orthodontist</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={{ span: 6 }}>
                <Row className="mt-5">
                  <Col
                    md={{ span: 11 }}
                    style={{ boxShadow: "0px 0px 5px 5px #dee2e6",backgroundColor:"#ebdbc6"}}
                    className="p-5"
                  >
                    <p style={{ fontWeight: "bold" }}>Practice Name: {DocDetails[0]?.PracticeName}</p>
                    <p style={{ fontWeight: "bold" }}>License # : {DocDetails[0]?.Licence}</p>
                    <p style={{ fontWeight: "bold" }}>
                     Address: {DocDetails[0]?.Address}
                    </p>
                    <p style={{ fontWeight: "bold" }}>Phone no : +91 {DocDetails[0]?.PhoneNo}</p>
                    <p style={{ fontWeight: "bold" }}>Email Id : {DocDetails[0]?.PracticeEmail}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard;
