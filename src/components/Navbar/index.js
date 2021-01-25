import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Tshirt</NavLink>
                <NavIcon>
                    <p>Models</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar;
