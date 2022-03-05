import React, { useState, useEffect } from 'react'
import { Container, Tabs, Tab, Form } from 'react-bootstrap'
import OrgData from '../../Config/OrganizationConfig.json';
import UserIconsSvg from "../../asset/img/users-icons.svg";
import CommonPopup from "../../Components/CommonPopup";
import CorporateTabOne from './CorporateTabOne';
import CorporateTabTwo from './CorporateTabTwo';
import CorporateTabThree from './CorporateTabThree';
import CommonInput from '../../Components/CommonInput';
import ReactPaginate from 'react-paginate';

// export interface OrgItemType {
//     CompanyName: string,
//     Name: string,
//     Logo: string,
//     EmailAddress: string,
//     PhoneNumber: string,
//     AddressLine1: string,
//     AddressLine2: string,
//     City: string,
//     State: string,
//     Postcode: string,
//     Country: string,
//     swarm_licensing: {
//         BillingCode: string,
//         LicenseExpiryDate: string,
//         UserLicenseCount: number,
//         DeviceLicenseCount: number,
//         Publisher: string
//     },
//     admin_user: {
//         FirstName: string,
//         LastName: string,
//         EmailAddress: string,
//         agree: number
//     }
// }

export interface OrgItemTypeListItem {
    id: string;
    name: string;
    email: string;
    organization_type: string;
    phone: string;
    logo: string;
    license: {
        billingCode: string;
        expiryDate: string;
        userLicenseCount: string;
        deviceLicenseCount: string;
    },
    address: {
        line_1: string;
        line_2: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
    },
    admin_user: {
        first_name: string,
        last_name: string,
        email_address: string,
        agree: number
    }
}

export interface OrgItemTypeNew {
    resellerOrganizations: {
        page: number;
        count: number;
        limit: number;
        list: OrgItemTypeListItem[]
    }
}

