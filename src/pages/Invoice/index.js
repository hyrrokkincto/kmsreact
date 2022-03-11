import React from 'react' 
import { Card, Col, Image, Row, Table } from 'react-bootstrap'
import * as Feather from 'react-feather';
import { Link } from 'react-router-dom' 
const Invoice = () =>{

    return (
      <>
         <div className="page_header">
                <h1>Invoice</h1>
            </div>  
            <div className='app-main-inner'>
                <div className='inner-wrapper'>
                    <div className='invoive-wrapper'> 
                        <div className='print-button my-4 text-center'>
                            <Link to="#"><Feather.Printer /> Print</Link>
                            <Link to="#"><Feather.Download /> Download</Link> 
                        </div>
                        <Row className='justify-content-center'>
                            <Col sm={12} md={12} lg={12} xl={8}>
                                <Card>
                                    <div className='invoice-header'>
                                        <Row>
                                            <Col md={7}>
                                                <Image src={process.env.PUBLIC_URL + '/assets/img/invoice-logo.png'} alt='Logo'  className='img-fluid mb-5'></Image> 
                                                <h6>Date: </h6>
                                                <p>15 Nov, 2021</p>
                                            </Col>
                                            <Col md={5}>
                                                <h3>Invoice</h3>
                                                <h6>Invoice Number:</h6>
                                                <p>123456789</p>
                                                <h6>Contract ID</h6>
                                                <p>2022-abc-1</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Card.Body>
                                        <div className='invoice-content'>
                                            <Row>
                                                <Col md={7}>
                                                    <div className='inv-address'>
                                                        <h4>Bill To:</h4>
                                                        <p>xxxxxxxxxxxxxx <br/>
                                                        241, Manor Dr.<br/>
                                                        Foundation Valley, CA 92708<br/>
                                                        United States
                                                        </p>
                                                    </div>
                                                    <div className='tax mt-4'>
                                                        <h4>Tax Number:</h4>
                                                        <span>123457896  US0001</span>
                                                    </div>
                                                </Col>
                                                <Col md={5}>
                                                    <div className='inv-address'>
                                                        <h4>Bill From:</h4>
                                                        <p>xxxxxxxxxxxxxx <br/>
                                                        241, Manor Dr.<br/>
                                                        Foundation Valley, CA 92708<br/>
                                                        United States
                                                        </p>
                                                    </div>
                                                    <div className='tax mt-4'>
                                                        <h4>Tax Number:</h4>
                                                        <span>123457896  US0001</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                    <div className='item-table'>
                                        <Table responsive="sm" borderless>
                                            <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Cost</th>
                                                    <th>QTY</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Swarm (Commercial License)</td>
                                                    <td><b>$99.00 </b></td>
                                                    <td><b>1</b></td>
                                                    <td><b>$99</b></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={3}>
                                                        <div class="b-line"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={2}>Subtotal</td> 
                                                    <td>$99</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={2}>Discount <span class="text-muted">(New Year)</span></td> 
                                                    <td>$-9</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={2}>Sales Tax <span>(8%)</span></td> 
                                                    <td>$8</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={2}><b>Invoice Total</b></td> 
                                                    <td><b>$100</b></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={3}><div class="b-line"></div></td> 
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan={2}><strong>Amount Due</strong></td> 
                                                    <td><strong>$0.00 USD</strong></td>
                                                </tr>
                                            </tbody>
                                        </Table> 
                                    </div>
                                    <div className='invoice-footer pb-4'>
                                        <h6><b>Payment Status</b></h6>
                                        <p>Not Paid</p>
                                        <h6><b>Payment Advice:</b></h6>
                                        <p>Please pay to this bank account no:</p>
                                        <h6><b>Detail 1</b></h6>
                                        <h6><b>Detail 2</b></h6>
                                    </div> 
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div> 
            </div>
      </>
    )
}
export default Invoice