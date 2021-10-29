import React, { useState } from 'react'
import * as Feather from 'react-feather'
import HeadingComponent from '../../Components/HeadingComponent'
import RegOrgConfigData from '../../Config/NewRegOrgConfig.json';
import Select from 'react-select';
import moment from 'moment';
import { postData } from '../../api';
import urls from '../../api/urls';
import CommonLoader from '../../Components/CommonLoader';

const RegisterOrganization = () => {

    const [Loader, setLoader] = useState(false);
    const [IsOpenFilterDropdown, setIsOpenFilterDropdown] = useState(false);
    const [SelectedFilterDay, setSelectedFilterDay] = useState('');

    const HandleFilterDropDownClick = () => {
        if (!IsOpenFilterDropdown) {
            setIsOpenFilterDropdown(true)
        } else {
            setIsOpenFilterDropdown(!true)
        }
    }

    const HandleFilterInputChange = ({ target = {} }) => {
        let { name = '', value = '' } = target;
        switch ('SelectedDays') {
            case 'SelectedDays':
                setSelectedFilterDay(value)
                setIsOpenFilterDropdown(false)
                return;
            default: break;
        }
    }

    const CloseFilterDropdown = () => {
        setSelectedFilterDay('')
        setIsOpenFilterDropdown(false)
    }

    const HandleFilter = () => {
        setLoader(true);
        postData(urls.FilterData, {}, {
            "days": SelectedFilterDay,
        }).then((result => {
            CloseFilterDropdown()
        }))

        setTimeout(() => {
            setLoader(!true);
        }, 2000);
    }

    return (
        <>
            <CommonLoader Load={Loader} />
            <HeadingComponent name='Register Organisation' />
            <div className='body-usable-container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <Select
                            value={''}
                            // onChange={(e) => HandleManualChanges(e, 'SelectedTransactionType')}
                            name="SelectedTransactionType"
                            options={[{ value: '', label: 'All' }]}
                            style={{ width: '25px' }}
                            placeholder='Select Organization'
                            classNamePrefix="select"
                        />
                        <button className='com-button ms-3'>Go</button>
                    </div>
                    <div className='col-12 col-xl-6 FJCEAIC mt-4 mt-xl-0 aside-select'>
                        <div className='FAIC'>
                            <span className='small d-none d-sm-block'>Key expiration ( in days )</span>
                            <div className='search-wrapper' onClick={() => HandleFilterDropDownClick()}>
                                <div className='input-value'>
                                    30 days
                                </div>
                                <button className='search-button'>
                                    <Feather.ChevronDown />
                                </button>
                                <div onClick={(event) => event.stopPropagation()} className={`day-filter-popup${!!IsOpenFilterDropdown ? ' d-block' : ' d-none'}`}>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'30 days'} checked={SelectedFilterDay === '30 days'} id='30 days' name='SelectedDays' /> <label for='30 days'>30 days</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'60 days'} checked={SelectedFilterDay === '60 days'} id='60 days' name='SelectedDays' /> <label for='60 days'>60 days</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'90 days'} checked={SelectedFilterDay === '90 days'} id='90 days' name='SelectedDays' /> <label for='90 days'>90 days</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'Custom'} checked={SelectedFilterDay === 'Custom'} id='Custom' name='SelectedDays' />  <label for='Custom'>Custom</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'No Expiry'} checked={SelectedFilterDay === 'No Expiry'} id='No Expiry' name='SelectedDays' /> <label for='No Expiry'>No Expiry</label></div>
                                </div>
                            </div>
                            {
                                !!SelectedFilterDay && SelectedFilterDay === 'Custom' ? <input type='number' style={{ width: '80px' }} /> : <></>
                            }
                            <button className='com-button ms-3' onClick={() => HandleFilter()}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='tabel-container'>
                    <table className='com-table'>
                        <thead>
                            <th>
                                <td>Organization</td>
                            </th>
                            <th>
                                <td>Key Expiry Period</td>
                            </th>
                            <th>
                                <td>Key Expiry Date</td>
                            </th>
                        </thead>
                        <tbody>
                            {
                                !!RegOrgConfigData.data.data && RegOrgConfigData.data.data.length ? RegOrgConfigData.data.data.map(result => {
                                    return <tr>
                                        <td>{result.name}</td>
                                        <td>{result.keyExpirationPeriod}</td>
                                        <td>{moment(result.createdAt).format('DD-MM-YYYY')}</td>
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

export default RegisterOrganization
