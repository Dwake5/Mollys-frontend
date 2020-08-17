import styled from 'styled-components'

export const H1 = styled.h1`
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 35px;
    font-style: italic;
    color: transparent;
    background: black;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.3);

    @media screen and (max-width: 750px) {
        font-size: 26px;
    }

    @media screen and (max-width: 570px) {
        font-size: 23px;
    }

    @media screen and (max-width: 480px) {
        font-size: 21px;
    }
`

