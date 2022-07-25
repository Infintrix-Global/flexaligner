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
import logo from "../../Assets/Ologo.png";

function Login() {
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
            <Card body className="pt-3 pb-3 mt-5">
              <Row className="text-center">
                <Col>
                  <img src={logo} alt="" className="" />
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
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Email"
                        className="p-2"
                      />
                      <Form.Control.Feedback type="invalid">Enter Email Address!</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="mt-3">
                      <Col>
                        <Form.Group controlId="validationCustom02">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            required
                            type="Password"
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
