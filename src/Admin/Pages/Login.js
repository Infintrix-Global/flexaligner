import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  Card,
  Form,
} from "react-bootstrap";
import "../Styles/Login.css";
import logo from "../../Assets/Logo.jpg";
import {useNavigate} from "react-router-dom";

function Login() {
  const [validated, setValidated] = useState(false);

const [data, setData] = useState({
Username:"",
Password:""
})


const handle=(e)=>{
  const newdata={...data}
  newdata[e.target.name]=e.target.value;
  setData(newdata);
  console.log(newdata);
}

const url="http://infintrix.in/FlexAlignApi/FlexAlign.svc/VerifyLogin";


const navigate=useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
   
    fetch(url,{
      method:"POST",
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res)=>res.json()).then((result)=>{
      console.log(result.Data[0].RoleId);
      if(result.Data[0].RoleId==="1"){
        navigate("/view-doctors")
      }else if(result.Data[0].RoleId==="2"){
        navigate("/add-patient")
      }
    })


  
    

  };


  // var details = {
  //   'userName': "Doctor",
  //   'password': "Doctor@123",
  //   'grant_type': 'password'
  //   };
    
  //   var formBody = [];
  //   for (var property in details) {
  //   var encodedKey = encodeURIComponent(property);
  //   var encodedValue = encodeURIComponent(details[property]);
  //   formBody.push(encodedKey + "=" + encodedValue);
  //   }
  //   formBody = formBody.join("&");
    
  //   fetch(url, {
  //   method: 'POST',
  //   headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: formBody
  //   })

  
  // };

 



  return (
    <>
      <Container fluid>
        <Stack direction="horizontal" gap={3} className="mt-3">
          <Button variant="link" className="ms-auto acc-btn action-i">
            Don't have an account?
          </Button>
          <Button variant="" className="sup-btn">
            Sign up
          </Button>
        </Stack>

        <Row className="mt-5">
          <Col md={4} className="mx-auto">
            <Card body className="pt-3 pb-3 mt-5" style={{boxShadow: "0px 0px 15px  #C49358"}}>
              <Row className="text-center">
                <Col>
                  <img src={logo} alt="" className="" height={150} width={150}/>
                </Col>
              </Row>
              <Row className="text-center mt-4">
                <Col>
                  <p className="log-text">Login</p>
                </Col>
              </Row>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mt-3 m-3">
                  <Col>
                    <Form.Group controlId="validationCustom01">
                      <Form.Label>UserName</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter UserName"
                        name="Username"
                        // id="Email"
                        onChange={(e)=>handle(e)}
                        value={data.Email}
                        className="p-2"
                      />
                      <Form.Control.Feedback type="invalid">Enter Username!</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="mt-3">
                      <Col>
                        <Form.Group controlId="validationCustom02">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            required
                            type="password"
                            name="Password"
                            // id="Password"
                        onChange={(e)=>handle(e)}

                            value={data.Password}
                            placeholder="Enter Password"
                            className="p-2"
                          />
                          <Form.Control.Feedback type="invalid">
                            Enter Password!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <Button type="submit" variant="" className="sup-btn">Sign in</Button>
                      </Col>
                      <Col className="text-end">
                      <Button variant="link" className="ms-auto acc-btn action-i">
            Forgot Password?
          </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
