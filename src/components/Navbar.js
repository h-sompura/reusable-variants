import React from 'react';
import { useContext } from 'react';
import logo from "../assets/Logo.png";
import { NavWrapper, NavLogo, NavLink, NavCode } from '../styled';
import {AiFillGithub} from 'react-icons/ai';
import { ThemeContext } from 'styled-components';
export const Navbar = () => {
    const themeContext = useContext(ThemeContext);
    return(
        <NavWrapper>
            <NavLogo src={logo} />
            <NavLink to='/'>Reusable Variants</NavLink>
            <AiFillGithub style={{ color: themeContext.colors.textParagraph}} size={20} />
            <NavCode target="_blank" href="https://github.com/h-sompura/reusable-variants.git">View code</NavCode>
        </NavWrapper>
    )
}