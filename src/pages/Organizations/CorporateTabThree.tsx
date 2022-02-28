import { Col, Form, Row } from 'react-bootstrap';
import CommonInput from '../../Components/CommonInput';
import { OrgItemType } from '.'

const CorporateTabThree = (props) => {

    let { data = {} as OrgItemType, setTabOneStep, handleCreate } = props;

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

    return (
        <>
            <Form onSubmit={e => e.preventDefault()}>
                <h5>Admin User Details</h5>
                <span className='text-muted'>Please fill in the form below.</span>
                <Row className='mb-3'>
                    <Col md={6}>
                        <CommonInput name='FirstName' value={data.admin_user.FirstName} placeholder='First Name' />
                    </Col>
                    <Col md={6}>
                        <CommonInput name='LastName' value={data.admin_user.LastName} placeholder='Last Name' />
                    </Col>
                    <Col md={12}>
                        <CommonInput name='EmailAddress' value={data.admin_user.EmailAddress} placeholder='Email Address' />
                    </Col>
                </Row>
                <Form.Check checked={!!data.admin_user.agree} id='agree' label={<>
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
