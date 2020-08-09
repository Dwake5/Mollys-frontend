import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
`

export const ServiceDiv = styled.div`
    order: 2;
    width: 50%;
    padding: 10px;
    margin: 20px 0;
    background: rgb(235, 235, 235);
    border-radius: 10px;
    border: 2px solid #A9A9A9;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.5);

    @media screen and (max-width: 1550px) {
        margin: auto;
        margin-bottom: 20px;
        margin-top: 10px;
        width: 90%;
        order: 1
    }
`

export const MainServiceDiv = styled.div`
    display: flex;
    margin: auto;
    padding: 5px 0 20px;

    width: 90%;
    border: 2px solid rgba(102,178,225, 1);
    background: white;
    border-top: 15px solid rgba(102,178,225, 0.75);
    margin-bottom: 150px;

    box-shadow: 0px 2px 5px 5px rgb(211, 229, 243);

    @media screen and (max-width: 1550px) {
        flex-wrap: wrap;
    }

    @media screen and (max-width: 720px) {
        margin-bottom: 75px;

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
    padding: 5px;
    text-align: center;
`

export const Div2 = styled.div`
    padding: 5px;
    text-align: center;
    margin-bottom: 50px;
`

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const TableShiftedLeft = styled(Table)`
    padding-right: 90px;
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
    padding-left: 15px;
    text-align: center;
`

export const UL = styled.ul`
    margin: 0;
    padding-bottom: 15px;
`

export const LeftImage = styled.div`
    display: flex;
    order: 1;
    height: 275px;
    width: 225px;
    margin: 0;
    margin: auto;
    object-fit: contain;
    overflow: hidden;
    border-radius: 30px;
    border: 1px solid blue;

    @media screen and (max-width: 1550px) {
        order: 2;
        height: 300px;
        width: 260px;
        margin: auto;
    }

    @media screen and (max-width: 1050px) {
        order: 2;
        height: 220px;
        width: 190px;
        margin: auto;
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