import styled from "styled-components";
import {Link} from "react-router-dom";
export const NavWrapper =styled.nav`
    margin:0 70px;
    display:flex;   
`;
export const NavLogo =styled.img`
    height:1.3em;
`;
export const NavLink = styled(Link)`
    justify-content:flex-start;
    color: ${props => props.theme.colors.textMain};
    font-size: ${props => props.theme.textSize.normal};
    margin:0 8px;
    flex-grow:1;
    text-decoration:none;
    transition:100ms;
    &:hover{
        font-weight:bold;
        text-decoration:underline;
        color: ${props => props.theme.colors.secondaryColor};
    }
`;
export const NavCode = styled.a`
    color: ${props => props.theme.colors.textMain};
    font-size: ${props => props.theme.textSize.normal};
    text-decoration:none;
    transition:100ms;
    margin-left:8px;
    &:hover{
        font-weight:bold;
        text-decoration:underline;
        color: ${props => props.theme.colors.secondaryColor};
    }
`;