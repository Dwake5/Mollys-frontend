import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    padding: 3px 0;
    padding-left: ${ props => props.basic ? '0px' : '10px'};
    width: ${ props => props.basic ? '20%' : '140px'};
    font-size: ${ props => props.basic ? '19px' : '16px'};
    margin-right: ${ props => props.basic ? '0px' : '5px'};
    text-decoration: none;
    color: black;
    margin-bottom: ${ props => props.basic ? '0' : '5px'};
    font-weight: ${({currentpage}) => currentpage ? '700' : '400'};
    text-align: ${ props => props.basic && 'center'};

    @media screen and (max-width: 640px) {
        font-size: 16px;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }

    ${props => !props.basic && css`
        :hover {
            transition: margin-left 1.5s;
            background: rgb(180,180,180);
            border-radius: 15px;
            margin-left: 8px;
            font-weight: bold;
        }
    `}
    
    ${props => props.basic && css`
        :hover {
            background: rgb(214, 228, 239);
        }
    `}

    &.${props => props.activeClassName} {
        font-weight: ${props => props.basic ? '400' : '700' };
        background: ${props => props.basic && 'rgb(211, 229, 243)' }
    }

    &>span {
        margin-left: 22px;
    }
`;

export const StyledLinkMiddle = styled(StyledLink)`
    padding-top: 10px;
`

export const LinkDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    background: ${props => props.basic ? '#f7f5f7' : '#f1f1f1'};
    padding-bottom: ${props => props.basic && '1px'};
    padding-top: ${props => props.basic && '1px'};
    box-shadow: ${props => props.basic ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' : '0px 4px 5px 0px rgba(0,0,0,0.12)'};
    margin-bottom: 30px;
    
    @media screen and (max-width: 540px) {
        width: 100%;
        display: flex;
    }

    span {
        margin-left: 20px;
    }
`

export const Img = styled.img`
    height: 15px;
    width: 15px;
    margin-right: 6px;
    margin-bottom: -2px;
`

export const DownImg = styled(Img)`
    margin-bottom: -12px;
    height: 14px;
    width: 14px;
`

export const PawImg = styled(Img)`
    height: 14px;
    width: 14px;
    margin-bottom: -1px;
`