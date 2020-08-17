import styled from 'styled-components'

export const NavDiv = styled.div`
    border-radius: 0px 20px 20px 0px;
    width: 210px;
    position: fixed;
    margin-top: 45px;
    left: 0px;

    @media screen and (max-width: 540px) {
        display: none;
    }
`

export const Picture = styled.img`
    height: 22px;
    margin-right: 8px;
    margin-left: 8px;
    transition: transform .5s;

    :hover {
        transform: scale(1.3)
    }
`

export const PicturesDiv = styled.div`
    display: flex;
    text-align: center;
    padding: 7px;
`

export const Anchor = styled.a`
    margin-left: 15px;
`

export const AnchorLeft = styled.a`
    margin-left: 20px;
`

export const Img = styled.img`
    height: 15px;
    width: 15px;
    margin-right: 2px;
    margin-bottom: -5px;
`

export const ContactInfo = styled.p`
    margin: 0;
    margin-left: 12px;
    font-size: 15px;
    margin-bottom: 12px;
`

export const LeftMargin = styled.p`
    font-size: 15px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Title = styled.p`
    font-weight: bold;
    text-align: center;
`

export const DownImg = styled(Img)`
    margin-bottom: -13px;
    height: 18px;
    width: 18px;
`

export const Contact = styled.div`
    margin-top: 0px;
    margin-left: 10px;
    width: 143px;
    border: 1px solid grey;
    background: white;
    border-radius: 15px;
    margin-bottom: 30px;
`

export const News = styled.p`
    margin: 5px;
    text-align: center;
`

// export const Small = styled.p`
//     font-size: 16px;
//     margin: 0 0 0 15px;
// `

export const Icloud = styled.div`
    margin-bottom: 10px;
    margin-left: 12px;
    font-size: 15px;
    
    &>span {
        margin-left: 19px;
    }
`

export const StyledEmail = styled.a`
    color: black;
    text-decoration: none;
`