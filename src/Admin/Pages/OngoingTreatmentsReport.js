import React,{useState,useEffect} from "react";
import "../Styles/OngoingTreatmentReport.css";
import {
    Container,
    Row,
    Col,
    Nav,
    Button,
    Navbar,
    Dropdown,
    Card,
    Badge,
  } from "react-bootstrap";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { FaBars } from "react-icons/fa";
  import { FiMessageSquare, FiPower } from "react-icons/fi";
  import {LinkContainer} from 'react-router-bootstrap';
  import {useNavigate,useParams} from "react-router-dom";
  import DataTable from "react-data-table-component";


function OngoingTreatmentsReport(){
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


const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);


  const [reports, setReports] = useState([])

  const url="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetPatientOngoingTreatmentReport/0/0/0";


  useEffect(()=>{
    fetch(url).then((res)=>res.json())
    .then((report)=>{
      console.log(report.Data);
      setReports(report.Data);
      setFilteredNames(report.Data);
    }) 
  },[])


const columns = [
    {
      name: "Patient Name",
      selector: (row) => row.PatientName,
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
    {
      name: "Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {
      name: "Total No. of Sets",
      selector: (row) => row.TotalSets,
      sortable: true,
    },
    {
      name: "Dispatched Sets",
      selector: (row) => row.DispatchedSets,
      sortable: true,
    },
    
    {
      name: "Delivered Sets",
      selector: (row) => row.DeliveredSets,

    },
    {
        name: "Pending Sets",
        selector: (row) => row.PendingSets,
  
      },
   
    // {
    //   // name: `${RoleId==="1"?"Action":""}`,
    //   cell: row => RoleId==="1"? <button className="edit-patient-btn" onClick={()=>{navigate(`/payment/${row?.PatientId}`)
    // sessionStorage.setItem("Pid",row.PatientId)
    // }}>Payment</button>:""
    // }
  ];


    useEffect(() => {
    const result = reports.filter((patientname) => {
      return patientname.DoctorName.toLowerCase().match(search.toLowerCase());
    });
    setFilteredNames(result);
  }, [search]);
    return(
        <>
         <Navbar collapseOnSelect expand="lg" className="navb">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="hover:scale-110" width={120} />
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
        <Row style={{ backgroundColor: "white" }} className="mt-5 mb-5 pb-5">
          <Col md={{ span: 12 }} xs={{ span: 12 }}>
            <Row>
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
                        placeholder="Search by Doctor"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      ></input>
                    }
                  />
               </Col>
               </Row>
           
          </Col>
        </Row>
      </Container>
        </>
    );
}

export default OngoingTreatmentsReport;