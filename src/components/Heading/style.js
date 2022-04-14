import styled from 'styled-components'

export const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0%;
    height: 90px;
    left: 0px;
    background: #f1f1f1;
    box-shadow: 2px 2px rgba(241, 241, 241, 0.5);

    @media screen and (max-width: 1300px) {
        height: 100px;
    }
`

export const Div = styled.div`
    display: flex;
    width: 100%;
`
