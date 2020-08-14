import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: ${ props => props.basic ? '0px' : '10px'};
    width: ${ props => props.basic ? '19%' : '187px'};
    font-size: 21px;
    margin-right: 5px;
    text-decoration: none;
    color: black;
    margin-bottom: ${ props => props.basic ? '0' : '10px'};
    font-weight: ${({currentpage}) => currentpage ? '700' : '400'};
    text-align: ${ props => props.basic && 'center'};

    @media screen and (max-width: 640px) {
        font-size: 16px;
    }

    ${props => !props.basic && css`
        :hover {
            transition: margin-left 1.5s;
            background: rgb(180,180,180);
            border-radius: 15px;
            margin-left: 10px;
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
    }

    &>span {
        margin-left: 22px;
    }
`;

export const LinkDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    background: ${props => props.basic ? '#f7f5f7' : '#f1f1f1'};
    padding-bottom: 1px;
    padding-top: 1px;
    box-shadow: ${props => props.basic ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' : '0px 4px 5px 0px rgba(0,0,0,0.12)'};
    margin-bottom: 40px;
    
    @media screen and (max-width: 720px) {
        width: 100%;
        display: flex;
    }

    span {
        margin-left: 26px;
    }
`

export const Img = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 8px;
    margin-bottom: -2px;
`

export const DownImg = styled(Img)`
    margin-bottom: -16px;
    height: 18px;
    width: 18px;
`

export const PawImg = styled(Img)`
    height: 18px;
    width: 18px;
    margin-bottom: -1px;
`