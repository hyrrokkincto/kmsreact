import React, { useEffect, useState } from "react";
import { Col, Form, Row } from 'react-bootstrap'
import ControlCenterConfigData from "../../Config/ControlCenterConfig.json" 
export interface ControlCenterListItem {
    general: GeneralListItem[];
    desktop: DesktopListItem[];
    mobile: MobileListItem[];
}

export interface GeneralListItem {
    code: string;
    name: string;
    menu: string;
    order: number;
    value: number;
}

export interface DesktopListItem {
    code: string;
    name: string;
    menu: string;
    order: number;
    value: number;
}

export interface MobileListItem {
    code: string;
    name: string;
    menu: string;
    order: number;
    value: number;
} 
const ControlCenter = () => {
   
    const [GeneralList, setGeneralList] = useState([] as GeneralListItem[]);
    const [DesktopList, setDesktopList] = useState([] as DesktopListItem[]);
    const [MobileList, setMobileList] = useState([] as MobileListItem[]);
    const [ControlCenterList, setControlCenterList] = useState({} as ControlCenterListItem[]);

    useEffect(() => {
        // ... your initial api call inside here

        setGeneralList(ControlCenterConfigData.general);
        setDesktopList(ControlCenterConfigData.desktop);
        setMobileList(ControlCenterConfigData.mobile);
    },
        []
    );
    const onSwitchAction = (code) => {
        alert(code);
        //Call PostAPI (to save a setting change):
    }; 
    return (
        <>
            <div className="page_header">
                <h1>Control Center</h1>
            </div>
            <div className="custom-container">
                <div className='control-center'>
                    <Row>
                        <Col md={2}>
                            <h4>General</h4>
                        </Col>
                        <Col md={8}>
                            <div className='card'>
                                {
                                    !!GeneralList && GeneralList.length ? (
                                        GeneralList.map((row, index) => {
                                            return <>
                                                <div className='row row-grid py-2 align-items-center'>
                                                    <div className='col-md-8'>
                                                        {row.name}
                                                    </div> 
                                                    
                                                    <div className='col-md-4'>
                                                        {/* <Form.Check type="switch" className='custom-switch-green'
                                                            defaultChecked={row.value ? true : false}
                                                            id={row.code}
                                                            onClick={() => onSwitchAction(row.code)}
                                                        /> */}
                                                        <div className="custom-check">
                                                            <input type="checkbox" id={row.code} className="d-none custom-checkbox" defaultChecked={row.value ? true : false} />
                                                        <label htmlFor={row.code}  onClick={() => onSwitchAction(row.code)}  className="toggle"><span></span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        })
                                    ) : <>
                                        No data found
                                    </>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <h4>Desktop</h4>
                        </Col>
                        <Col md={8}>
                            <div className='card'>
                                {
                                    !!DesktopList && DesktopList.length ? (
                                        DesktopList.map((row, index) => {
                                            return <>
                                                <div className='row row-grid py-2 align-items-center'>
                                                    <div className='col-md-8'>
                                                        {row.name}
                                                    </div>
                                                    <div className='col-md-4'>
                                                    <div className="custom-check">
                                                            <input type="checkbox" id={row.code} className="d-none custom-checkbox" defaultChecked={row.value ? true : false} />
                                                        <label htmlFor={row.code}  onClick={() => onSwitchAction(row.code)}  className="toggle"><span></span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        })
                                    ) : <>
                                        No data found
                                    </>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <h4>Mobile</h4>
                        </Col>
                        <Col md={8}>
                            <div className='card'>
                                {
                                    !!MobileList && MobileList.length ? (
                                        MobileList.map((row, index) => {
                                            return <>
                                                <div className='row row-grid py-2 align-items-center'>
                                                    <div className='col-md-8'>
                                                        {row.name}
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <div className="custom-check">
                                                            <input type="checkbox" id={row.code} className="d-none custom-checkbox" defaultChecked={row.value ? true : false} />
                                                        <label htmlFor={row.code}  onClick={() => onSwitchAction(row.code)}  className="toggle"><span></span></label>
                                                        </div>
                                                    </div> 
                                                </div> 
                                            </>
                                        })
                                    ) : <>
                                        No data found
                                    </>
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default ControlCenter