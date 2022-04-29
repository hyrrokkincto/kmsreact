import { Button, Card, Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row } from 'react-bootstrap' ;
import * as Feather from 'react-feather' ; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'moment-timezone';
import AverageProtectedHours from '../DataRiskComponent/AverageProtectedHours';
import AverageUnProtectedHours from '../DataRiskComponent/AverageUnProtectedHours';
 import TotalProtectedHours from '../DataRiskComponent/TotalProtectedHours';
import TotalUnProtectedHours from '../DataRiskComponent/TotalUnProtectedHours';
import { useState } from 'react';
  
const DataRisk = () =>{ 
    // const [startDate, setStartDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
    return (
      <> 
         <div className="page_header d-block">
             <Row className='align-items-center'>
                 <Col md={6}>
                 <h1>Data Risk</h1>
                 </Col>
                 <Col md={6} className='text-end'>
                    <Button variant="dark" className='btn-download mx-2'><Feather.Download /></Button>
                    <Dropdown className='d-inline mx-2'>
                        <Dropdown.Toggle variant="dark" className='border-radius-25 px-4 h-45 line-height-32' id="dropdown-basic">
                            Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Button href="#" variant="dark" className='border-radius-25 px-4 mx-2 h-45 line-height-32 text-white'><Feather.Plus /> Add</Button>
                 </Col>
             </Row> 
        </div>
        <div className='app-main-inner'> 
            <Container>
               <div className="custom-search mb-5">
                   <Row>
                       <Col md={8}>
                       <InputGroup className="mb-3">
                            <DropdownButton
                            variant="outline-secondary"
                            title="Filters"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <FormControl aria-label="Text input with dropdown button" placeholder="Search Information" /><Feather.Search />
                        </InputGroup>
                       </Col>
                       <Col>
                       <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange 
    />
                       {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                       {/* <FormControl  type='date' className='form-control' /> */}
                       </Col>
                   </Row> 
                 </div> 

        <Row xs={1} md={2} className="g-4"> 
                <Col>
                <Card className="card-analysis"> 
                    <Card.Body> 
                        <Card.Title className='orange'>Total Protected Hours</Card.Title>
                    <TotalProtectedHours />
                    </Card.Body>
                </Card>
                </Col> 
                <Col>
                <Card className="card-analysis"> 
                    <Card.Body>
                    <Card.Title className='blue'>Average Protected Hours</Card.Title>
                    <AverageProtectedHours />
                    </Card.Body>
                </Card>
                </Col> 
                <Col>
                <Card className="card-analysis"> 
                    <Card.Body>
                    <Card.Title className='red'>Total Unprotected Hours</Card.Title>
                        <TotalUnProtectedHours /> 
                    </Card.Body>
                </Card>
                </Col> 
                <Col>
                <Card className="card-analysis"> 
                    <Card.Body>
                    <Card.Title className='green'>Average unprotected Hours</Card.Title>
                        <AverageUnProtectedHours />
                    </Card.Body>
                </Card>
                </Col> 
            </Row>
            </Container>
        </div> 
            </>
    )
}
export default DataRisk  