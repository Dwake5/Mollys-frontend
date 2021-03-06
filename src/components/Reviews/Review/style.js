import styled from 'styled-components'

export const Img = styled.img`
    height: 52px;
    min-width: 52px;
    width: 52px;
    border-radius: 50px;
    margin: 2px;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.3)
`

export const ReviewDiv = styled.div`
    display: flex;
    position: relative;
    width: 80%;
    min-height: 75px;
    margin: 0 auto;
    background: #f1f1f1;
    box-shadow: 0px 2px 5px 4px rgb(181, 200, 213);;
    margin-bottom: 22px;
    border-radius: 14px;

    @media screen and (max-width: 540px) {
        font-size: 15px;
    }
`

export const MainText = styled.p`
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 35px;
    padding 5px;
`

export const Span = styled.span`
    color: blue;
`

export const BottomText = styled.p`
    font-weight: 700;
    margin-left: 5px;
    margin-right: 15px;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 0;
`

export const Config = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`

export const Button = styled.button`
    background-color: ${props => props.bright ? 'orange' : 'white'};
`

export const ButtonDelete = styled(Button)`
    margin-left: 40px;
`

export const ConfirmButton = styled(Button)`
    margin-left: 100px;
`