import styled from "styled-components";
import {Link} from "react-router-dom";
export const FooterWrapper =styled.div`
    margin:0 70px;
    display:flex;   
    bottom:5rem;
    position:absolute;
`;
export const FooterLogo =styled.img`
    height:1.3em;
`;
export const FooterLink = styled(Link)`
    justify-content:flex-start;
    color: ${props => props.theme.colors.textMain};
    font-size: ${props => props.theme.textSize.normal};
    margin:0 8px;
    flex-grow:2;
    text-decoration:none;
    transition:100ms;
    &:hover{
        font-weight:bold;
        text-decoration:underline;
        color: ${props => props.theme.colors.secondaryColor};
    }
`;
export const FooterIcons = styled.a`
    color: ${props => props.theme.colors.textParagraph};
    text-decoration:none;
    justify-content:flex-end;
    transition:100ms;
    margin-left:8px;
    cursor:pointer;
    &:hover{
        color: ${props => props.theme.colors.secondaryColor};
    }
`;