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
    color: ${props => props.theme.colors.textMain};
    font-size: ${props => props.theme.textSize.normal};
    margin:0 8px;
    text-decoration:none;
    transition:100ms;
    &:hover{
        font-weight:bold;
        text-decoration:underline;
        color: ${props => props.theme.colors.secondaryColor};
    }
`;