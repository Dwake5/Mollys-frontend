import styled from 'styled-components'

export const Img = styled.img`
    height: 12px;
    margin: 0 ${props => props.margin ? props.margin : 0};

    @media screen and (max-width: 700px) {
        height: 10px;
    }
`
