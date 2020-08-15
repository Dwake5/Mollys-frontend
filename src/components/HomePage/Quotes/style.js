import styled from 'styled-components'

export const CustomerQuote = styled.div`
    padding: 10px; 
    margin-top: 20px;
    background: rgb(211, 229, 243);
    border-radius: 20px;
    border: 1px dotted blue;
    text-align: center;
    -webkit-box-shadow: inset 0px -2px 23px 0px rgba(0,0,225,0.39);
    -moz-box-shadow: inset 0px -2px 23px 0px rgba(0,0,225,0.39);
    box-shadow: inset 0px -2px 23px 0px rgba(0,0,225,0.39);

    p {
        margin: 0;
    }

    p:last-of-type {
        font-weight: 600;
        margin-top: 5px;
    }
`

export const ReviewLink = styled.h3`
    text-decoration: underline;
    text-align: center;
    color: rgb(102,51,102);
    font-size: 25px;

    :hover  {
        cursor: pointer;
    }

    @media screen and (max-width: 740px) {
        font-size: 21px;
    }
`

export const Div = styled.div`
    width: 80%;
`