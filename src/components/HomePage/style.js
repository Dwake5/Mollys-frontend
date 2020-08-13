import styled from 'styled-components'

export const PhotoDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1020px) {
        justify-content: space-around;
    }

    @media screen and (max-width: 640px) {
        display: none;
    }

`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
`

export const Content = styled.div`
    display: flex;
    flex-grow: 9;
`

export const TitleDiv = styled.div`
    width: 100%;
    flex-basis: 1;
`

export const BottomDiv = styled.div`
    display: flex;
    flex-grow: 3;
    justify-content: center;
    padding-top: 20px;
    height: 400px;
`

export const LeftDiv = styled.div`
    display: flex;
    margin-left: 4%;
    flex-direction: column;
    align-items: center;
    width: 70%;

    @media screen and (max-width: 640px) {
        width: 100%;
        margin-right: 4%;
    }
`

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    padding-bottom: 25px;
`

export const Photo = styled.img`
    height: 20vw;
    min-height: 300px;
    width: 12vw;
    min-width: 165px;
    margin: 0 20px;
    margin-bottom: 30px;
    border: 1px solid blue;
    border-radius: 125px;
    box-shadow: 0 8px 6px -6px black;
    padding: 0 auto 50px auto;

    @media screen and (max-width: 820px) {
        min-height: 250px;
        min-width: 150px;
    }

    @media screen and (max-width: 720px) {
        min-height: 300px;
        min-width: 165px;
    }
`

