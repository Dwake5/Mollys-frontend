import styled from 'styled-components'

export const Img = styled.img`
    height: 9px;
    margin: 0 ${props => props.margin ? props.margin : 0};

    @media screen and (max-width: 660px) {
        height: 9px;
    }
`
