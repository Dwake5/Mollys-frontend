import styled from 'styled-components'

export const Div = styled.div`
    width: 165px;
    height: auto;
    text-align: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const Button = styled.button`
    width: 100%;
    height: ${props => props.large ? '100%' : '85%'};
    padding: 0;
    border: none;
    background: none;
`

export const Submit = styled.button`
    margin-bottom: 20px;
    width: 100px;
    height: 30px;
`

export const Form = styled.div`
    width: 216px;
    position: fixed;
    z-index: 10;
    top: 100px;
    right: 0px;
    background: white;
    border: 2px solid grey;
`

export const Input = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Input2 = styled(Input)`
    margin-bottom: 15px;
`

export const NoMargin = styled.p`
    margin: 0;
`


