import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Tshirt</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Models</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar;
