import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CommonInput from '../../Components/CommonInput'
import { OrgItemType } from '.'

// const CorporateTabOne = ({ data = {}, handleCorTabChange = () => { } }: { data: OrgItemType, handleCorTabControl: () => void }) => {
// const CorporateTabOne = (props) => {

//     let { data = {} as OrgItemType, handleCorTabChange } = props

//     let countryList = [
//         {
//             "id": 1,
//             "name": "United States",
//             "code": "USA"
//         }, {
//             "id": 2,
//             "name": "India",
//             "code": "IN"
//         },
//     ]

//     return (
//         <Form>
//             <h5>Customer Detail</h5>
//             <span className='text-muted'>Please fill in the form below.</span>
//             <CommonInput className='mt-3' name='CompanyName' value={data.CompanyName} placeholder='Company Name' />
//             <CommonInput name='Name' value={data.Name} placeholder='Name' />
//             <CommonInput name='EmailAddress' value={data.EmailAddress} placeholder='Email Address' />
//             <CommonInput name='PhoneNumber' value={data.PhoneNumber} placeholder='Phone Number' />
//             <CommonInput name='AddressLine1' value={data.AddressLine1} placeholder='Address Line 1' />
//             <CommonInput name='AddressLine2' value={data.AddressLine2} placeholder='Address Line 2' />
//             <Row className='mb-3'>
//                 <Col md={6}>
//                     <CommonInput name='City' value={data.City} placeholder='City' required />
//                 </Col>
//                 <Col md={6}>
//                     <CommonInput name='State' value={data.State} placeholder='State' required />
//                 </Col>
//                 <Col md={6}>
//                     <CommonInput name='Postcode' value={data.Postcode} placeholder='Postcode/Zip' />
//                 </Col>
//                 <Col md={6}>
//                     {/* <CommonInput name='Country' value={data.Country} placeholder='Country' /> */}
//                     <select name='Country' defaultValue={data.Country} placeholder='Country'>
//                         <option defaultChecked hidden>--Select--</option>
//                         {!!countryList && countryList.length ? countryList.map(coun => <option value={coun}>{coun.name}</option>) : <></>}
//                     </select>
//                 </Col>
//             </Row>
//             <span role={'button'} onClick={() => handleCorTabChange(2)} className='text-end d-block text-theme'>{`Next >>`} </span>
//         </Form >
//     )
// }

// export default CorporateTabOne;


const CorporateTabOne = (props) => {

    let { data = {} as OrgItemType, setTabOneStep } = props;

    let countryList = [
        {
            "id": 1,
            "name": "United States",
            "code": "USA"
        }, {
            "id": 2,
            "name": "India",
            "code": "IN"
        },
    ]
    return <>
        <Form>
            <h5>Customer Detail</h5>
            <span className='text-muted'>Please fill in the form below.</span>
            <CommonInput className='mt-3' name='CompanyName' value={data.CompanyName} placeholder='Company Name' />
            <CommonInput name='Name' value={data.Name} placeholder='Name' />
            <CommonInput name='EmailAddress' value={data.EmailAddress} placeholder='Email Address' />
            <CommonInput name='PhoneNumber' value={data.PhoneNumber} placeholder='Phone Number' />
            <CommonInput name='AddressLine1' value={data.AddressLine1} placeholder='Address Line 1' />
            <CommonInput name='AddressLine2' value={data.AddressLine2} placeholder='Address Line 2' />
            <Row className='mb-3'>
                <Col md={6}>
                    <CommonInput name='City' value={data.City} placeholder='City' required />
                </Col>
                <Col md={6}>
                    <CommonInput name='State' value={data.State} placeholder='State' required />
                </Col>
                <Col md={6}>
                    <CommonInput name='Postcode' value={data.Postcode} placeholder='Postcode/Zip' />
                </Col>
                <Col md={6}>
                    {/* <CommonInput name='Country' value={data.Country} placeholder='Country' /> */}
                    <select name='Country' defaultValue={data.Country} placeholder='Country'>
                        <option defaultChecked hidden>--Select--</option>
                        {!!countryList && countryList.length ? countryList.map(coun => <option value={coun.code}>{coun.name}</option>) : <></>}
                    </select>
                </Col>
            </Row>
            <span role={'button'} onClick={() => setTabOneStep(2)} className='text-end d-block text-theme'>{`Next >>`} </span>
        </Form >
    </>
}

export default CorporateTabOne