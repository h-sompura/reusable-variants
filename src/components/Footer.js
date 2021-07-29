import React from 'react';
import logo from "../assets/Logo.png";
import { FooterWrapper, FooterLogo, FooterLink, FooterIcons } from '../styled';
import { BiWorld } from 'react-icons/bi';
import {AiTwotoneMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

export const Footer = () => {    
    return(
        <FooterWrapper>
            <FooterLogo src={logo} />
            <FooterLink to='/'>Reusable Variants</FooterLink>
            <FooterIcons target="_blank" href="https://harshitha-sompura.netlify.app/"><BiWorld size={20} /></FooterIcons>
            <FooterIcons target="_blank" href="mailto:sompharshi123@gmail.com"><AiTwotoneMail size={20} /></FooterIcons>
            <FooterIcons target="_blank" href="https://www.linkedin.com/in/harshithasompura/"><AiFillLinkedin size={20} /></FooterIcons>
            <FooterIcons target="_blank" href="https://github.com/h-sompura"><AiFillGithub size={20} /></FooterIcons>
        </FooterWrapper>
    )
}