function Organizations() {

    const [OraganizationList, setOraganizationList] = useState([] as OrgItemTypeListItem[]);

    const [OraganizationData, setOraganizationData] = useState({} as OrgItemTypeNew);

    const [EditPopup, setEditPopup] = useState(false as boolean);
    const [TabOneStep, setTabOneStep] = useState(1 as 1 | 2 | 3);

    const [SelectedOrg, setSelectedOrg] = useState({} as OrgItemTypeListItem);

    const [SubscriptionPopup, setSubscriptionPopup] = useState(false as boolean);
    const [FieldEnable, setFieldEnable] = useState(false as boolean);

    useEffect(() => {
        // (...) your api call comes here;
        setOraganizationList(OrgData.data.resellerOrganizations.list);
        setOraganizationData(OrgData.data)
    }, []);

    // when on click of edit button -> edit popup
    const OnClickEditGroup = (org: OrgItemTypeListItem) => {
        setSelectedOrg({ ...org });
        setEditPopup(true);
    }

    // when on click of close button -> edit popup
    const handleCloseEditPopup = () => {
        setSelectedOrg({} as OrgItemTypeListItem);
        setEditPopup(!true);
        setTabOneStep(1)
    }

    const handleCorTabControl = (tab: 1 | 2 | 3): void => { setTabOneStep(tab) }

    const handleCreate = () => {
        setEditPopup(false);
        setTabOneStep(1);
    }

    // when on click of edit button -> edit popup
    const OnClickSubsGroup = (org: OrgItemTypeListItem) => {
        setSelectedOrg({ ...org });
        setSubscriptionPopup(true);
    }

    const handleCloseSubsPopup = () => {
        setSelectedOrg({} as OrgItemTypeListItem);
        setSubscriptionPopup(!true);
        setFieldEnable(false)
    }

    const handleUpdateSubs = () => {
        // (...) api code comes here 
        setSelectedOrg({} as OrgItemTypeListItem);
        setSubscriptionPopup(!true);
    }


    const handleFormChange = (event: any, set?: string) => {
        switch (set?.split('.').length) {
            case 2: return setSelectedOrg(prev => ({ ...prev, [set?.split('.')[1]]: event.target.value }))
            case 3: return setSelectedOrg(prev => ({ ...prev, [set?.split('.')[1]]: { ...prev[set?.split('.')[1]], [set?.split('.')[2]]: event.target.value } }))
        }
    }

    return (
        <>
            <div className="page_header">
                <h1>Organizations</h1>
            </div>
            <Container className='organizations-container'>
                <section className="administrator">
                    <div className="row organizations">
                        {
                            !!OraganizationList && OraganizationList.length ? (
                                OraganizationList.map((org, index) => {
                                    return <div className="col-12 col-md-6 col-lg-4" key={org.name + index}>
                                        <div className="card">
                                            <span
                                                className="action"
                                                onClick={() => OnClickEditGroup(org)}
                                            >
                                                <svg className="action_icon" width="15">
                                                    <use xlinkHref={UserIconsSvg + "#edit"}></use>
                                                </svg>
                                            </span>
                                            <div className="body">
                                                <img
                                                    src={org.logo}
                                                    alt="profile"
                                                    className="profile_picture img-fluid mb-3"
                                                />
                                                <h5>{org.name}</h5>
                                                <p>{org.email}</p>
                                                <p>{`${org.address.line_1} ${org.address.line_2} ${org.address.city} ${org.address.state} ${org.address.country}`}</p>
                                            </div>
                                            <div className="footer">
                                                <span
                                                    className="action add-user-parent"
                                                    tabIndex={1}
                                                    onClick={() => OnClickSubsGroup(org)}
                                                >
                                                    <FileRefresh />
                                                </span>
                                                <span
                                                    className="action search-user-parent"
                                                    tabIndex={1}
                                                >
                                                    <svg className="action_icon">
                                                        <use
                                                            xlinkHref={UserIconsSvg + "#group"}
                                                        ></use>
                                                    </svg>
                                                </span>
                                                <span
                                                    className="action add-user-parent"
                                                    tabIndex={1}
                                                >
                                                    <svg className="action_icon">
                                                        <use
                                                            xlinkHref={UserIconsSvg + "#new-user"}
                                                        ></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                })
                            ) : <>
                                No data found
                            </>
                        }
                    </div>
                </section>
                {!!OraganizationData && Object.keys(OraganizationData).length ? <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={OraganizationData.resellerOrganizations.count}
                    marginPagesDisplayed={2}
                    disableInitialCallback={true}
                    forcePage={OraganizationData.resellerOrganizations.page}
                    pageRangeDisplayed={2}
                    disabledClassName={"disable-page"}
                    containerClassName={"pagination-styles"}
                    activeClassName={"active"}
                /> : <></>}

            </Container>

            {!!EditPopup ? <CommonPopup
                Heading='Customer On-boarding'
                ModelClassName={"modal_user"}
                OnClose={handleCloseEditPopup}
            >
                <Tabs defaultActiveKey="Corporate" id="uncontrolled-tab-example" className="edit-org-container mt-3">
                    <Tab eventKey="Corporate" title="Corporate">
                        {
                            TabOneStep === 1 ? <CorporateTabOne data={SelectedOrg} setTabOneStep={setTabOneStep} setSelectedOrg={setSelectedOrg} />
                                : TabOneStep === 2 ? <CorporateTabTwo data={SelectedOrg} setTabOneStep={setTabOneStep} setSelectedOrg={setSelectedOrg} />
                                    : TabOneStep === 3 ? <CorporateTabThree data={SelectedOrg} setTabOneStep={setTabOneStep} setSelectedOrg={setSelectedOrg} handleCreate={handleCreate} />
                                        : <></>
                        }
                    </Tab>
                    <Tab eventKey="Individuals" title="Individuals">
                        <>Individuals</>
                    </Tab>
                </Tabs>
            </CommonPopup> : <></>}

            {!!SubscriptionPopup ? <CommonPopup
                Heading='Swarm Subscriptions'
                ModelClassName={"modal_user"}
                OnClose={handleCloseSubsPopup}
            >
                <Form className='edit-org-container d-flex pt-4'>
                    <div className='w-75'>
                        <div className='FAIC mb-4'>
                            <small className='w-50'><b>License Expiry Date</b></small>
                            <CommonInput disabled={!FieldEnable} className='ms-2 w-50 mb-0' type='date' name='LicenseExpiryDate' value={SelectedOrg.license.expiryDate} onChange={(event) => handleFormChange(event, 'SelectedOrg.license.expiryDate')} />
                        </div>
                        <div className='FAIC mb-4'>
                            <small className='w-50'><b>User License count</b></small>
                            <CommonInput disabled={!FieldEnable} className='ms-2 w-50 mb-0' type='number' name='UserLicenseCount' value={SelectedOrg.license.userLicenseCount} onChange={(event) => handleFormChange(event, 'SelectedOrg.license.userLicenseCount')} />
                        </div>
                        <div className='FAIC mb-4'>
                            <small className='w-50'><b>Device License Count</b></small>
                            <CommonInput disabled={!FieldEnable} className='ms-2 w-50 mb-0' type='number' name='DeviceLicenseCount' value={SelectedOrg.license.deviceLicenseCount} onChange={(event) => handleFormChange(event, 'SelectedOrg.license.deviceLicenseCount')} />
                        </div>
                    </div>
                    <div className='w-25'>
                        <Form.Switch className='custom-switch-green' checked={FieldEnable} onChange={e => setFieldEnable(e.target.checked)} id='swich-enable' />
                    </div>
                </Form>

                {!!FieldEnable && <Form.Check className='mb-4' checked={!!SelectedOrg.admin_user.agree} onChange={(event) => setSelectedOrg(prev => ({ ...prev, admin_user: { ...prev.admin_user, agree: !!event.target.checked ? 1 : 0 } }))} id='agree' label={<>
                    I agree to the <a href='/term-conditions'>Terms and conditions</a>
                </>} />}
                <div className='FJCEAIC'>
                    <button className="btn btn-theme-secondary" onClick={handleCloseSubsPopup}>Cancel</button>
                    <button className="btn btn-theme-primary ms-2" disabled={!FieldEnable} onClick={handleUpdateSubs}>Update</button>
                </div>
            </CommonPopup> : <></>}

        </>
    )
}

