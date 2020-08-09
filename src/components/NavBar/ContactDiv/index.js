import React from 'react'


import { Picture, PicturesDiv, Anchor, AnchorLeft, Img, ContactInfo, LeftMargin, DownImg, Contact, Icloud, StyledEmail } from './style'

import facebook from '../../../Images/facebook.png'
import instagram from '../../../Images/instagram.jpg'
import emailIcon from '../../../Images/email.png'

import phonePic from '../Images/phone.png'

const fbLink = 'https://www.facebook.com/Mollyspetandhomecare/'
const instaLink = 'https://www.instagram.com/mollyspetandhomecare/'

const ContactDiv = () => {

    return (
        <Contact>
            <LeftMargin>Contact me...</LeftMargin>
            <ContactInfo>
                <Img src={phonePic} alt='phone'/>07824 381 541
            </ContactInfo>
            
            <StyledEmail href='mailto:mollywakeling@icloud.com'>
                <Icloud>
                    <DownImg src={emailIcon}/>mollywakeling <span>@icloud.com</span>
                </Icloud>
            </StyledEmail>

            <PicturesDiv>
                <AnchorLeft href={fbLink} >
                    <Picture src={facebook}/>
                </AnchorLeft>
                <Anchor href={instaLink} >
                    <Picture src={instagram}/>
                </Anchor>
            </PicturesDiv>
        </Contact>
    )
}

export default ContactDiv
