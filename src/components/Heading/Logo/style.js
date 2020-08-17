import styled from 'styled-components'

export const Picture = styled.img`
    width: 165px;
    height: 90px;

    @media screen and (max-width: 1300px) {
        height: 100px;
    }
`

export const Div = styled.div`
    margin-right: 70px;
    width: 165px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 900px) {
        margin-right: 10px;
    }

    @media screen and (max-width: 540px) {
        width: 120px;
        margin: auto;
        padding: 0;
    }
`