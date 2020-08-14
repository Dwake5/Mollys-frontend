import styled from 'styled-components'

export const H1 = styled.h1`
    margin-top: 40px;
    text-align: center;
    font-size: 45px;
    font-style: italic;
    color: transparent;
    background: black;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.3);

    @media screen and (max-width: 680px) {
        font-size: 35px;
    }
`

