import styled from 'styled-components'

export const H1 = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    color: #5e5e5e;
    text-shadow: 1px 2px black;
    margin-top: 0px;
    margin-bottom: 4px;

    @media screen and (max-width: 1080px) {
        margin-top: -4px;
    }

    @media screen and (max-width: 850px) {
        font-size: 30px;
    }

    @media screen and (max-width: 620px) {
        font-size: 25px;
    }

    @media screen and (max-width: 550px) {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
    @media screen and (max-width: 540px) {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }

    @media screen and (max-width: 460px) {
        font-size: 20px;
    }

`

export const H2 = styled.h2`
    text-align: center;
    margin: 0;
    margin-top: -10px;
    margin-bottom: 0px;
    padding: 0;
    font-size: 15px;

    @media screen and (max-width: 1060px) {
        margin-bottom: 5px;
    }

    @media screen and (max-width: 640px) {
        font-size: 17px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }

    @media screen and (max-width: 460px) {
        font-size: 15px;
    }

`

export const HeadDiv = styled.div`
    flex: auto;
    margin: 0 auto;
    height: 90px;
    background: #f1f1f1;
    padding: 0 5px;

    @media screen and (max-width: 1300px) {
        height: 100px;
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
    font-size: 15px;
    margin-left: -10px;
    margin-top: 4px;

    @media screen and (max-width: 1744px) {
        font-size: 13px;
    }

    @media screen and (max-width: 1444px) {
        font-size: 12px;
    }

    @media screen and (max-width: 540px) {
        margin: 0;
        display: none;
    }

`