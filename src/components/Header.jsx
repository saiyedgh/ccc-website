import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";

import ccclogo from '../assets/ccc-logo.png';
import mlogo from '../assets/milhouse_logo.png';

import '../css/Header.css';
import '../css/MainStyles.css';

import NavBarData from './NavBarData';
import GroundsList from './GroundsList';


const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='header-container flex'>
                <div className='logo-container flex'>
                    <img className='ccc-logo' src={ccclogo} alt='logo'  width='100%' />
                </div>
                <div className='nav-outer-container flex'>
                    <div className='nav-upper flex'>
                        <div className='nav-upper-inner flex'>
                            <div className='nav-upper-inner-left'>
                                <GroundsList />
                            </div>
                            <div className='nav-upper-inner-right'>
                                <img className='milhouse-logo' src={mlogo} alt='logo'  width='100%' />
                            </div>
                        </div>
                        <div className='nav-upper-menu-container'>
                            <Link to='#' className='menu'>
                                <BsList onClick={showSidebar}/>
                            </Link>
                        </div>
                    </div>
                    <div className={sidebar ?  'nav-menu active' : 'nav-menu'}  onClick={showSidebar}>
                        <Link to='#' className='close navbar-toggle'>
                            <BsX />
                        </Link>
                        <nav className='mobile-nav-container flex'>
                            <NavBarData />
                        </nav>
                    </div>
                    <nav className='nav-links-container flex'>
                            <NavBarData />
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;