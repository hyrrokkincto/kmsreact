import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CommonInput from '../../Components/CommonInput'
import { OrgItemType, OrgItemTypeListItem } from '.'

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

    let { data, setTabOneStep, setSelectedOrg }: { data: OrgItemTypeListItem, setTabOneStep: (num) => void, setSelectedOrg: (data) => void } = props;

    let countryList = [
        {
            "id": 1,
            "name": "United States",
            "code": "USA"
        }, {
            "id": 2,
            "name": "India",
            "code": "IN"
        }, {
            "id": 3,
            "name": "Canada",
            "code": "Canada"
        },
    ]

    const handleFormChange = (event: any, set?: string) => {
        switch (set?.split('.').length) {
            case 2: return setSelectedOrg(prev => ({ ...prev, [set?.split('.')[1]]: event.target.value }))
            case 3: return setSelectedOrg(prev => ({ ...prev, [set?.split('.')[1]]: { ...prev[set?.split('.')[1]], [set?.split('.')[2]]: event.target.value } }))
        }
    }

    return <>
        <Form>
            <h5>Customer Detail</h5>
            <span className='text-muted'>Please fill in the form below.</span>
            <CommonInput className='mt-3' name='CompanyName' value={data.name} onChange={(event) => handleFormChange(event, 'data.name')} placeholder='Company Name' />
            <CommonInput name='Name' value={data.admin_user.first_name} onChange={(event) => handleFormChange(event, 'data.admin_user.first_name')} placeholder='Name' />
            <CommonInput name='EmailAddress' value={data.email} onChange={(event) => handleFormChange(event, 'data.email')} placeholder='Email Address' />
            <CommonInput name='PhoneNumber' value={data.phone} onChange={(event) => handleFormChange(event, 'data.phone')} placeholder='Phone Number' />
            <CommonInput name='AddressLine1' value={data.address.line_1} onChange={(event) => handleFormChange(event, 'data.address.line_1')} placeholder='Address Line 1' />
            <CommonInput name='AddressLine2' value={data.address.line_2} onChange={(event) => handleFormChange(event, 'data.address.line_2')} placeholder='Address Line 2' />
            <Row className='mb-3'>
                <Col md={6}>
                    <CommonInput name='City' value={data.address.city} onChange={(event) => handleFormChange(event, 'data.address.city')} placeholder='City' required />
                </Col>
                <Col md={6}>
                    <CommonInput name='State' value={data.address.state} onChange={(event) => handleFormChange(event, 'data.address.state')} placeholder='State' required />
                </Col>
                <Col md={6}>
                    <CommonInput name='Postcode' value={data.address.postal_code} onChange={(event) => handleFormChange(event, 'data.address.postal_code')} placeholder='Postcode/Zip' />
                </Col>
                <Col md={6}>
                    {/* <CommonInput name='Country' value={data.Country} placeholder='Country' /> */}
                    <select name='Country' defaultValue={data.address.country} onChange={(event) => handleFormChange(event, 'data.address.country')} placeholder='Country'>
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