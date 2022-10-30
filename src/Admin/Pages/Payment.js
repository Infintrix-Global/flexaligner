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
// import { useEffect } from "react";

function Payment(){
  const navigate = useNavigate();

  const PId=sessionStorage.getItem("Pid")
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



  const [Pmode, setPmode] = useState([])
  const modeUrl="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/GetElectronicTransfersModeList";

  useEffect(()=>{
    fetch(modeUrl).then((res)=>res.json())
    .then((mode)=>{
      console.log(mode.Data);
      setPmode(mode.Data)
    })
  },[])





  const [payDetails, setpayDetails] = useState({
    PatientId:PId,
    DocotrId:0,
    PaymentDate:"",
    PaymentMode:"",
    ElectronicTransfersId:"",
    TransactionNo:"",
    NameOfBank:"",
    ChequeNo:"",
    DepositDate:"",
    BranchName:"",
    PayAmount:"",
    CreateBy:1,
    
  })

  const handle=(e)=>{
    const newdata={...payDetails}
    newdata[e.target.name]=e.target.value;
    
    setpayDetails(newdata);
    console.log(newdata);

    var mode_select = document.querySelector("#selMode");
    var mode_id = mode_select.options[mode_select.selectedIndex].getAttribute('code');

    console.log(mode_id);

    setpayDetails((pre)=>{
      return{...pre,ElectronicTransfersId:mode_id}
    })

    console.log(payDetails);
  }


 




  const ETSubmit=(e)=>{
    e.preventDefault();

   const subUrl="https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/AddPatientPayment";
   
  //  setpayDetails((pre)=>{
  //   return{...pre,PatientId:PId}
  //  })

   console.log(payDetails);
   fetch(subUrl,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payDetails),
  }).then((res)=>res.json())
  .then((result)=>{
    console.log(result);
    console.log(payDetails);
  })

  }

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
                            <Form.Control type="text" placeholder="" name="PayAmount" value={payDetails.PayAmount} onChange={(e)=>handle(e)}/>
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Transaction Id</Form.Label>
                            <Form.Control type="text" placeholder="" name="TransactionNo" value={payDetails.TransactionNo} onChange={(e)=>handle(e)}/>
                          </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mode</Form.Label>
                            <Form.Select aria-label="Default select example" name="PaymentMode" id="selMode" value={payDetails.PaymentMode} onChange={(e)=>handle(e)}>
                              
                          <option selected>Select Payment Mode</option>

                          {Pmode.map((m)=>{
                           
                            return(

                            <option code={m.ElectronicTransfersId} >{m?.ModeName}</option>
                          )})
}
                        </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="" name="PaymentDate" value={payDetails.PaymentDate} onChange={(e)=>handle(e)} />
                          </Form.Group>
                        </Col>
                    </Row>

                    
              
                </Col>
                <Row className="text-center mt-4">
                <Col>
                <Button variant="" type="submit" style={{backgroundColor:"rgb(196, 147, 88)",color:"White"}} onClick={(e)=>ETSubmit(e)}>Submit</Button>
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