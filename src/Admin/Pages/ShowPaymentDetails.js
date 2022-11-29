import React, { useState, useEffect } from "react";
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
  Form,
  ProgressBar,
  Spinner,
  Table
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import $ from "jquery";
import Swal from "sweetalert2";

function ShowPaymentDetails() {
  const navigate = useNavigate();

  // const PId=sessionStorage.getItem("Pid")
  const DocID = sessionStorage.getItem("DocID");

  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };
  let DoctorName = sessionStorage.getItem("DocName");

  $(document).ready(function () {
    $("input[name$='payment']").click(function () {
      var test = $(this).val();
      $(".desc").hide();
      $("#pay" + test).show();
    });
  });

  const [paymentDetails, setPaymentDetails] = useState([]);

  
  const [search, setSearch] = useState("");
  
  const [filteredNames, setFilteredNames] = useState([]);
  const url="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientPayment";


  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((payment)=>{
      console.log(payment.Data);
      setPaymentDetails(payment.Data);
      setFilteredNames(payment.Data)
    })
  },[])

  const columns=[
    {
      name:"Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {name:"",
      selector: (row) => row.CaseNo,
      sortable: true,
    }
  ]

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
        <Row className="justify-content-center">
          <Col md={10}>
          
            <Row
              className="mt-5 mb-5 p-5 pt-3 justify-content-center"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 15px  #C49358",
                borderRadius: "8px",
              }}
            >
                <p style={{fontSize:"1.4em",fontWeight:"500"}}>Payment Details</p>
              <Col md={2}>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="payment"
                  label="Electronic Transfers"
                  value="1"
                  // style={{ float: "right" }}
                />
              </Col>
              <Col md={2}>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="payment"
                  label="Cheque"
                  value="2"
                />
              </Col>
              <Col md={2}>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="payment"
                  label="Cash"
                  value="3"
                />
              </Col>
              <hr className="mt-3" />

              <Row
                className="justify-content-center desc"
                id="pay1"
                style={{ display: "none" }}
              >
                <Col>
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
                  }/>
                </Col>
              </Row>

              <Row
                className="justify-content-center desc"
                id="pay2"
                style={{ display: "none" }}
              >
                <Col>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>Doctor Name</th>
          <th>Payment Type</th>
          <th>Cheque No.</th>
          <th>Bank Name</th>
          <th>Branch Name</th>

          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>

        <tr>
          
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        
      </tbody>
    </Table>
                </Col>
               
              </Row>

              <Row
                className="justify-content-center desc"
                id="pay3"
                style={{ display: "none" }}
              >
                <Col>
                <p>Cash</p>
                </Col>
               
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShowPaymentDetails;
