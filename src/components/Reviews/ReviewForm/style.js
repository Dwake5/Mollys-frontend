import styled from 'styled-components'

export const H2 = styled.h2`
    text-align: center;
    padding-top: 0;
    margin: 10px;
`

export const Textarea = styled.textarea`
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    height: 140px;
    resize: none;
    box-sizing: border-box;
    font-size: 15px; 
    margin-bottom: 20px;
    border: 0; 
    padding: 7px 7px; 
    border-bottom: 1px solid #ccc;

    @media screen and (max-height: 500px) {
        height: 210px;
    } 
`

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    font-size: 15px; 
    border: 0; 
    padding: 7px 7px; 
    border-bottom: 1px solid #ccc;
`

export const FormDiv = styled.div`
    background: #f1f1f1;
    width: 50%;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 5%;
    margin-bottom: 30px;
    border: 2px solid grey;
    border-radius: 8px;
    -webkit-box-shadow: inset 0px 0px 51px 7px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 0px 0px 51px 7px rgba(0,0,0,0.1);
    box-shadow: inset 0px 0px 51px 7px rgba(0,0,0,0.1);

    @media screen and (max-width: 740px) {
        max-width: none;
        padding: 0 2%;
        width: 60%;
    }

    @media screen and (max-height: 500px) {
        width: 76%;
    } 
`

export const Select = styled.select`
    background: #f1f1f1;
    height: 31px;
    width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
`

export const Label = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
`

export const Text = styled.span`
    font-size: 20px;
`

export const Button = styled.button`
    text-align: center;
    width: 150px;
    height: 40px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 15px;

    :hover {
        border: 1px solid black;
        background: #e4e4e4;
        color: black;
    }
`

export const ButtonDiv = styled.div`
    text-align: center; 
`

export const Required = styled.span`
    color: red;
`

export const Red = styled.p`
    color: red;
    margin-bottom: 0px;
    margin-top: 15px;
    font-size: 20px;
`