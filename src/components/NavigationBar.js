import React from 'react';
import {Link} from "react-router-dom";
import {Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";


const NavigationBar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [homeNav, setHomeNav] = useState(true);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const navChange = () => setHomeNav(homeNav => !homeNav);

    return (
        <div id='navigation-bar' className='sticky-top bg-white'>
            <Container className='d-sm-flex align-items-center justify-content-between py-4'>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to='/' onClick={() => setHomeNav(true)}>
                        <img src={homeNav ? 'images/LogoOnline.png' : 'images/LogoOnline2.png'} className='logo' alt="Error"/>
                    </Link>
                    <div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav
                                            className='course-dropdown border d-flex align-items-center ml-5 px-3 py-1'>
                                <img src="images/MenuIcon.png" alt="Error"/>
                                <div className='ml-2'>Kurslar</div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Python</DropdownItem>
                                <DropdownItem>Java</DropdownItem>
                                <DropdownItem>JS</DropdownItem>
                                <DropdownItem>PHP</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                {homeNav ?
                    <Link
                        className='d-flex align-items-center justify-content-end mt-2 mr-2 mt-sm-0 text-decoration-none text-dark'
                        onClick={navChange}
                        to='/profil-page'
                    >
                        <img src="images/ArrowCircled.png" alt="Error"/>
                        <div className='ml-2'>Kirish</div>
                    </Link> : <div className='d-flex align-items-center'>
                        <div>Farrukh Nurmatov</div>
                        <span><img src="images/PhotoUser_2.png" className='ml-3' alt="Error"/></span>
                        <span><img src="images/Notification.png" className='ml-4' alt="Error"/></span>
                    </div>
                }
            </Container>
        </div>
    );
};

export default NavigationBar;