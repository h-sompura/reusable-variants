import React from 'react';
import logo from "../assets/Logo.png";
import { NavWrapper, NavLogo, NavLink } from '../styled';
export const Navbar = () => {
    return(
        <NavWrapper>
            <NavLogo src={logo} />
            <NavLink to='/'>Reusable Variants</NavLink>
            <NavLink to='/'>View code</NavLink>
        </NavWrapper>
    )
}