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
  Card,
} from "react-bootstrap";
import React, { useState, useRef } from "react";
import { TbUser } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import "../../Doctor/Styles/AddPatient.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Ologo.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import $ from "jquery";

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

  const handleOndragOver = (event) => {
    event.preventDefault();
  };
  const handleOndrop = (event) => {

    event.preventDefault();
    event.stopPropagation();
    
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  
  };

  const handleOndrop71=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFileTab71(imageFile);
  }
  const handleOndrop72=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFileTab72(imageFile);
  }

  const handleOndrop1=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile1(imageFile);
  }

  const handleOndrop2=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile2(imageFile);
  }
  const handleOndrop3=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile3(imageFile);
  }
  const handleOndrop4=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile4(imageFile);
  }
  const handleOndrop5=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile5(imageFile);
  }
  const handleOndrop6=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile6(imageFile);
  }
  const handleOndrop7=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];

    handleFile7(imageFile);
  }

  const fileInput = useRef(null);
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);
  const fileInput4 = useRef(null);
  const fileInput5 = useRef(null);
  const fileInput6 = useRef(null);
  const fileInput7 = useRef(null);
  const fileInputTab71 = useRef(null);
  const fileInputTab72 = useRef(null);





  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [imageTab71, setImageTab71] = useState(null);
  const [imageTab72, setImageTab72] = useState(null);




  const [previewUrl, setPreviewUrl] = useState("");
  const [previewUrl1, setPreviewUrl1] = useState("");
  const [previewUrl2, setPreviewUrl2] = useState("");
  const [previewUrl3, setPreviewUrl3] = useState("");
  const [previewUrl4, setPreviewUrl4] = useState("");
  const [previewUrl5, setPreviewUrl5] = useState("");
  const [previewUrl6, setPreviewUrl6] = useState("");
  const [previewUrl7, setPreviewUrl7] = useState("");
  const [previewUrlTab71, setPreviewUrlTab71] = useState("");
  const [previewUrlTab72, setPreviewUrlTab72] = useState("");





  const handleFile = (file) => {

    setImage(file);


    setPreviewUrl(URL.createObjectURL(file));
   

  };



  const handleFile1=(file)=>{
    setImage1(file);
    setPreviewUrl1(URL.createObjectURL(file));

    
  }

  const handleFile2=(file)=>{
    setImage2(file);
    setPreviewUrl2(URL.createObjectURL(file));

    
  }

  const handleFile3=(file)=>{
    setImage3(file);
    setPreviewUrl3(URL.createObjectURL(file));

    
  }

  const handleFile4=(file)=>{
    setImage4(file);
    setPreviewUrl4(URL.createObjectURL(file));

    
  }

  const handleFile5=(file)=>{
    setImage5(file);
    setPreviewUrl5(URL.createObjectURL(file));

    
  }

  const handleFile6=(file)=>{
    setImage6(file);
    setPreviewUrl6(URL.createObjectURL(file));

    
  }

  const handleFile7=(file)=>{
    setImage7(file);
    setPreviewUrl7(URL.createObjectURL(file));

    
  }

  const handleFileTab71=(file)=>{
    setImageTab71(file);
    setPreviewUrlTab71(URL.createObjectURL(file));
  }
  const handleFileTab72=(file)=>{
    setImageTab72(file);
    setPreviewUrlTab72(URL.createObjectURL(file));
  }
  










  // var rbutton1 = document.getElementById("r1");
  // var rbutton2 = document.getElementById("r2");
  // var rbutton3 = document.getElementById("r3");
  // var rbutton4 = document.getElementById("r4");
  // var pg = document.getElementById("de1");
  // var form = document.getElementsByClassName("fg");

//   var disppg=pg.style
// // pg.style.display="none";

// if(!rbutton1.checked)
// {
//   pg.style.display="none";
// }
// else{
//   pg.style.display="block";
// }


