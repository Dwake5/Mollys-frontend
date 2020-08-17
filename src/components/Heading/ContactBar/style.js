import styled from 'styled-components'


export const Picture = styled.img`
    height: 24px;
    margin-right: 5px;
    margin-left: 5px;
    transition: transform .5s;

    :hover {
        transform: scale(1.3)
    }
`

export const PicturesDiv = styled.div`
    display: flex;
    text-align: center;
    padding: 10px;
`

export const Anchor = styled.a`
    margin-left: 20px;
`

export const AnchorRight = styled(Anchor)`
    margin-right: 20px;
`

export const Img = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 4px;
    margin-bottom: -5px;

    @media screen and (max-width: 640px) {
        display: none;
    }
`

export const ContactInfo = styled.p`
    margin-left: 15px;
    font-size: 20px;

    @media screen and (max-width: 640px) {
        font-size: 14px;
    }

    @media screen and (max-width: 520px) {
        font-size: 12px;
    }
`

export const LeftMargin = styled.p`
    font-size: 20px;
    margin-left: 20px;
`

export const Title = styled.p`
    font-weight: bold;
    text-align: center;
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    height: 40px;
    width: 100%;
    background: white;
    background: #f1f1f1;
    box-shadow: 0px -3px 4px rgba(0,0,0,0.12);
    padding-top: 5px;
    position: fixed;
    bottom: 0;
`

export const News = styled.p`
    margin: 5px;
    text-align: center;
`

export const Small = styled.p`
    font-size: 16px;
    margin: 0 0 0 15px;
`

export const Icloud = styled.div`
    margin-bottom: 5px;
    margin-left: 15px;
    font-size: 20px;

    @media screen and (max-width: 640px) {
        font-size: 14px;
    }

    @media screen and (max-width: 520px) {
        font-size: 12px;
    }
`

export const StyledEmail = styled.a`
    color: black;
    text-decoration: none;
`

export const StyledPhoneCall = styled(StyledEmail)`
`