import React, { useRef } from "react";
import { Col, Row ,Form,Container,Card, Button} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";


function Ipr(){
    const ref = useRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [21,9]
    };
    return(
        <>
        <Container fluid>
            <Row className="text-end mt-3">
                <Col>
                <ReactToPdf targetRef={ref} filename="IPR.pdf" options={options}>
        {({toPdf}) => (
            <Button onClick={toPdf} variant="" className="btn btn-outline-dark">Download</Button>
        )}
    </ReactToPdf>
                </Col>
            </Row>
            <Card className="mt-3" ref={ref}>
                <Row className="m-3">
                    <Col>
                        <p className="fs-3">Please Do This Striping Before Giving The First Aligner</p>
                        <Row style={{backgroundColor:"white"}}>
                            <Col>
                            <table className="mt-3">
                                                        <tbody>
                                                          <tr>
                                                            <td></td>
                                                            <td>
                                                              <div>
                                                                18
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                        
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                17
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                16
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                15
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                14
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                13
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                12
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                11
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                21
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                22
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                23
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                24
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                25
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                26
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                27
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                28
                                                                <br />
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{ padding: "0px 8px" }}>
                                                              R
                                                            </td>
                                                            <td colspan="16">
                                                              <hr
                                                                className="hrrl"
                                                                style={{
                                                                  borderTop:
                                                                    "margin-top: 25px; margin-bottom:0px;",
                                                                }}
                                                              />
                                                            </td>
                                                            <td style={{ padding: "0px 8px" }}>
                                                              L
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td></td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                48
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                47
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                46
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                45
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                44
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                43
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                42
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                41
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                31
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                32
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                33
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                34
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                35
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                36
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                  
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                37
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div>
                                                                <Form.Control
                                                                type="text"
                                                                  aria-label="option 1"
                                                                 
                                                                  name="DoNotMoveTheseTeeth"
                        
                                                                />
                                                                38
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col md={8}>
                            <Card className="p-4">
                    
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><b>ADDITIONAL INSTRUCTIONS (IF ANY)</b></Form.Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>
                            </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Container>
        </>
    );
}


export default Ipr;