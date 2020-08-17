import styled from 'styled-components'

export const Div = styled.div`
    width: 90%;
    margin-left: 5%;
    text-align: center;
`

export const SingleImageDiv = styled.div`
    width: 20%;
    margin: 20px 10px;
    overflow: hidden;
    background: black;
    border:2px solid #fff;
    box-shadow: 10px 10px 5px #ccc;

    @media screen and (max-width: 800px) {
        width: 25%;
    }

    @media screen and (max-width: 540px) {
        width: 25%;
    }
`

export const Photo = styled.img`
    width: 100%;
    transition: all 1s;
    display: block;

    :hover {
        -ms-transform: scale(1.3);
        -moz-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        -o-transform: scale(1.3);
        transform: scale(1.3);
    }
`

export const AllImagesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
`

export const SlideshowButton = styled.button`
    width: 200px;
    height: 40px;
    font-size: 20px;
    background: rgb(235, 235, 235);
    border-radius: 15px;
    border: 2px solid rgb(101, 147, 216);
    position: relative;
    top: 0;
    transition: top ease 1s;
    
    :hover {
        top: -2px;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(50,50,199,1);
        -moz-box-shadow: 0px 2px 5px 0px rgba(50,50,199,1);
        box-shadow: 0px 2px 5px 0px rgba(50,50,199,1);
    }
`

export const AddPhotosButton = styled(SlideshowButton)`
    height: 60px;
    margin-top: 30px;
    margin-bottom: 20px;
`