$(document).ready(function() {
  $("input[name$='radioo']").click(function() {
      var test = $(this).val();

      $(".desc").hide();
      $("#frm" + test).show();
  });


  $("input[name$='portrait']").click(function() {
    var test = $(this).val();

    $(".desc").hide();
    $("#port" + test).show();
});

$("input[name$='photo']").click(function() {
  var test = $(this).val();

  $(".desc").hide();
  $("#Ph" + test).show();
});

$("input[name$='graph']").click(function() {
  var test = $(this).val();

  $(".desc").hide();
  $("#G" + test).show();
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
                                style={{ borderRadius: "50%" }}
                              >
                                1
                              </Button>
                              &nbsp;Patient Data
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" href="#">
                              <Button
                                variant="light"
                                style={{ borderRadius: "50%" }}
                              >
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
                                <p>Clinical Conditions*</p>
                                <Row>
                                  <Col md={6}>
                                  <Form.Check type="checkbox" label="Crowding" />
                                  <Form.Check type="checkbox" label="Spacing" />
                                  <Form.Check type="checkbox" label="Class II div 1" />
                                  <Form.Check type="checkbox" label="Class II div 2" />
                                  <Form.Check type="checkbox" label="CClass III" />
                                  <Form.Check type="checkbox" label="Open bite" />
                                  <Form.Check type="checkbox" label="Anterior crossbite" />
                                  <Form.Check type="checkbox" label="Posterior crossbite" />
                                  </Col>
                                  <Col md={6}>
                                  <Form.Check type="checkbox" label="Deep Bite" />
                                  <Form.Check type="checkbox" label="Narrow Arch" />
                                  <Form.Check type="checkbox" label="Flared Teeth" />
                                  <Form.Check type="checkbox" label="Overjet" />
                                  <Form.Check type="checkbox" label="Uneven smile" />
                                  <Form.Check type="checkbox" label="Misshapen teeth" />
                                  <Form.Check type="checkbox" label="Other" />

                                  </Col>
                                </Row>
                                </Col>
                                <Col md={6}>
                                <p>General Notes</p>
                                <Row>
                                  <Col>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Example textarea</Form.Label> */}
        <Form.Control as="textarea" rows={7} />
        <Form.Text className="text-muted">
        *Clinical Conditions and General Notes are for your reference and statistical purposes only and will NOT be considered as treatment planning instructions
        </Form.Text>
      </Form.Group>

      
                                  </Col>
                                </Row>
                                  <p>csd</p>
                                </Col>
                                <Col md={6}>
                                  <p>sdsd</p>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <Row className="pt-4 pb-3">
                                <Col md={{ span: 6 }}>
                                  <p>Chief Complaint</p>
                                  <Form.Group
                                    controlId="validationChiefComplaint"
                                    className="mt-3"
                                  >
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        as="textarea"
                                        rows={6}
                                        aria-describedby="inputGroupPrepend"
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group
                                    controlId="validationQuotation"
                                    className="mt-3"
                                  >
                                    <Form.Label>
                                      Quotation (Only Numbers Eg:20000)
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please Enter a Quotation.
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </Col>
                                <Col md={{ span: 6 }}>
                                  <Row>
                                    <Col md={{ span: 6 }}>
                                      <p>Upper Midline</p>
                                      <Form.Group>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Centered"
                                          name="midline"
                                        />
                                      </Form.Group>
                                      <Form.Group controlId="validationRight">
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Shifted Right"
                                          name="midline"
                                        />
                                        <InputGroup hasValidation>
                                          <Form.Control
                                            type="number"
                                            aria-describedby="inputGroupPrepend"
                                          />
                                          &nbsp; MM
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group controlId="validationRight">
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Shifted Left"
                                          name="midline"
                                        />
                                        <InputGroup hasValidation>
                                          <Form.Control
                                            type="number"
                                            aria-describedby="inputGroupPrepend"
                                          />
                                          &nbsp; MM
                                        </InputGroup>
                                      </Form.Group>
                                      <p className="mt-4">Lower Midline</p>
                                      <Form.Group>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Centered"
                                          name="Lowermidline"
                                        />
                                      </Form.Group>
                                      <Form.Group controlId="validationRight">
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Shifted Right"
                                          name="Lowermidline"
                                        />
                                        <InputGroup hasValidation>
                                          <Form.Control
                                            type="number"
                                            aria-describedby="inputGroupPrepend"
                                          />
                                          &nbsp; MM
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group controlId="validationRight">
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Shifted Left"
                                          name="Lowermidline"
                                        />
                                        <InputGroup hasValidation>
                                          <Form.Control
                                            type="number"
                                            aria-describedby="inputGroupPrepend"
                                          />
                                          &nbsp; MM
                                        </InputGroup>
                                      </Form.Group>
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                      <p>Canine Relationship</p>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                      >
                                        <Form.Label column sm="4">
                                          Right Class
                                        </Form.Label>
                                        <Col sm="5">
                                          <Form.Control type="number" />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                        className="mt-2 mb-4"
                                      >
                                        <Form.Label column sm="4">
                                          Left Class
                                        </Form.Label>
                                        <Col sm="5">
                                          <Form.Control type="number" />
                                        </Col>
                                      </Form.Group>
                                      <p>Molar Relationship</p>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                      >
                                        <Form.Label column sm="4">
                                          Right Class
                                        </Form.Label>
                                        <Col sm="5">
                                          <Form.Control type="number" />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                        className="mt-2 mb-4"
                                      >
                                        <Form.Label column sm="4">
                                          Left Class
                                        </Form.Label>
                                        <Col sm="5">
                                          <Form.Control type="number" />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                        className="mt-2"
                                      >
                                        <Form.Label column sm="4">
                                          Endon
                                        </Form.Label>
                                        <Col sm="5">
                                          <Form.Select size="sm">
                                            <option>Select</option>
                                            <option>Right</option>
                                            <option>Left</option>
                                            <option>Both</option>
                                          </Form.Select>
                                        </Col>
                                      </Form.Group>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                        className="mt-2"
                                      >
                                        <Form.Label column sm="4">
                                          Overbite
                                        </Form.Label>
                                        <Col sm="5">
                                          <Form.Select size="sm">
                                            <option>Select</option>
                                            <option>25%</option>
                                            <option>50%</option>
                                            <option>75%</option>
                                            <option>100%</option>
                                          </Form.Select>
                                        </Col>
                                      </Form.Group>
                                      <Form.Group
                                        as={Row}
                                        controlId="validationCanine"
                                        className="mt-2 mb-4"
                                      >
                                        <Form.Label column sm="4">
                                          Overjet
                                        </Form.Label>
                                        <Col sm="5 p-0">
                                          <Form.Control type="number" />
                                        </Col>
                                        <Col sm="1 px-2">MM</Col>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <hr className="hrline" />
                              <Row>
                                <Col md={{ span: 5 }}>
                                  <h3>Instruction</h3>
                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Upper Midline:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct1"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct1"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct1"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Lower Midline:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct2"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct2"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct2"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Overjet:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct3"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct3"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct3"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Overbite:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct4"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct4"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct4"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Arch Form:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct5"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct5"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct5"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Canine Relationship:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct6"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct6"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct6"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Molar Relationship:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct7"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct7"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct7"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Posterior Crossbite :
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Maintain"
                                        name="instruct8"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Improve"
                                        name="instruct8"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Idealize"
                                        name="instruct8"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      IPR :
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Yes"
                                        name="instruct9"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="No"
                                        name="instruct9"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Only If Needed"
                                        name="instruct9"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Engagers & Attachments:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Yes"
                                        name="instruct10"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="No"
                                        name="instruct10"
                                      />
                                    </Col>

                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Only If Needed"
                                        name="instruct10"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Procline:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Yes"
                                        name="instruct11"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="No"
                                        name="instruct11"
                                      />
                                    </Col>
                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Only If Needed"
                                        name="instruct11"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Expand:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Yes"
                                        name="instruct12"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="No"
                                        name="instruct12"
                                      />
                                    </Col>
                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Only If Needed"
                                        name="instruct12"
                                      />
                                    </Col>
                                  </Form.Group>

                                  <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                      Distalize:
                                    </Form.Label>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Yes"
                                        name="instruct13"
                                      />
                                    </Col>
                                    <Col sm="3" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="No"
                                        name="instruct13"
                                      />
                                    </Col>
                                    <Col sm="2" className="mt-2">
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Only If Needed"
                                        name="instruct13"
                                      />
                                    </Col>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <hr className="hrline" />
                              <Row>
                                <Col md={{ span: 12 }}>
                                  <h3>Teeth are labeled</h3>
                                  <h6>
                                    Do Not Move These Teeth (Bridges, Ankylosed
                                    Teeth, Etc.) :
                                  </h6>
                                  <table className="mt-3">
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            18
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>

                                        <td>
                                          <div>
                                            17
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            16
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            15
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            14
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            13
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            12
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            11
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            21
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            22
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            23
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            24
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            25
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            26
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            27
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            28
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: "0px 8px;" }}>
                                          R
                                        </td>
                                        <td colspan="16">
                                          <hr
                                            className="hrrl"
                                            style={{
                                              borderTop:
                                                "margin-top: 25px; margin-bottom: 0px;",
                                            }}
                                          />
                                        </td>
                                        <td style={{ padding: "0px 8px;" }}>
                                          L
                                        </td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            48
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            47
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            46
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            45
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            44
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            43
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            42
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            41
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            31
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            32
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            33
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            34
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            35
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            36
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            37
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            38
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <h6 className="mt-4">
                                    Avoid Engagers & Attachments On These Teeth
                                    (Facial Restoration, Etc.) :
                                  </h6>
                                  <table className="mt-3">
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            18
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>

                                        <td>
                                          <div>
                                            17
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            16
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            15
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            14
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            13
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            12
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            11
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            21
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            22
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            23
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            24
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            25
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            26
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            27
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            28
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: "0px 8px;" }}>
                                          R
                                        </td>
                                        <td colspan="16">
                                          <hr
                                            className="hrrl"
                                            style={{
                                              borderTop:
                                                "margin-top: 25px; margin-bottom: 0px;",
                                            }}
                                          />
                                        </td>
                                        <td style={{ padding: "0px 8px;" }}>
                                          L
                                        </td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            48
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            47
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            46
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            45
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            44
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            43
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            42
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            41
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            31
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            32
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            33
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            34
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            35
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            36
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            37
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            38
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <h6 className="mt-4">
                                    I Will Extract These Teeth Before Treatment
                                    :
                                  </h6>
                                  <table className="mt-3">
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            18
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>

                                        <td>
                                          <div>
                                            17
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            16
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            15
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            14
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            13
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            12
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            11
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            21
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            22
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            23
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            24
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            25
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            26
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            27
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            28
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: "0px 8px;" }}>
                                          R
                                        </td>
                                        <td colspan="16">
                                          <hr
                                            className="hrrl"
                                            style={{
                                              borderTop:
                                                "margin-top: 25px; margin-bottom: 0px;",
                                            }}
                                          />
                                        </td>
                                        <td style={{ padding: "0px 8px;" }}>
                                          L
                                        </td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            48
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            47
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            46
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            45
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            44
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            43
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            42
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            41
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            31
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            32
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            33
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            34
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            35
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            36
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            37
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            38
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <h6 className="mt-4">
                                    Leave These Spaces Open :{" "}
                                  </h6>
                                  <table className="mt-3">
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            18
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>

                                        <td>
                                          <div>
                                            17
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            16
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            15
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            14
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            13
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            12
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            11
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            21
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            22
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            23
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            24
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            25
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            26
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            27
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            28
                                            <br />
                                            <Form.Check aria-label="option 1" />
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: "0px 8px;" }}>
                                          R
                                        </td>
                                        <td colspan="16">
                                          <hr
                                            className="hrrl"
                                            style={{
                                              borderTop:
                                                "margin-top: 25px; margin-bottom: 0px;",
                                            }}
                                          />
                                        </td>
                                        <td style={{ padding: "0px 8px;" }}>
                                          L
                                        </td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            48
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            47
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            46
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            45
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            44
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            43
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            42
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            41
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            31
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            32
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            33
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            34
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            35
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            36
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            37
                                          </div>
                                        </td>
                                        <td>
                                          <div>
                                            <Form.Check aria-label="option 1" />
                                            38
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </Col>
                              </Row>
                              <h6 className="mt-3">Additional Instruction:</h6>
                              <Form.Group
                                controlId="validationInstruction"
                                className="mt-3 mb-5"
                              >
                                <InputGroup hasValidation>
                                  <Form.Control
                                    as="textarea"
                                    rows={7}
                                    aria-describedby="inputGroupPrepend"
                                  />
                                </InputGroup>
                              </Form.Group>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth" className="p-3">
                              <Row>
                                <Col md={8}>
                                  <Card className="img-crd">
                                    <Row className="p-3">
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          id="r1"
                                          name="portrait"
                                          label="Upload patient portrait now"
                                          value="1"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 2"
                                          id="r2"
                                          name="portrait"
                                          label="Upload patient portrait later"
                                          value="2"
                                        />
                                      </Col>
                                    </Row>
                                    <hr className="m-2" />
                                    <Card
                                      className="img-crd-in m-2 desc"
                                      id="port1"
                                      onDragOver={handleOndragOver}
                                      onDrop={handleOndrop}
                                      onClick={() => fileInput.current.click()}
                                    >
                                      {previewUrl ? (
                                        ""
                                      ) : (
                                        <p className="text-center">
                                          Drag or click to browse
                                        </p>
                                      )}
                                      {previewUrl && (
                                        <div className="image-prev">
                                          <img
                                            src={previewUrl}
                                            alt="image"
                                            className="mt-5"
                                          />{" "}
                                          <br />
                                          <Button
                                            variant=""
                                            onClick={() => {
                                              setPreviewUrl("");

                                              // e.stopPropagation();
                                            }}
                                          >
                                            Delete
                                          </Button>
                                          <p> {image.name} </p>
                                        </div>
                                      )}
                                      <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput}
                                        hidden
                                        onChange={(e) =>
                                          handleFile(e.target.files[0])
                                        }
                                      />
                                    </Card>

                                    <Card className="desc" id="port2">
                                        <img src="https://www.portal.flexalign.in/user/img/bg-portrait.gif" alt="" />
                                    </Card>
                                  </Card>
                                </Col>
                                <Col md={4}>
                                  <Card className="p-3">
                                    <p className="up-rec">UPLOADED RECORDS</p>
                                  </Card>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                              <Row className="p-3">
                                <Col md={8}>
                                  <Card className="p-3 check-crd">
                                    <Row>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          id="r1"
                                          name="radioo"
                                          label="Decide Later"
                                          // checked="checked"
                                          value="1"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 2"
                                          id="r2"
                                          name="radioo"
                                          label="PVS Impressions"
                                          value="2"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 3"
                                          id="r3"
                                          name="radioo"
                                          label="Intraoral Scans"
                                          value="3"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 4"
                                          id="r4"
                                          name="radioo"
                                          label="Models"
                                          value="4"
                                        />
                                      </Col>
                                    </Row>

                                    <Row className="desc" id="frm1">
                                      <Col>
                                        <p className="decide" id="de1">
                                          Decide Later.
                                        </p>
                                        </Col>
                                        </Row>
                                       
                                       
                                        <Row className="desc" id="frm2" style={{display:"none"}}>
                                          <Col>
                                        <Form.Group
                                          controlId="formFileMultiple"
                                          className="mb-3 fg"
                                          id="formFileMultiple"
                                        >
                                          <Form.Label>
                                            Multiple files input example
                                          </Form.Label>
                                          <Form.Control type="file" multiple />
                                        </Form.Group>
                                      </Col>
                                    </Row>

                                    <Row className="desc" id="frm3" style={{display:"none"}}>
                                          <Col>
                                        <Form.Group
                                          controlId="formFileMultiple"
                                          className="mb-3 fg"
                                          id="formFileMultiple"
                                        >
                                          <Form.Label>
                                            Multiple files input example
                                          </Form.Label>
                                          <Form.Control type="file" multiple />
                                        </Form.Group>
                                      </Col>
                                    </Row>


                                    <Row className="desc" id="frm4"  style={{display:"none"}}>
                                          <Col>
                                        <Form.Group
                                          controlId="formFileMultiple"
                                          className="mb-3 fg"
                                          id="formFileMultiple"
                                        >
                                          <Form.Label>
                                            Multiple files input example
                                          </Form.Label>
                                          <Form.Control type="file" multiple />
                                        </Form.Group>
                                      </Col>
                                    </Row>


                                  </Card>
                                </Col>
                                <Col md={4}>
                                  <Card className="p-3">
                                    <p className="up-rec">UPLOADED RECORDS</p>
                                  </Card>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                            {/* <section>
      <label>
        + Add Images
        <br />  
        <span>up to 10 images</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      <input type="file" multiple />

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section> */}



