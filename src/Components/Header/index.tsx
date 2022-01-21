import React, { useState } from 'react';
import * as Feather from 'react-feather';
import { Link } from 'react-router-dom';
import HeaderConfigJSON from '../../Config/HeaderConfig.json';

const Header = () => {

    const [IsProfileDropdown, setIsProfileDropdown] = useState(false);
    const HeaderConfig: any = HeaderConfigJSON;
    let { data = {} } = !!HeaderConfig ? HeaderConfig : {};
    let { name = '', profile_image = '' } = !!data ? data : {};

    const handleDropdownClick = (event: any) => {
        if (!IsProfileDropdown) {
            setIsProfileDropdown(true)
        } else {
            setIsProfileDropdown(!true)
        }
    };

    const HandleDropdownBlur = (e: any) => {
        setTimeout(() => {
            !!IsProfileDropdown && setIsProfileDropdown(false)
        }, 500);
    };

    return (
        <>
            <header className='header-container'>
                <div className='container-fluid header-container-wrapper'>
                    <div className='row FJCBAIC'>
                        <div className='col-6 col-sm-5 col-md-3'>
                            <div className='logo-container'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} />
                            </div>
                        </div>
                        <div className='d-none d-lg-block col-5'>
                            <input className='header-search-input' placeholder='Search for file' />
                        </div>
                        <div className='col-6 col-md-4'>
                            <div className='header-profile-container'>
                                <Feather.Bell />
                                <div className='name-container' onClick={(event) => handleDropdownClick(event)} tabIndex={1} onBlur={(event) => HandleDropdownBlur(event)}>
                                    <img src={process.env.PUBLIC_URL + profile_image} />
                                    <h6>{name}</h6 >
                                    <Feather.ChevronDown />
                                    <div className={`profile-dropdown${!!IsProfileDropdown ? ' d-block' : ' d-none'}`}>
                                        <div>
                                            <div>Profile</div>
                                        </div>
                                        <div>
                                            <div>Logout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
