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
    const [SelectedFilterDay, setSelectedFilterDay] = useState('30');
    const [SelectedDayCount, setSelectedDayCount] = useState('30');
    const [SelectedOrganization, setSelectedOrganization] = useState({ value: '', label: 'Select Organization' });

    const [ButtonName, setButtonName] = useState('Save')

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
                setSelectedDayCount(value);
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
            setSelectedDayCount(30);
            setSelectedFilterDay('30')
            setSelectedOrganization({ value: '', label: 'Select Organization' })
        }))

        setTimeout(() => {
            setLoader(!true);
        }, 2000);
    }

    const GetOrgList = () => {
        let cityArray = [{ value: '', label: 'Select Organization' }];
        if (!!RegOrgConfigData.data.data && RegOrgConfigData.data.data.length) {
            RegOrgConfigData.data.data.map((org) => {
                cityArray.push({ value: org.id, label: org.name })
            })
        }
        return [...cityArray]
    }

    const HandleOrgChange = value => {
        setSelectedOrganization(value)
    }

    const HandleGo = () => {
        if (!!SelectedOrganization.value) {
            let value = {}
            if (!!RegOrgConfigData.data.data && RegOrgConfigData.data.data.length) {
                value = RegOrgConfigData.data.data.find(i => i.id == SelectedOrganization.value)
            }
            if (!!value && !!value.isActive) {
                setButtonName('Update')
                if (!value.keyExpirationPeriod) {
                    setSelectedFilterDay('No Expiry')
                    setSelectedDayCount(0);
                } else if (value.keyExpirationPeriod == 30) {
                    setSelectedDayCount(30);
                    setSelectedFilterDay('30')
                } else if (value.keyExpirationPeriod == 60) {
                    setSelectedDayCount(60);
                    setSelectedFilterDay('60')
                } else if (value.keyExpirationPeriod == 90) {
                    setSelectedDayCount(90);
                    setSelectedFilterDay('90')
                } else {
                    setSelectedDayCount(value.keyExpirationPeriod);
                    setSelectedFilterDay('Custom')
                }
            } else {
                setButtonName('Save')
                setSelectedDayCount(0);
                setSelectedFilterDay('No Expiry')
            }
        }
    }

    const HandleCustomButtonChange = ({ target = {} }) => {
        let { value } = target
        // if (!value) {
        //     setSelectedFilterDay('No Expiry')
        //     setSelectedDayCount(0);
        // } else 
        if (value == 30) {
            setSelectedDayCount(30);
            setSelectedFilterDay('30')
        } else if (value == 60) {
            setSelectedDayCount(60);
            setSelectedFilterDay('60')
        } else if (value == 90) {
            setSelectedDayCount(90);
            setSelectedFilterDay('90')
        } else {
            setSelectedDayCount(value);
            setSelectedFilterDay('Custom')
        }
    }

    console.log('111->SelectedFilterDay->', SelectedFilterDay);

    return (
        <>
            <CommonLoader Load={Loader} />
            <HeadingComponent name='Register Organisation' />
            <div className='body-usable-container'>
                <div className='row'>
                    <div className='col-12 col-xl-6'>
                        <Select
                            value={SelectedOrganization}
                            onChange={(e) => HandleOrgChange(e, 'SelectedOrganization')}
                            name="SelectedOrganization"
                            options={GetOrgList()}
                            style={{ width: '25px' }}
                            placeholder='Select Organization'
                            classNamePrefix="select"
                        />
                        <button className='com-button ms-3' onClick={() => HandleGo()}>Go</button>
                    </div>
                    <div className='col-12 col-xl-6 FJCEAIC mt-4 mt-xl-0 aside-select'>
                        <div className='FAIC'>
                            <span className='small d-none d-sm-block'>Key expiration ( in days )</span>
                            <div className='search-wrapper' onClick={() => HandleFilterDropDownClick()}>
                                <div className='input-value'>
                                    {/* {!!SelectedDayCount ? SelectedDayCount : 'No Expiry'} Days */}
                                    {!!SelectedDayCount ? SelectedDayCount : '0 - '} Days
                                </div>
                                <button className='search-button'>
                                    <Feather.ChevronDown />
                                </button>
                                <div onClick={(event) => event.stopPropagation()} className={`day-filter-popup${!!IsOpenFilterDropdown ? ' d-block' : ' d-none'}`}>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'30'} checked={SelectedFilterDay == '30'} id='30 days' name='SelectedDays' /> <label for='30 days'>30 days</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'60'} checked={SelectedFilterDay == '60'} id='60 days' name='SelectedDays' /> <label for='60 days'>60 days</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'90'} checked={SelectedFilterDay == '90'} id='90 days' name='SelectedDays' /> <label for='90 days'>90 days</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'Custom'} checked={SelectedFilterDay == 'Custom'} id='Custom' name='SelectedDays' />  <label for='Custom'>Custom</label></div>
                                    <div className='my-2'><input type='radio' onChange={(event) => HandleFilterInputChange(event)} value={'No Expiry'} checked={SelectedFilterDay == 'No Expiry'} id='No Expiry' name='SelectedDays' /> <label for='No Expiry'>No Expiry</label></div>
                                </div>
                            </div>
                            {
                                !!SelectedFilterDay && SelectedFilterDay === 'Custom' ? <input type='number' value={SelectedDayCount} onChange={(event) => HandleCustomButtonChange(event)} style={{ width: '80px' }} /> : <></>
                            }
                            <button className='com-button ms-3' onClick={() => HandleFilter()}>{ButtonName}</button>
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
                                    return <>{
                                        !!result && result.isActive ? <tr>
                                            <td>{result.name}</td>
                                            <td>{result.keyExpirationPeriod}</td>
                                            <td>{moment(result.createdAt).format('DD-MM-YYYY')}</td>
                                        </tr> : <></>
                                    }</>
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
