import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;

    div:last-of-type {
        margin-bottom: 20px;
    }
`

export const BusinessDiv = styled.div`
    display: flex;
    margin-bottom: 80px;
    width: 90%;
    margin-left: 5%;

    @media screen and (max-width: 1550px) {
        flex-direction: column;
    }
`

export const H3 = styled.h3`
`

export const BusinessText = styled.div`
    order: 1;
    flex: 2.25;
    background: rgb(235, 235, 235);
    border-radius: 10px;
    margin: 0 1%;
    border: 2px solid #A9A9A9;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.5);

    > * {
        margin: 15px;
    }
`
    
export const BusinessImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border: 1px solid #A9A9A9;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.5);
`

export const ImgDivLeft = styled.div`
    display: flex;
    order: 0;
    flex: 1;
    align-items: center;
    margin: 0 1%;

    @media screen and (max-width: 1550px) {
        order: 2;
        width: 50%;
        padding: 20px 0;
        margin: auto;
    }
`

export const ImgDivRight = styled(ImgDivLeft)`
    order: 2;
`

export const Picture = styled.img`
    height: 30px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 40%;
    transition: transform .5s;

    :hover {
        transform: scale(1.3)
    }
`

export const LinkDiv = styled.div`
    display: flex;
    text-align: center;
    padding: 10px;
`

export const Anchor = styled.a`
    margin-left: 20px;
`

export const AnchorLeft = styled.a`
    margin-left: 10px;
`

export const Address = styled.p`
    margin-top: 0;
    margin-bottom: 0;

`

export const ImgP = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;

    & img {
        margin-right: 10px;
    }
`