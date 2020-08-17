import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
`

export const BusinessDiv = styled.div`
    display: flex;
    margin-bottom: 60px;
    width: 90%;
    margin-left: 5%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }

    @media screen and (max-width: 740px) {
        font-size: 17px;
    }
`

export const BusinessDivLessBot = styled(BusinessDiv)`
    margin-bottom: 40px;

    @media screen and (max-width: 540px) {
        margin-bottom: 20px;
    }
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
        margin-top: 10px;
        margin-bottom: 10px;
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

    @media screen and (max-width: 1000px) {
        order: 2;
        width: 40%;
        padding: 20px 0;
        margin: auto;
    }
`

export const ImgDivRight = styled(ImgDivLeft)`
    order: 2;
`

export const Picture = styled.img`
    height: 22px;
    margin-right: 7px;
    margin-left: 7px;
    border-radius: 40%;
    transition: transform .5s;

    :hover {
        transform: scale(1.3)
    }
`

export const LinkDiv = styled.div`
    display: flex;
    text-align: center;
    padding: 7px;
    margin-bottom: 0px;
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