import React, { useEffect, useState } from 'react';
import * as Feather from 'react-feather';
import { withRouter, NavLink } from 'react-router-dom';
import { CommonMobileMenu } from '../../Config/MobileSliderConfig.json';

const Sidebar = (props) => {

    const [SidebarToogle, setSidebarToogle] = useState(false);

    const [CurrentOpenedIndex, setCurrentOpenedIndex] = useState(null);
    const CurrentOpenIndex = id => {
        if (!id) return;
        if (id === CurrentOpenedIndex) setCurrentOpenedIndex(null);
        else setCurrentOpenedIndex(id);
    }

    const GetIcon = (name) => {
        switch (name) {
            case 'User': return <Feather.User className='me-2' />;
            case 'Search': return <Feather.Search className='me-2' />;
            default: break;
        }
    }

    useEffect(() => {
        setSidebarToogle(false)
    }, [props])

    let { url = '' } = props;

    return (
        <>
            <aside className={`sidebar-container${!!SidebarToogle ? ' open' : ''}`}>
                <div className='sidebar-container-wrapper'>
                    <div className='sidebar-toogle' onClick={() => setSidebarToogle(i => !i)}>
                        <Feather.ChevronRight />
                    </div>
                    <div className='scrollable-menu'>
                        {
                            !!CommonMobileMenu && CommonMobileMenu.length > 0 ? CommonMobileMenu.map((menu, idx) => {
                                let { linkText = '', hasChild = false, hypherLink = '', icon = '', id, child = [] } = menu;
                                return <>
                                    {
                                        !hasChild ?
                                            <NavLink key={Math.random() * idx} className='menu-item' exact to={`${url}${hypherLink}`}>{linkText}</NavLink>
                                            : <></>
                                    }
                                    {
                                        !!hasChild ?
                                            <div key={idx} className='menu-item-has-child'>
                                                <div className={`menu-item ${window.location.href.includes(hypherLink) ? 'active' : ''}`} onClick={() => CurrentOpenIndex(id)}>
                                                    <div className='FJCB'>
                                                        <div><Feather.Key className='me-2' /> <span>{linkText}</span></div>
                                                        <span> {!!CurrentOpenedIndex && CurrentOpenedIndex === id ? <Feather.ChevronUp /> : <Feather.ChevronDown />} </span>
                                                    </div>
                                                </div>
                                                {
                                                    !!CurrentOpenedIndex && CurrentOpenedIndex === id && !!child && child.length > 0 ? child.map((childItem) => {
                                                        let { linkText = '', hypherLink = '', Icon = false } = childItem;
                                                        return <NavLink key={Math.random() * (idx * idx)} className='menu-item sub-menu' exact to={`${url}${hypherLink}`}>
                                                            {!!Icon ? GetIcon(Icon) : <></>}
                                                            {linkText}
                                                        </NavLink>
                                                    }) : <></>
                                                }
                                            </div>
                                            : <></>
                                    }
                                </>
                            }) : <></>
                        }
                    </div>
                </div>
            </aside>
            <div className="aside-overlay aside-trigger" onClick={() => setSidebarToogle(!true)} />
        </>
    )
}

export default withRouter(Sidebar)