<Row className="m-2">
                                <Col md={8}>
                                  <Card className="img-crd">
                                    <Row className="p-3">
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          id="r1"
                                          name="photo"
                                          label="Upload photos now"
                                          value="1"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 2"
                                          id="r2"
                                          name="photo"
                                          label="Upload photos later"
                                          value="2"
                                        />
                                      </Col>
                                    </Row>
                                    <hr className="m-2" />
                                    <Card
                                      className="img-crd-in m-2 p-3 desc"
                                      id="Ph1"
                                      // onDragOver={handleOndragOver}
                                      // onDrop={handleOndrop}
                                      // onClick={() => fileInput.current.click()}
                                    >
                                       <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput}
                                        hidden
                                        onChange={(e) =>
                                          handleFile(e.target.files[0])}/>

                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput1}
                                        hidden
                                        onChange={(e) =>
                                          handleFile1(e.target.files[0])}/>

                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput2}
                                        hidden
                                        onChange={(e) =>
                                          handleFile2(e.target.files[0])}/>
                                          
                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput3}
                                        hidden
                                        onChange={(e) =>
                                          handleFile3(e.target.files[0])}/>

                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput4}
                                        hidden
                                        onChange={(e) =>
                                          handleFile4(e.target.files[0])}/>

                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput5}
                                        hidden
                                        onChange={(e) =>
                                          handleFile5(e.target.files[0])}/>

                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput6}
                                        hidden
                                        onChange={(e) =>
                                          handleFile6(e.target.files[0])}/>

                                          <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInput7}
                                        hidden
                                        onChange={(e) =>
                                          handleFile7(e.target.files[0])}/>


                                      <Row>
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop} onClick={() => fileInput.current.click()}>
                                        {previewUrl && (
                                       
                                          <img
                                            src={previewUrl}
                                            alt="image"
                                            className="img-s"
                                          />
                                         
                                        )}
                                        </Card>
                                        </Col>
                                        <Col md={4}>
                                         <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop1} onClick={() => fileInput1.current.click()}>
                                         {previewUrl1 && (
                                       
                                       <img
                                         src={previewUrl1}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                        </Card>
                                        </Col>
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop2} onClick={() => fileInput2.current.click()}>
                                        {previewUrl2 && (
                                       
                                       <img
                                         src={previewUrl2}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                          </Card>
                                        </Col>
                                      </Row>
                                      <Row className="mt-3">
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop3} onClick={() => fileInput3.current.click()}>
                                        {previewUrl3 && (
                                       
                                       <img
                                         src={previewUrl3}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                          </Card>
                                        </Col>
                                        <Col md={4}>
                                        <Card className="border-0 p-2">
                                            <p>Drag and drop individual photos from desktop folder to respective tile</p>
                                        </Card>
                                        </Col>
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop4} onClick={() => fileInput4.current.click()}>
                                        {previewUrl4 && (
                                       
                                       <img
                                         src={previewUrl4}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                          </Card>
                                        </Col>
                                      </Row>
                                      <Row className="mt-3">
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop5} onClick={() => fileInput5.current.click()}>
                                        {previewUrl5 && (
                                       
                                       <img
                                         src={previewUrl5}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                          </Card>
                                        </Col>
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop6} onClick={() => fileInput6.current.click()}>
                                        {previewUrl6 && (
                                       
                                       <img
                                         src={previewUrl6}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                          </Card>
                                        </Col>
                                        <Col md={4}>
                                        <Card className="crd-up" onDragOver={handleOndragOver} onDrop={handleOndrop7} onClick={() => fileInput7.current.click()}>
                                        {previewUrl7 && (
                                       
                                       <img
                                         src={previewUrl7}
                                         alt="image"
                                         className="img-s"
                                       />
                                      
                                     )}
                                          </Card>
                                          
                                        </Col>
                                      </Row>
                                      
                                      {/* {previewUrl ? (
                                        ""
                                      ) : (
                                        <p className="text-center">
                                          Drag or click to browse
                                        </p>
                                      )} */}
                                      {/* {" "}
                                          <br />
                                          <Button
                                            variant=""
                                            onClick={() => {
                                              setPreviewUrl("");

                                              // e.stopPropagation();
                                            }}
                                          >
                                            Delete
                                          </Button>
                                          <p> {image.name} </p>
                                        </div>
                                      )}
                                     
                                        } */}
                                    </Card>
                                    <Card className="desc" id="Ph2">
                                            <Row>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                            </Row>

                                            <Row>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                            </Row>

                                            <Row>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                              <Col md={4}>
                                              <Card className="crd-up">

                                              </Card>
                                              </Col>
                                            </Row>
                                          </Card>
                                     <Row className="m-2 mt-1">
                                      <Col>
                                      <p className="m-0 pb-1">Add More Photos</p>
                                      <Form.Control type="file" multiple  className=""/>
                                      </Col>
                                     </Row>
                                  </Card>
                                </Col>
                                <Col md={4}>
                                  <Card className="p-3">
                                    <p className="up-rec">UPLOADED RECORDS</p>
                                  </Card>
                                </Col>
                              </Row>

                            </Tab.Pane>

                            <Tab.Pane eventKey="seventh">
                            <Row className="m-2">
                                <Col md={8}>
                                  <Card className="img-crd">
                                    <Row className="p-3">
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          id="r1"
                                          name="graph"
                                          label="Upload Radiographs Now"
                                          value="1"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 2"
                                          id="r2"
                                          name="graph"
                                          label="Upload Radiographs later"
                                          value="2"
                                        />
                                      </Col>
                                      <Col>
                                      <Form.Check
                                          type="radio"
                                          aria-label="radio 2"
                                          id="r3"
                                          name="graph"
                                          label="No Radiographs"
                                          value="3"
                                        />
                                      </Col>
                                    </Row>
                                    <hr className="m-2" />
                                    <Card
                                      className="img-crd-in m-2 desc"
                                        id="G1"
                                      // onDragOver={handleOndragOver}
                                      // onDrop={handleOndrop}
                                      // onClick={() => fileInputTab7.current.click()}
                                    >
                                     <Row className="m-3">
                                        <Col>
                                        <Card className="crd-up2" onDragOver={handleOndragOver} onDrop={handleOndrop71} onClick={() => fileInputTab71.current.click()}>
                                          {previewUrlTab71?"":<p className="text-center mt-5 pt-5">Drag Image or click to browse</p>}
                                        {previewUrlTab71 && (
                                       
                                          <img
                                            src={previewUrlTab71}
                                            alt="image"
                                            className="img-s m-3"
                                          />
                                         
                                        )}
                                        </Card>
                                        </Col>
                                            <Col>
                                        <Card className="crd-up2" onDragOver={handleOndragOver} onDrop={handleOndrop72} onClick={() => fileInputTab72.current.click()}>
                                        {previewUrlTab72?"":<p className="text-center mt-5 pt-5">Drag Image or click to browse</p>}
                                      
                                        {previewUrlTab72 && (
                                       
                                          <img
                                            src={previewUrlTab72}
                                            alt="image"
                                            className="img-s2  m-3"
                                          />
                                         
                                        )}
                                        </Card>
                                        </Col>
                                      
                                      </Row>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputTab71}
                                        hidden
                                        onChange={(e) =>
                                          handleFileTab71(e.target.files[0])
                                        }
                                      />
                                      <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputTab72}
                                        hidden
                                        onChange={(e) =>
                                          handleFileTab72(e.target.files[0])
                                        }
                                      />
                                    </Card>
                                    <Card className="desc p-2" id="G2">
                                          <img src="https://www.portal.flexalign.in/user/img/bg-x-ray-dis-n.png" alt=""/>
                                    </Card>
                                    <Card className="desc p-2" id="G3">
                                    <img src="https://www.portal.flexalign.in/user/img/bg-x-ray-dis-n.png" alt=""/>

                                    </Card>
                                  </Card>

                                </Col>
                                <Col md={4}>
                                  <Card className="p-3">
                                    <p className="up-rec">UPLOADED RECORDS</p>
                                  </Card>
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
                          <Button type="submit" className="nextbtn">

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
