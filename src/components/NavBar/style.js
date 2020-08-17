import styled from 'styled-components'

export const NavDiv = styled.div`
    border-radius: 0px 20px 20px 0px;
    width: 158px;
    position: fixed;
    margin-top:15px;
    left: 0px;

    @media screen and (max-width: 540px) {
        display: none;
    }
`

export const Picture = styled.img`
    height: 30px;
    margin-right: 10px;
    margin-left: 10px;
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

export const AnchorLeft = styled.a`
    margin-left: 10px;
`

export const Img = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 4px;
    margin-bottom: -2px;
`

export const ContactInfo = styled.p`
    margin-left: 15px;
    font-size: 20px;
`

export const LeftMargin = styled.p`
    font-size: 20px;
    margin-left: 20px;
`

export const Title = styled.p`
    font-weight: bold;
    text-align: center;
    margin-bottom: 4px;
    margin-top: 10px;
`

export const DownImg = styled(Img)`
    margin-bottom: -13px;
    height: 18px;
    width: 18px;
`

export const NewsDiv = styled.div`
    margin-top: 0px;
    margin-left: 10px;
    width: 137px;
    border: 1px solid grey;
    background: white;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 0 3px 3px 3px;
    text-align: center;
    font-size: 15px;
    display: ${props => !props.news && 'none'};
`


export const News = styled.p`
    margin: 3px;
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
    
    &>span {
        margin-left: 22px;
    }
`

export const StyledEmail = styled.a`
    color: black;
    text-decoration: none;
`