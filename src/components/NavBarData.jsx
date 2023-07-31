import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../css/Header.css'

const NavBarData = () => {
    return (
        <>

        <ul className='nav-links-01 flex'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/tournaments'>Tournaments</Link>
            </li>
            <li>
                <Link to='/team'>Team</Link>
            </li>
            <li>
                <Link to='/ccc-academy'>CCC Academy</Link>
            </li>
            <li>
                <Link to='/ccc-tv'>CCC TV</Link>
            </li>
        </ul>

        <ul className='nav-links-01 flex'>
            <li>
                <ExternalLink href='https://mail.hostinger.com' >
                    <span>Log In</span>
                </ExternalLink>
            </li>
            <li>
                <AnchorLink href='#Schedule'>Schedule</AnchorLink>
            </li>
            <li>
                <AnchorLink href='#JoinUs'>Join Us</AnchorLink>
            </li>
        </ul>

    </>
    )
}

export default NavBarData;