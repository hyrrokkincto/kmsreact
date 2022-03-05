import { Form } from 'react-bootstrap';
import CommonInput from '../../Components/CommonInput';
import { OrgItemType, OrgItemTypeListItem } from '.'

const CorporateTabTwo = (props) => {

    let { data, setTabOneStep, setSelectedOrg }: { data: OrgItemTypeListItem, setTabOneStep: (num) => void, setSelectedOrg: (data) => void } = props;

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
            <Form>
                <h5>Customer Detail</h5>
                <span className='text-muted'>Please fill in the form below.</span>
                <div className='FJCBAIC mt-4'>
                    <b>Billing Code</b>
                    <select name='Country' className='w-50 mb-0' defaultValue={data.license.billingCode} onChange={(event) => handleFormChange(event, 'data.license.billingCode')} placeholder='Country'>
                        <option defaultChecked hidden>--Select--</option>
                        {!!billing_code && billing_code.length ? billing_code.map(coun => <option value={coun.code}>{coun.code}</option>) : <></>}
                    </select>
                </div>
                <div className='FJCBAIC mt-4'>
                    <b>License Expiry Date</b>
                    <CommonInput className='w-50 mb-0' type='date' name='LicenseExpiryDate' value={data.license.expiryDate} onChange={(event) => handleFormChange(event, 'data.license.expiryDate')} />
                </div>
                <div className='FJCBAIC mt-4'>
                    <b>User License count</b>
                    <CommonInput className='w-50 mb-0' type='number' name='UserLicenseCount' value={data.license.userLicenseCount} onChange={(event) => handleFormChange(event, 'data.license.userLicenseCount')} />
                </div>
                <div className='FJCBAIC mt-4'>
                    <b>Device License Count</b>
                    <CommonInput className='w-50 mb-0' type='number' name='DeviceLicenseCount' value={data.license.deviceLicenseCount} onChange={(event) => handleFormChange(event, 'data.license.deviceLicenseCount')} />
                </div>
                <div className='FJCEAIC mt-4'>
                    <span role={'button'} onClick={() => setTabOneStep(1)} className='text-end d-block text-muted me-3'>{`<< Back`} </span>
                    <span role={'button'} onClick={() => setTabOneStep(3)} className='text-end d-block text-theme'>{`Next >>`} </span>
                </div>
            </Form>
        </>
    )
}

export default CorporateTabTwo;
