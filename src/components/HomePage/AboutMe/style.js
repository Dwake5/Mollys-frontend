import styled from 'styled-components'

export const Div = styled.div`
    flex-grow: 0;
    padding: 15px; 
    padding-left: 20px;
    max-width: 950px;
    margin-bottom: 20px;
    background: rgb(235, 235, 235);
    border: 2px solid #A9A9A9;
    border-radius: 11px;
    -webkit-box-shadow: 0px 0px 18px rgba(102,102,102,0.73);
    -moz-box-shadow: 0px 0px 18px rgba(102,102,102,0.73);
    box-shadow: 0px 0px 18px rgba(102,102,102,0.73);

    @media screen and (max-width: 740px) {
        font-size: 17px;
    }
`

export const Ul = styled.ul`
    padding-left: 25px;
`

export const P = styled.p`
    margin: 15px 0;
`

export const H1 = styled.h2`
    text-align: center;
`

export const Quote = styled.span`
    text-align: center;
    margin: 0;
    font-size: 19px;
    font-weight: 700;
    color: rgb(50,50,255, 0.75);

    @media screen and (max-width: 740px) {
        font-size: 21px;
    }
`

export const BlockDiv = styled.div`
    display: block;
    text-align: center;
`

export const Diamond = styled.img`
    height: 18px;
    margin-left: 5px;
`

export const A = styled.a`
    color: rgb(102,51,102)
`