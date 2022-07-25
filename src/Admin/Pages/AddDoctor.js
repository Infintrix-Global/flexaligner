import React,{useState} from "react";
import { Button, Col, Container ,Nav,Navbar, Row,Dropdown,Card,Form} from "react-bootstrap";
import logo from "../../Assets/Ologo.png";
import "../../Admin/Styles/AddDoctor.css";
import {IoMdNotifications} from "react-icons/io";
import {FiMessageSquare,FiPower} from "react-icons/fi";
import {FaBars} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";

import user from "../../Assets/user.png";




function AddDoctor(){

  // const [activePath, setActivePath] = useState();

  // useEffect(() => {
  //   let path = window.location.pathname.split("/")[1];
  //   setActivePath(path);
  // }, []);

      const tglContent = () => {
        let Menu = document.querySelector(".menuTab");
        
        if(Menu.classList.contains("collapsed"))
        {
          Menu.classList.remove("collapsed");
        }
        else{
          Menu.classList.add("collapsed");
        }
      }



      const [validated, setValidated] = useState(false);

      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="navb">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="" className="" width={120}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant="" onClick={tglContent}><FaBars fontSize={28} color="white"/></Button>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><IoMdNotifications fontSize={30} color="white"/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <FiMessageSquare fontSize={30} color="white" className="me-2"/>
            </Nav.Link>
            <span><img src={user} alt="" width={35} className="mt-1"/></span>
            <Nav.Link href="#deets" className="p-0 mx-2 mt-1">
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="user">
        admin@gmail.com
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><CgProfile fontSize={25}/><span className="px-3">Profile</span></Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-2"><FiPower fontSize={25}/><span className="px-3">Logout</span></Dropdown.Item>
       
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


        <Container fluid>
        <Row className="justify-content-center mt-3">
          <Col md={10}>
          <Card className="mb-3 border-0 p-crd">
            <Row className="justify-content-center">
              <Col md={8}>
              <Card className="border-1 p-4 mt-5 mb-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter First Name"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter First Name!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Last Name"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Last Name!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>
                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Practice Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Practice Name"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Name!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Practice Name1</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Practice Name1"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Name1!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>
                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Tax ID</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Tax ID"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Tax ID!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                     
                      </Row>

                      <Row className="mt-5">
                        <Col>
                        <p className="add-t">ADDRESS</p>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Street 1</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Strret"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Name!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Street 2</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Practice Name1"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Name1!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>
                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Practice Name"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Name!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Practice Name1"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Name1!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>

                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Postal Code"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Postal Code!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Practice Website</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Practice Website"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Website!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>

                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Fax</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Fax"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Fax!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Practice Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter Practice Email"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Practice Email!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>

                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          placeholder="Enter Phone No."
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Phone No.!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Enter Password"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Password!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                      </Row>
                      <Row className="mt-3">
                      <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Enter Confirm Password"
                          className="p-3"
                        />
                        <Form.Control.Feedback type="invalid">Enter Confirm Password!</Form.Control.Feedback>
                      </Form.Group>
                      </Col>
                     
                      </Row>

                      <Row className="text-center mt-3">
                        <Col>
                        <Button variant="" type="submit" className="doc-signup">Sign up</Button>
                        </Col>
                      </Row>


                      </Form>
              </Card>
              </Col>
            </Row>
          </Card>
          </Col>
        </Row>
        </Container>
        </>
    );
}

export default AddDoctor;