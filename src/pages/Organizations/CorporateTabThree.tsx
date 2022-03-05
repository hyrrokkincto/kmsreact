import { Col, Form, Row } from 'react-bootstrap';
import CommonInput from '../../Components/CommonInput';
import { OrgItemTypeListItem } from '.'

const CorporateTabThree = (props) => {

    let { data, handleCreate, setTabOneStep, setSelectedOrg }: { data: OrgItemTypeListItem, setTabOneStep: (num) => void, handleCreate: () => void, setSelectedOrg: (data) => void } = props;

    let billing_code = [
        {
            "id": 1,
            "code": "xxxxxxxxxx"
        },
        {
            "id": 2,
            "code": "xxxxxxxxxx"
        }
    ]

    const handleFormChange = (event: any, set?: string) => {
        switch (set?.split('.').length) {
            case 2: return setSelectedOrg(prev => ({ ...prev, [set?.split('.')[1]]: event.target.value }))
            case 3: return setSelectedOrg(prev => ({ ...prev, [set?.split('.')[1]]: { ...prev[set?.split('.')[1]], [set?.split('.')[2]]: event.target.value } }))
        }
    }

    return (
        <>
            <Form onSubmit={e => e.preventDefault()}>
                <h5>Admin User Details</h5>
                <span className='text-muted'>Please fill in the form below.</span>
                <Row className='mb-3'>
                    <Col md={6}>
                        <CommonInput name='FirstName' value={data.admin_user.first_name} onChange={(event) => handleFormChange(event, 'data.admin_user.first_name')} placeholder='First Name' />
                    </Col>
                    <Col md={6}>
                        <CommonInput name='LastName' value={data.admin_user.last_name} onChange={(event) => handleFormChange(event, 'data.admin_user.last_name')} placeholder='Last Name' />
                    </Col>
                    <Col md={12}>
                        <CommonInput name='EmailAddress' value={data.admin_user.email_address} onChange={(event) => handleFormChange(event, 'data.admin_user.email_address')} placeholder='Email Address' />
                    </Col>
                </Row>
                <Form.Check checked={!!data.admin_user.agree} id='agree' onChange={(event) => setSelectedOrg(prev => ({ ...prev, admin_user: { ...prev.admin_user, agree: !!event.target.checked ? 1 : 0 } }))} label={<>
                    I agree to the <a href='/term-conditions'>Terms and conditions</a>
                </>} />
                <div className='FJCEAIC mt-5'>
                    <span role={'button'} onClick={() => setTabOneStep(2)} className='text-end d-block text-muted me-3'>{`<< Back`} </span>
                    <button className="btn btn-theme-primary me-3" onClick={handleCreate}>Create</button>
                </div>
            </Form>
        </>
    )
}

export default CorporateTabThree;
