import React, { useState, useEffect } from 'react'
import moment from 'moment';
import * as Feather from 'react-feather'
import HeadingComponent from '../../Components/HeadingComponent'
import AnalyticsConfigData from '../../Config/NewAnalyticsConfig.json';
import RegOrgConfigData from '../../Config/NewRegOrgConfig.json';
import Select from 'react-select';
import { postData } from '../../api';
import urls from '../../api/urls';
import CommonLoader from '../../Components/CommonLoader';

const Analytics = () => {

    const [Loader, setLoader] = useState(false);
    const [OrgList, setOrgList] = useState([]);
    const [IsFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const [FilterState, setFilterState] = useState({
        userId: '',
        deviceId: '',
        keyState: ''
    })

    useEffect(() => {
        let Temp = [{ value: '', label: 'Select Organization' }]
        if (!!RegOrgConfigData.data.data && RegOrgConfigData.data.data.length) {
            RegOrgConfigData.data.data.map(result => {
                Temp.push({
                    value: result.id,
                    label: result.name
                })
            })
        }
        setOrgList([...Temp])
    }, []);

    const handleDropdownClick = (event) => {
        if (!IsFilterDropdownOpen) {
            setIsFilterDropdownOpen(true)
        } else {
            setIsFilterDropdownOpen(!true)
        }
    };

    const CloseFilterDropdown = () => {
        setFilterState(prev => ({
            ...prev, userId: '',
            deviceId: '',
            keyState: ''
        }))
        setIsFilterDropdownOpen(false);
    }

    const HandleFilter = () => {
        setLoader(true);
        postData(urls.FilterData, {}, {
            "orgId": "",
            "userId": FilterState.userId,
            "deviceId": FilterState.deviceId,
            "keyState": FilterState.keyState

        }).then((result => {
            CloseFilterDropdown()
        }))

        setTimeout(() => {
            setLoader(!true);
        }, 2000);

    }

    const HandleOnChangeFilter = ({ target }) => {
        setFilterState(prev => ({ ...prev, [target.name]: target.value }))
    }

    return (
        <>
            <CommonLoader Load={Loader} />
            <HeadingComponent name='Analytics' />
            <div className='body-usable-container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <Select
                            value={''}
                            // onChange={(e) => HandleManualChanges(e, 'SelectedTransactionType')}
                            name="SelectedTransactionType"
                            options={!!OrgList ? OrgList : []}
                            style={{ width: '25px' }}
                            classNamePrefix="select"
                            placeholder='Select Organization'
                        />
                        <button className='com-button ms-3'>Go</button>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 FJCEAIC mt-4 mt-md-0 custom-filter-dropdown'>
                        <div className='com-select FJCSAIC custom-filter-dropdown' onClick={(event) => handleDropdownClick(event)}>
                            <span>Select Organization</span>
                            <div onClick={(event) => event.stopPropagation()} className={`dropdown-content${!!IsFilterDropdownOpen ? ' d-block' : ' d-none'}`}>
                                <input className='dropdown-input' onChange={(event) => HandleOnChangeFilter(event)} value={FilterState.userId} name='userId' placeholder='User Id' />
                                <input className='dropdown-input' onChange={(event) => HandleOnChangeFilter(event)} value={FilterState.deviceId} name='deviceId' placeholder='Devices Id' />
                                <input className='dropdown-input' onChange={(event) => HandleOnChangeFilter(event)} value={FilterState.keyState} name='keyState' placeholder='Keys' />
                                <button className='com-button' onClick={() => HandleFilter()}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row dashboard-chart'>
                    <div className='col-12 col-md-6 col-lg-4 my-2'>
                        <div className='card-container orange'>
                            <div className='FJCB FDC'>
                                <div>Users</div>
                                <h4>20</h4>
                            </div>
                            <div className='FJCCAIC'>
                                <Feather.Users />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 my-2'>
                        <div className='card-container blue'>
                            <div className='FJCB FDC'>
                                <div>Devices</div>
                                <h4>23</h4>
                            </div>
                            <div className='FJCCAIC'>
                                <Feather.Smartphone />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 my-2'>
                        <div className='card-container black'>
                            <div className='FJCB FDC'>
                                <div>Keys</div>
                                <h4>66</h4>
                            </div>
                            <div className='FJCCAIC'>
                                <Feather.Key />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tabel-container'>
                    <table className='com-table'>
                        <thead>
                            <th><td>Key ID</td></th>
                            <th><td>Created At</td></th>
                            <th><td>User</td></th>
                            <th><td>Device</td></th>
                            <th><td>Key Expires At</td></th>
                            <th><td>Key State</td></th>
                        </thead>
                        <tbody>
                            {
                                !!AnalyticsConfigData.data.data && AnalyticsConfigData.data.data.length ? AnalyticsConfigData.data.data.map(result => {
                                    return <tr>
                                        <td>{result.keyId}</td>
                                        <td>{moment(result.createdAt).format('DD-MM-YYYY')}</td>
                                        <td>{result.userId}</td>
                                        <td>{result.deviceId}</td>
                                        <td>{moment(result.keyExpirationTime).format('DD-MM-YYYY')}</td>
                                        <td>{!!result.keyState ? <span className={result.keyState === 'Active' ? "text-sucess" : ''}>Active</span> : <span className='text-danger'>In Active</span>}</td>
                                    </tr>
                                }) : <></>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Analytics
