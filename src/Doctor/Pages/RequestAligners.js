import React,{useState,useEffect} from "react";
import "../../Doctor/Styles/RequestAligners.css";
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
    Table,
    Modal
  } from "react-bootstrap";
  import DataTable from "react-data-table-component";
  // import "../Styles/AllocatedSetsList.css";
  import user from "../../Assets/user.png";
  import logo from "../../Assets/Logoremovebg.png";
  import { IoMdNotifications } from "react-icons/io";
  import { FiMessageSquare, FiPower } from "react-icons/fi";
  import { FaBars, FaEdit } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
  import { CgProfile } from "react-icons/cg";
  import Swal from "sweetalert2";
  import {LinkContainer} from 'react-router-bootstrap';
  

function RequestAligners(){
    const [showRequest, setShowRequest] = useState(false);

    const handleCloseRequest = () => setShowRequest(false);
    const handleShowRequest = () => setShowRequest(true);

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
  
    const [filteredNames, setFilteredNames] = useState([]);
  
    const tglContent = () => {
      let Menu = document.querySelector(".menuTab");
  
      if (Menu.classList.contains("collapsed")) {
        Menu.classList.remove("collapsed");
      } else {
        Menu.classList.add("collapsed");
      }
    };
    let DoctorName = sessionStorage.getItem("DocName");
  
    let DoctorUId = sessionStorage.getItem("DocUserId");


let apiurl=`https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientSetDoctorRequestlist/0/0/${DoctorUId}`


const [data, setData] = useState([])

const [requestSets, setRequestSets] = useState({
  PatientSetsId:"",
  PatientId:"",
  DoctorId:"",
  NoOfSets:0,
  TotalNoOfUpperSets:"",
  TotalNoOfLowerSets:"",
  DateOn:"",
  PatientTotalSetsId:"",
  TextForUpperAligners:"",
  TextForLowerAligners:""

})

const onChangeRequest=(e)=>{
  const newdata={...requestSets}
  newdata[e.target.name]=e.target.value;
  
  setRequestSets(newdata);
  console.log(newdata);
}

useEffect(()=>{
fetch(apiurl)
.then((res)=>res.json())
.then((reqlist)=>{
  console.log(reqlist.Data);
  setData(reqlist.Data);
  setFilteredNames(reqlist.Data)
})
},[])


    const columns = [
        {
          name: "Case No",
          selector: (row) => row.CaseNo,
          sortable: true,
          // center:true,
        },
        {
          id:"center",
          name: "Patient Name",
          selector: (row) => row.Name,
          sortable: true,
        },
        {
          id:"center",
          name: "Total No. of Sets",
          selector: (row) => row.NoOfSets,
        },
    
        // {
        //   id:"center",
        //   name: "Total Sets Allocated",
        //   selector: (row) => row.TotalNoOfSets,
        //   sortable: true,
        // },
       
        
        {
          id:"center",
          name:"Request for Aligners",
          cell: (row) => (
            <Button variant="" className="edit-patient-btn" onClick={()=>{
              handleShowRequest();
              setRequestSets((pre)=>{
                return{...pre,PatientSetsId:row.PatientSetsId,
                PatientId:row.PatientId,
                DoctorId:DoctorUId,
                PatientTotalSetsId:row.PatientTotalSetsId
                }
              })
            }}>
              Request
            </Button>
          ),
        }
    
        // {
        //   name: "Action",
        //   cell: (row) => (
        //     <button
        //       className="edit-patient-btn"
        //       onClick={() => {
        // RoleId==="1"? navigate(`/patient-details/${row?.PatientId}`):navigate(`/patient-details-doc/${row?.PatientId}`);
        // console.log(patient);
        // handleShow();
        // setSets((pre)=>{
        //   return{...pre,PatientSetsId:row.PatientSetsId,
        //   PatientId:row.PatientId,
        //   DoctorId:row.DoctorId
        //   }
        // })
        // console.log(sets);
        // }}
        //   >
        //     Allocate sets
        //   </button>
        // ),
        // },
    
        // {
        //   // name: `${RoleId==="1"?"Action":""}`,
        //   cell: row => RoleId==="1"? <button className="edit-patient-btn" onClick={()=>{navigate(`/payment/${row?.PatientId}`)
        // sessionStorage.setItem("Pid",row.PatientId)
        // }}>Payment</button>:""
        // }
      ];

      useEffect(() => {
        const result = data.filter((patientname) => {
          return patientname.Name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredNames(result);
      }, [search]);
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
              {/* <Nav.Link href="#deets">
                <IoMdNotifications
                  fontSize={30}
                  color="#C49358"
                  className="notification"
                />
              </Nav.Link> */}
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
                    {/* <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr /> */}
                    <Dropdown.Item href="#/action-2" onClick={() => navigate("/")}>
                      <FiPower fontSize={25} />
                      <span className="px-3" >
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
                <LinkContainer to={`/doctor-dashboard/${DoctorUId}`}>

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


      <Container fluid>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row
              className="mt-5 mb-5 p-2 p-md-5 pt-5 m-0 m-xs-1"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 15px  #C49358",
                borderRadius: "8px",
              }}
            >
              <Col>
                {/* {
                    setsDetails?.map((sets,i)=>{
                        return(
<>
<Row>
                    <Col>
                    <p>Patient Name :{sets.Name} </p>
                    </Col>
                    <Col>
                    <p>Case No : {sets.CaseNo}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>Total No. of Sets : {sets.TotalNoOfSets}</p>
                    </Col>
                    <Col>
                    <p>Sets Allocated : {sets.NoOfSets}</p>
                    </Col>
                </Row>
                <hr />
</>
                        )
                    })
                } */}

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
              </Col>
            </Row>
           
            










              <Modal show={showRequest} onHide={handleCloseRequest} centered>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="modal-lbl">Request Upper Aligners</Form.Label>
                    <Form.Control
                      type="text"
                      name="TotalNoOfUpperSets"
                      onChange={(e) => onChangeRequest(e)}
                      value={requestSets.TotalNoOfUpperSets}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Which Upper Aligners you want?</Form.Label>
                    <Form.Control
                      type="text"
                      name="TextForUpperAligners"
                      onChange={(e) => onChangeRequest(e)}

                      value={requestSets.TextForUpperAligners}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="modal-lbl">Request Lower Aligners</Form.Label>
                    <Form.Control
                      type="text"
                      name="TotalNoOfLowerSets"
                      onChange={(e) => onChangeRequest(e)}

                      value={requestSets.TotalNoOfLowerSets}
                      required
                    />
                  </Form.Group>


                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Which Lower Aligners you want?</Form.Label>
                    <Form.Control
                      type="text"
                      name="TextForLowerAligners"
                      onChange={(e) => onChangeRequest(e)}

                      value={requestSets.TextForLowerAligners}
                      required
                    />
                  </Form.Group>



                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="modal-lbl">Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="DateOn"
                      id="pass"
                      onChange={(e) => onChangeRequest(e)}

                      value={requestSets.DateOn}
                      required
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    type="submit"
                    variant=""
                    style={{
                      backgroundColor: "#C49358",
                      color: "white",
                    }}
                    onClick={(e)=>{
                      const reqUrl="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/AddSetsDoctorToAdmin";

          fetch(reqUrl,{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestSets),
           })
           .then((res)=>res.json())
           .then((request)=>{
            // console.log(request);
            console.log(request);
            if(request.status===true){
              Swal.fire({
                title:"Submitted Successfully!",
                icon:"success"
              })
            }

            setTimeout(() => {
              
               window.location.reload();
            }, 2000);
       
           })
                    }}
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
          </Col>
        </Row>
      </Container>
        </>
    );
}

export default RequestAligners;