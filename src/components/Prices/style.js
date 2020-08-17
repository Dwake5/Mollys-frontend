import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;

    @media screen and (max-width: 740px) {
        font-size: 17px;
    }
`

export const MarginLeftP = styled.p`
    margin-left: 5px;
`

export const ServiceDiv = styled.div`
    order: 2;
    width: 50%;
    padding: 7px;
    margin: 15px 0;
    background: rgb(235, 235, 235);
    border-radius: 10px;
    border: 2px solid #A9A9A9;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.5);

    @media screen and (max-width: 1125px) {
        margin: auto;
        margin-bottom: 20px;
        margin-top: 10px;
        width: 90%;
        order: 1
    }
`

export const MainServiceDiv = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    padding: 4px 0 15px;

    width: 90%;
    border: 2px solid rgba(102,178,225, 1);
    background: white;
    border-top: 15px solid rgba(102,178,225, 0.75);
    margin-bottom: 100px;

    box-shadow: 0px 2px 5px 5px rgb(211, 229, 243);

    @media screen and (max-width: 1125px) {
        flex-wrap: wrap;
    }

    @media screen and (max-width: 540px) {
        margin-bottom: 60px;
    }
`

export const MainServiceDivLessBot = styled(MainServiceDiv)`
    margin-bottom: 50px;

    @media screen and (max-width: 540px) {
        margin-bottom: 30px;
    }
`

export const H2 = styled.h2`
    padding: 5px;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 0px;
`

export const P = styled.p`
    padding: 5px 15px;
    margin: 0;
`

export const Div1 = styled.div`
    padding: 4px;
    text-align: center;

    @media screen and (max-width: 740px) {
        font-size: 17px;
    }

    @media screen and (max-width: 640px) {
        font-size: 15px;
    }
`

export const Div2 = styled(Div1)`
    text-align: center;
    margin-bottom: 30px;
`

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px;
    padding-top: 7px;
`

export const TableShiftedLeft = styled(Table)`
    padding-right: 65px;
`

export const TD = styled.td`
    padding: 3px;
    padding-left: 15px;
    text-align: center;
`

export const TDbold = styled(TD)`
    font-weight: bold;
`

export const TH = styled.th`
    padding: 3px;
    padding-left: 12px;
    text-align: center;
`

export const UL = styled.ul`
    margin: 0;
    padding-bottom: 0px;
`

export const LeftImage = styled.div`
    display: flex;
    order: 1;
    height: 206px;
    width: 169px;
    margin: 0;
    margin: auto;
    object-fit: contain;
    overflow: hidden;
    border-radius: 30px;
    border: 1px solid blue;

    @media screen and (max-width: 1125px) {
        order: 2;
        height: 225px;
        width: 195px;
        margin: auto;
    }

    @media screen and (max-width: 850px) {
        height: 165px;
        width: 143px;
    }

    @media screen and (max-width: 370px) {
        height: 125px;
        width: 110px;
    }
`

export const RightImage = styled(LeftImage)`
    order: 3;
`

export const Image = styled.img`
    margin: auto;
    max-width: ${props => props.landscape ? '100%' : 'auto'};;
    max-height: ${props => props.landscape ? 'auto' : '100%'};
    margin-left: auto;
    margin-right: auto;
    display: block;
`