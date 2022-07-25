import React from "react";
import "../Styles/DoctorsList.css";
import { Button, Col, Container ,Nav,Navbar, Row,Dropdown,Card,Form,Table} from "react-bootstrap";
import {IoMdNotifications} from "react-icons/io";
import {IoEyeOutline} from "react-icons/io5";

import {FiMessageSquare,FiPower} from "react-icons/fi";
import {FaBars,FaEdit} from "react-icons/fa";
import logo from "../../Assets/Ologo.png";
import user from "../../Assets/user.png";
import ReactHTMLTableToExcel from 'react-html-to-excel';

import {CgProfile} from "react-icons/cg";

function DoctorsList(){
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
            <Row className="justify-content-center mt-5">
                <Col md={10}>
                <Card>
                    <Row className="text-end mt-3 me-2">
                        <Col>
                        <Button variant="" className="add-doc-btn">Add Doctor</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card className="mt-2 m-3">
                            <Row className="m-2 mt-5">
                                <Col className="" md={9}>
                                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Doctors"
                    sheet="tablexls"
                    buttonText="Excel"/>
                                </Col>
                                <Col md={3}>
                                
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          Search
        </Form.Label>
        <Col sm="9">
          <Form.Control type="search" defaultValue="" />
        </Col>
      </Form.Group>
                                </Col>
                            </Row>


                            <Row className="m-2">
                                <Col>
                                    <Table striped bordered hover id="table-to-xls">
                                          <thead>
                                            <tr>
                                              <th>SR.NO</th>
                                              <th>DOCTOR ID</th>
                                              <th>DOCTOT NAME</th>
                                              <th>PATIENT COUNT</th>
                                              <th>PRACTICE NAME</th>
                                              <th>EMAIL</th>
                                              <th>PHONE</th>
                                              <th>STATUS</th>
                                              <th>ACTION</th>
                                            </tr>
                                          </thead>


                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>335</td>
                                              <td>RYTHM K</td>
                                              <td>1</td>
                                              <td>orthosquare</td>
                                              <td>rythmk@gmail.com</td>
                                              <td>7827864761</td>
                                              <td>Active</td>
                                              <td>




                                                
                                          
                                                    <span><Button variant="" className="action-i"><IoEyeOutline color="black"/></Button></span>
                                                   
                                                    <span><Button variant="" className="action-i"><FaEdit color="black"/></Button></span>
                                                   
                                              </td>

                                            </tr>




                                            
                                            <tr>
                                              <td>2</td>
                                              <td>365</td>
                                              <td>DIVYA N</td>
                                              <td>0</td>
                                              <td>orthosquare</td>
                                              <td>divyan@gmail.com</td>
                                              <td>9845364761</td>
                                              <td>Active</td>
                                              <td>
                                          
                                                    <span><Button variant="" className="action-i"><IoEyeOutline color="black"/></Button></span>
                                                   
                                                    <span><Button variant="" className="action-i"><FaEdit color="black"/></Button></span>
                                                   
                                              </td>

                                            </tr>


                                           <tr>
                                              <td>3</td>
                                              <td>385</td>
                                              <td>PREETI G</td>
                                              <td>1</td>
                                              <td>dental</td>
                                              <td>preetig@gmail.com</td>
                                              <td>7827809453</td>
                                              <td>Active</td>
                                              <td>
                                          
                                                    <span><Button variant="" className="action-i"><IoEyeOutline color="black"/></Button></span>
                                                   
                                                    <span><Button variant="" className="action-i"><FaEdit color="black"/></Button></span>
                                                   
                                              </td>

                                            </tr>
                                          </tbody>
                                        </Table>
                                </Col>
                            </Row>
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

export default DoctorsList;