export default Organizations;

const FileRefresh = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <g id="Group_28" data-name="Group 28">
        <g id="Rectangle_239" data-name="Rectangle 239" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="16" height="17" rx="4" stroke="none" />
            <rect x="0.5" y="0.5" width="15" height="16" rx="3.5" fill="none" />
        </g>
        <line id="Line_19" data-name="Line 19" x2="8" transform="translate(4 5.5)" fill="none" stroke="#707070" stroke-width="1" />
        <line id="Line_20" data-name="Line 20" x2="8" transform="translate(4 8.5)" fill="none" stroke="#707070" stroke-width="1" />
        <line id="Line_21" data-name="Line 21" x2="8" transform="translate(4 11.5)" fill="none" stroke="#707070" stroke-width="1" />
    </g>
    <g id="Ellipse_33" data-name="Ellipse 33" transform="translate(9 9)" fill="#fff" stroke="#707070" stroke-width="1">
        <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
        <circle cx="5.5" cy="5.5" r="5" fill="none" />
    </g>
    <path id="ic_replay_24px" d="M6.444,2.222V1L4.917,2.528,6.444,4.055V2.833A1.833,1.833,0,1,1,4.611,4.667H4A2.444,2.444,0,1,0,6.444,2.222Z" transform="translate(8.056 10.445)" fill="#888" />
</svg>



// {
//     false && !!OraganizationList && OraganizationList.length ? (
//         OraganizationList.map((org, index) => {
//             return <div className="col-12 col-md-6 col-lg-4" key={org.CompanyName + index}>
//                 <div className="card">
//                     <span
//                         className="action"
//                         onClick={() => OnClickEditGroup(org)}
//                     >
//                         <svg className="action_icon" width="15">
//                             <use xlinkHref={UserIconsSvg + "#edit"}></use>
//                         </svg>
//                     </span>
//                     <div className="body">
//                         <img
//                             src={org.Logo}
//                             alt="profile"
//                             className="profile_picture img-fluid mb-3"
//                         />
//                         <h5>{org.CompanyName}</h5>
//                         <p>{org.EmailAddress}</p>
//                         <p>{`${org.AddressLine1} ${org.AddressLine2} ${org.City} ${org.State} ${org.Country}`}</p>
//                     </div>
//                     <div className="footer">
//                         <span
//                             className="action add-user-parent"
//                             tabIndex={1}
//                             onClick={() => OnClickSubsGroup(org)}
//                         >
//                             <FileRefresh />
//                         </span>
//                         <span
//                             className="action search-user-parent"
//                             tabIndex={1}
//                         >
//                             <svg className="action_icon">
//                                 <use
//                                     xlinkHref={UserIconsSvg + "#group"}
//                                 ></use>
//                             </svg>
//                         </span>
//                         <span
//                             className="action add-user-parent"
//                             tabIndex={1}
//                         >
//                             <svg className="action_icon">
//                                 <use
//                                     xlinkHref={UserIconsSvg + "#new-user"}
//                                 ></use>
//                             </svg>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         })
//     ) : <>
//         No data found
//     </>
// }