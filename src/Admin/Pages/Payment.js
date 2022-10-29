import React from "react";
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
  } from "react-bootstrap";
  import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import $ from "jquery";

function Payment(){
  const navigate = useNavigate();
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
            <Row  className="text-center">
                <Col>
                <p className="pt-3" style={{fontWeight:"500"}}>Total Amount: </p>
                </Col>
                <Col>
                <p className="pt-3" style={{fontWeight:"500"}}>Balance: </p>
                </Col>
            </Row>
            <Row
              className="mt-3 mb-5 p-5 pt-5"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 15px  #C49358",
                borderRadius: "8px",
              }}
            >
             <Col>
             <Form.Check type="radio" aria-label="radio 1" name="payment" label="Electronic Transfers" value="1" style={{float:"right"}}/>
             </Col>
             <Col>
             <Form.Check type="radio" aria-label="radio 1" name="payment" label="Cheque" value="2"/>
             </Col> 
            <hr className="mt-3"/>

            <Row className="justify-content-center desc" id="pay1" style={{display:"none"}}>
                <Col md={10}>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Transaction Id</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mode</Form.Label>
                            <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="" />
                          </Form.Group>
                        </Col>
                    </Row>

                    
              
                </Col>
                <Row className="text-center mt-4">
                <Col>
                <Button variant="" type="submit" style={{backgroundColor:"rgb(196, 147, 88)",color:"White"}}>Submit</Button>
                </Col>
              </Row>
            </Row>








            <Row className="justify-content-center desc" id="pay2" style={{display:"none"}}>
                <Col md={10}>
                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name of Bank</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cheque No.</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dated</Form.Label>
                            <Form.Control type="date" placeholder="" />
                          </Form.Group>
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Deposit Date</Form.Label>
                            <Form.Control type="date" placeholder="" />
                          </Form.Group>
                    </Col>
                   </Row>

                    
              
                </Col>
                <Row className="text-center mt-4">
                <Col>
                <Button variant="" type="submit" style={{backgroundColor:"rgb(196, 147, 88)",color:"White"}}>Submit</Button>
                </Col>
              </Row>
            </Row>


            </Row>

            
              


          </Col>
        </Row>
      </Container>
        </>
    );
}


export default Payment;