import React,{useState,useEffect} from "react";
import "../../Admin/Styles/RequestList.css";
import {Row,Col,Container,Nav,Dropdown,Card,Navbar,Button,Form,Modal} from "react-bootstrap";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Male from "../../Assets/Male.png";
// import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Swal from "sweetalert2";


function  RequestList(){
    const tglContent = () => {
        let Menu = document.querySelector(".menuTab");
    
        if (Menu.classList.contains("collapsed")) {
          Menu.classList.remove("collapsed");
        } else {
          Menu.classList.add("collapsed");
        }
      };

      const navigate=useNavigate();

let AdminName=sessionStorage.getItem("DocName")
let doctorId=sessionStorage.getItem("DocUserId")

const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);




  const [requests, setRequests] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const [sets, setSets] = useState({
    PatientId:"",
    TotalNoOfUpperSets:"",
    TotalNoOfLowerSets:"",

    PatientSetsId:"",
   
    DoctorId:0,
   
    DateOn:0
  });

  const onChangeSets=(e)=>{
  

    const newdata={...sets}
    newdata[e.target.name]=e.target.value;
    
    setSets(newdata);
   

    console.log(newdata);
    // console.log(sets);
  }


  const handleSets=(e)=>{
    e.preventDefault();
    const SetsUrl="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/AddPatientTotalSetsAdmintToDoctor";
    

    // setSets(pre=>{
    //   return{...pre,PatientId:patient[0]?.PatientId}
    // })

    // let colid=document.getElementById("totalSet");

    
    fetch(SetsUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sets),
    })
      .then((res) => res.json())
      .then((result)=>{
        console.log(result);
        if(result.status===true){
          Swal.fire({
            title: "Uploaded Successfully!",
            // text: 'Do you want to continue',
            icon: "success",
            // confirmButtonText: 'Cool'
          });
          // colid.style.display="none"
        }
      })
      console.log(sets);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
  }

  const url = "https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientSetsDoctorToAdminlist/0/0";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((reqData) => {
        console.log(reqData.Data);
        setRequests(reqData.Data);
        setFilteredNames(reqData.Data);
      });
  }, []);


    const columns = [
        {
          name: "Patient Name",
          selector: (row) => row.Name,
          sortable: true,
        },
        // {
        //   name: "CaseNo",
        //   selector: (row) => row.CaseNo,
        //   sortable: true,
        // },
        // {
        //   name: "Name",
        //   selector: (row) => row.Name,
        // },
        // {
        //   name: "Doctor Name",
        //   selector: (row) => row.DoctorName,
        //   sortable: true,
        // },
        {
          name: "Upper Aligners",
          selector: (row) => row.TotalNoOfUpperSets,
          sortable: true,
        },
        {
          name: "Lower Aligners",
          selector: (row) => row.TotalNoOfLowerSets,
          sortable: true,
        },
        {
            // id:"center",
            name:"Send to doctor",
            cell: (row) => (
              <Button variant="" className="edit-patient-btn" onClick={()=>{
                handleShow()
                setSets((pre)=>{
                  return{...pre,
                  PatientId:row.PatientId,
                  PatientSetsId:row.PatientSetsId
                  }
                })
              }}
              >
                Send
              </Button>
            ),
          },
      
        // {
        //   name: "Total Sets",
        //   selector: (row) => row.TotalNoOfSets,
    
        // },
        // {
        //     name: "Pending Sets",
        //     // selector: (row) => row.PendingSets,   
      
        //   },
       
        // {
        //   // name: `${RoleId==="1"?"Action":""}`,
        //   cell: row => RoleId==="1"? <button className="edit-patient-btn" onClick={()=>{navigate(`/payment/${row?.PatientId}`)
        // sessionStorage.setItem("Pid",row.PatientId)
        // }}>Payment</button>:""
        // }
      ];
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
              <Nav.Link href="">
      {/* <Dropdown>
      <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user noti-d"
                  >
                   <IoMdNotifications
                  fontSize={35}
                  color="#C49358"
                  className="notification"
                /><Badge bg="secondary" className="badge-p">{notifyData?.TotalNotification}</Badge>

                  </Dropdown.Toggle>


                  <Dropdown.Menu className="noti-menu">
                  
                   {
                   
                    notifyData.Data?.map((noti)=>{
                      return(
                        <>
                        <Row className="m-1">
                          <Col>
                           <BsDot fontSize={40} color="green"/><span onClick={()=>{
                            if(noti?.NotificationType==="Add New Patient"){

                              navigate(`/patient-list/${0}`)
                            }

                            if(noti?.NotificationType==="Video rejected"){
                              navigate("/video-reject")
                            }
                           }}>{noti?.Notification}</span><span><Button variant="" style={{transform:"translateY(-0.2em)"}} onClick={()=>{

                            // console.log(noti.NotificationId);
                            const notifUrl="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/ReadNotification"

                            let notifId={
                              NotificationId:noti.NotificationId
                            };
                            fetch(notifUrl,{
                              method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notifId),
                            })
                            .then((res)=>res.json())
                            .then((result)=>{
                              console.log(result);
                              console.log("Id sent");
                            })
                           }}><BsTrash color="red"/></Button></span>
                          </Col>
                        </Row>
                        {notifyData?.TotalNotification>1?<Dropdown.Divider/>:""}
                        </>
                      );
                    })
                   }




                  </Dropdown.Menu>
      </Dropdown> */}
                

              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare
                  fontSize={30}
                  color="#C49358"
                  className="me-2 notification"
                />
              </Nav.Link> */}
              <span className="address mx-3 m-0">
                <img src={user} alt="" width={35} className="mt-2" />
              </span>
              <Nav.Link href="#deets" className="p-0 mt-1">
                <Dropdown className="out-dd mt-2">
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                   {AdminName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr /> */}
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={()=>{
                        navigate("/");
                        sessionStorage.removeItem("Role");
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
                <LinkContainer to={`/admin-dashboard`}>

                  <Nav.Link className="doc-tab active">
                  Dashboard
                  </Nav.Link>
                </LinkContainer>
                {/* <Nav.Link href="#deets" className="prof-tab">
                  Profile
                </Nav.Link> */}
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container>

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


<Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Upper Aligners</Form.Label>
                    <Form.Control
                      type="text"
                      name="TotalNoOfUpperSets"
                      onChange={(e) => onChangeSets(e)}
                      value={sets.TotalNoOfUpperSets}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Lower Aligners</Form.Label>
                    <Form.Control
                      type="text"
                      name="TotalNoOfLowerSets"
                      onChange={(e) => onChangeSets(e)}
                      value={sets.TotalNoOfLowerSets}
                      required
                    />
                  </Form.Group>
                  {/* <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="DateOn"
                      id="pass"
                    //   onChange={(e) => onChangeSets(e)}
                      value={sets.DateOn}
                      required
                    />
                  </Form.Group> */}
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    type="submit"
                    variant=""
                    style={{
                      backgroundColor: "#C49358",
                      color: "white",
                    }}
                    onClick={(e)=>handleSets(e)}
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
                </Col>
              </Row>
            
            </Col>
          </Row>
        </Container>
        </>
    );
}


export default RequestList;