import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Tab,
  Form,
  InputGroup,
  Navbar,
  Dropdown,
  Card
} from "react-bootstrap";
import React, { useState } from "react";
import { TbUser } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import "../../Doctor/Styles/AddPatient.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Ologo.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function AddPatient() {
  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
              <Button variant="" onClick={tglContent}>
                <FaBars fontSize={28} color="white" />
              </Button>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <IoMdNotifications fontSize={30} color="white" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare fontSize={30} color="white" className="me-2" />
              </Nav.Link>
              <span>
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
                      <span className="px-3">Logout</span>
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
                {/* <Row>
                  <Col>
                  <Button variant="link" className="doc-tab">Doctor</Button>
                  </Col>
                  <Col>
                  <Button variant="link" className="prof-tab">Profile</Button>
                  
                  </Col>
                </Row> */}
                 <Nav className="justify-content-center">
                 <Nav.Link href="#deets" className="doc-tab active">Doctor</Nav.Link>
                 <Nav.Link href="#deets" className="prof-tab">Profile</Nav.Link>
            
          </Nav>
              </Card>
              </Col>
            </Row>
        </Container>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Container
          className="pt-5 mt-5  pb-5 mb-5"
          style={{ boxShadow: "0px 0px 5px 5px #dee2e6" }}
        >
          <Row>
            <Col md={{ span: 12 }}>
              <Row className="justify-content-center">
                <Col md={{ span: 12 }}>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Row>
                      <Col
                        lg={11}
                        sm={11}
                        md={11}
                        xs={10}
                        className="mx-xs-0 mx-lg-4"
                      >
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="first" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}>
                                1
                            
                              </Button>
                              &nbsp;Patient Data
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}>
                                2
                              
                              </Button>
                            
                              &nbsp;ClinicalMalocclusion
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}
                              >
                                3
                              </Button>
                              &nbsp;Prescription Form
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fourth" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}
                              >
                                4
                              </Button>
                              &nbsp;Patient Potrait
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fifth" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}
                              >
                                5
                              </Button>
                              &nbsp;PVS/Scan
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="sixth" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}
                              >
                                6
                              </Button>
                              &nbsp;Photos
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="seventh" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}
                              >
                                7
                              </Button>
                              &nbsp;Radiographs
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Row className="pt-4 justify-content-center px-5">
                        <Col
                          sm={{ span: 12 }}
                          style={{ border: "solid 0.1em lightgray" }}
                        >
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <Row className="pt-4 pb-3">
                                <Col md={{ span: 6 }}>
                                  <Form.Group controlId="validationFirstname">
                                    <InputGroup hasValidation>
                                      <InputGroup.Text id="inputGroupPrepend">
                                        <TbUser fontSize={28}></TbUser>
                                      </InputGroup.Text>
                                      <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please Enter a First Name.
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationLastname"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <InputGroup.Text id="inputGroupPrepend">
                                        <TbUser fontSize={28}></TbUser>
                                      </InputGroup.Text>
                                      <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please Enter a Last Name.
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationMI"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <InputGroup.Text id="inputGroupPrepend">
                                        <TbUser fontSize={28}></TbUser>
                                      </InputGroup.Text>
                                      <Form.Control
                                        type="text"
                                        placeholder="MI"
                                        aria-describedby="inputGroupPrepend"
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group>
                                    Gender
                                    <br></br>
                                    <Form.Check
                                      type="radio"
                                      aria-label="radio 1"
                                      label="Male"
                                      className="pt-2"
                                      name="gender"
                                      inline
                                      feedbackType="invalid"
                                      required
                                    />
                                    <Form.Check
                                      type="radio"
                                      aria-label="radio 1"
                                      label="Female"
                                      name="gender"
                                      inline
                                      feedbackType="invalid"
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationDate"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <InputGroup.Text id="inputGroupPrepend">
                                        <FaCalendarAlt
                                          fontSize={28}
                                        ></FaCalendarAlt>
                                      </InputGroup.Text>
                                      <Form.Control
                                        type="text"
                                        placeholder="Date"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                      />
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">
                                      Please Enter a Date.
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationDoctorsname"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <InputGroup.Text id="inputGroupPrepend">
                                        <TbUser fontSize={28}></TbUser>
                                      </InputGroup.Text>
                                      <Form.Control
                                        type="text"
                                        placeholder="Doctor's Name"
                                        aria-describedby="inputGroupPrepend"
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationClinicAddress"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <InputGroup.Text
                                        id="basic-addon1"
                                        style={{ height: "4em" }}
                                      >
                                        <TbUser fontSize={28}></TbUser>
                                      </InputGroup.Text>
                                      <Form.Control
                                        as="textarea"
                                        rows={2}
                                        placeholder="ClinicAddress"
                                        aria-describedby="inputGroupPrepend"
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationCaseNo"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <InputGroup.Text id="inputGroupPrepend">
                                        <TbUser fontSize={28}></TbUser>
                                      </InputGroup.Text>
                                      <Form.Control
                                        type="text"
                                        placeholder="Case No."
                                        aria-describedby="inputGroupPrepend"
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                </Col>
                                <Col md={{ span: 6 }}>
                                  <Form.Group>
                                    Ship to Office
                                    <Form.Check
                                      type="radio"
                                      label="2004,
                                          B-103 RADHA GOVIND RADHA RESIDENCY SIDDHARTH NAGAR BORIVALI EAST,
                                          MUMBAI 400066"
                                      className="pt-2"
                                    />
                                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                  </Form.Group>
                                  <br></br>
                                  Bill to Office
                                  <Form.Check
                                    type="radio"
                                    aria-label="radio 1"
                                    label="2004, B-103 RADHA GOVIND RADHA RESIDENCY SIDDHARTH NAGAR BORIVALI EAST, MUMBAI 400066"
                                    className="pt-2"
                                    defaultChecked
                                  />
                                  <br></br>
                                  Payer?
                                  <Form.Check
                                    type="radio"
                                    aria-label="radio 1"
                                    label="2004, B-103 RADHA GOVIND RADHA RESIDENCY SIDDHARTH NAGAR BORIVALI EAST, MUMBAI 400066"
                                    className="pt-2"
                                    disabled
                                  />
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <Row>
                                <Col md={6}>
                                <p>csd</p>
                                </Col>
                                <Col md={6}>
                                <p>sdsd</p>
                                </Col>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                      <Row className="text-end pt-3">
                        <Col className="me-4">
                          <Button variant="outline-dark" className="mx-3">
                            Back
                          </Button>
                          <Button type="submit" variant="outline-dark">
                            Next
                          </Button>
                        </Col>
                      </Row>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
export default AddPatient;
