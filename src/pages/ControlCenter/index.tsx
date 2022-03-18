import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const ControlCenter = () => {

    return (
      <>
       <div className="page_header">
            <h1>Control Center</h1>
        </div>
        <div className="custom-container">
            <div className='control-center'>
                <Row>
                    <Col md={4}>
                        <h4>General</h4>
                    </Col>
                    <Col md={6}>
                        <div className='card'>
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div> 
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div> 
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h4>Desktop</h4>
                    </Col>
                    <Col md={6}>
                        <div className='card'>
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div> 
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' id='swich-enable' />
                                </div>
                            </div> 
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h4>Mobile</h4>
                    </Col>
                    <Col md={6}>
                        <div className='card'>
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div> 
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div> 
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div> 
                            <div className='row row-grid py-4 align-items-center'>
                                <div className='col-md-8'>
                                    Backup Data to Cloud  
                                </div>
                                <div className='col-md-4'>
                                    <Form.Switch className='custom-switch-green' checked={true} id='swich-enable' />
                                </div>
                            </div>  
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
      </>
    )
}

export default ControlCenter