import React from 'react';
import { ExternalLink } from 'react-external-link';

import logo01 from '../assets/milhouse_symbol.png';

import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

import '../css/JoinUs.css';

const JoinUs = () => (
    <>
        <div id="JoinUs" >
            <div className='join-us-container'>
                <h2>Sponsors</h2>
                <div className='sponsors-logo-container'>
                    <div className='logo-container'>
                        <img src={logo01} alt='logo' />
                    </div>
                </div>

                <div className='contact-us'>
                    <div className='icons-container'>
                        <ul className='icons-list'>
                            <li>
                                <ExternalLink href='#'>
                                    <BsTwitter />
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href='#'>
                                    <BsFacebook />
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href='#'>
                                    <BsInstagram />
                                </ExternalLink>
                            </li>
                        </ul>

                    </div>
                    <div className='contact-us-text'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>211 Valarie St, Glenview 60025,</li>
                            <li>Illinois, United State</li>
                            <li>{'+1-517-358- 2588'}</li>
                            <li>connect@clubcricketofchicago.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default JoinUs;