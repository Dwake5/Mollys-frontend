import styled from 'styled-components'

export const Picture = styled.img`
    width: 220px;
    height: 120px;

    @media screen and (max-width: 1300px) {
        height: 130px;
    }
`

export const Div = styled.div`
    margin-right: 40px;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 900px) {
        margin-right: 10px;
    }

    @media screen and (max-width: 720px) {
        width: 160px;
        margin: auto;
        padding: 0;
    }
`