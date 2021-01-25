import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Tshirts</SidebarLink>
                <SidebarLink to="/">Hooides</SidebarLink>
                <SidebarLink to="/">Pants</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute tp='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
