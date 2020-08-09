import styled from 'styled-components'

export const H1 = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 45px;
    color: #5e5e5e;
    text-shadow: 2px 2px black;
    margin-top: 0px;
    margin-bottom: 4px;

    @media screen and (max-width: 1057px) {
        font-size: 35px;
    }

    @media screen and (max-width: 990px) {
        font-size: 33px;
    }

    @media screen and (max-width: 830px) {
        font-size: 30px;
    }

    @media screen and (max-width: 740px) {
        font-size: 27px;
    }

    @media screen and (max-width: 720px) {
        font-size: 30px;
    }

    @media screen and (max-width: 620px) {
        font-size: 25px;
    }
`

export const H2 = styled.h2`
    text-align: center;
    margin: 0;
    margin-top: -10px;
    margin-bottom: 0px;
    padding: 0;
    font-size: 20px;

    @media screen and (max-width: 1060px) {
        margin-bottom: 5px;
    }

    @media screen and (max-width: 720px) {
        margin-bottom: 5px;
    }
`

export const HeadDiv = styled.div`
    flex: auto;
    margin: auto;
    height: 120px;
    background: #f1f1f1;

    @media screen and (max-width: 1300px) {
        height: 130px;
    }
`

export const P = styled.p`
    margin: 5px;
    animation: slide 15s linear infinite;
    transform: translateX(100%);

    @keyframes slide {
        0%   { transform: translateX(100%)}
        100% { transform: translateX(-100%)}
    }
`

export const Quote = styled.p`
    margin: 0;
    text-align: center;
    font-weight: 550;
    font-style: italic;
    font-size: 20px;
    margin-left: -10px;

    @media screen and (max-width: 1744px) {
        font-size: 17px;
    }

    @media screen and (max-width: 1444px) {
        font-size: 15px;
    }

    @media screen and (max-width: 720px) {
        margin: 0;
    }
`