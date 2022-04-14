import React from "react";
import emailIcon from "../../../Images/emailgrey.png";
import facebook from "../../../Images/greyfb.png";
import instagram from "../../../Images/greyinsta.png";
import phonePic from "../../../Images/greyphonelight.png";
import {
  Anchor,
  AnchorRight,
  Contact,
  ContactInfo,
  Icloud,
  Img,
  Picture,
  StyledEmail,
  StyledPhoneCall,
} from "./style";

const fbLink = "https://www.facebook.com/Mollyspetandhomecare/";
const instaLink = "https://www.instagram.com/mollyspetandhomecare/";

const ContactBar = () => {
  return (
    <Contact>
      <StyledPhoneCall href="tel:07824381541">
        <ContactInfo>
          <Img src={phonePic} alt="phone" />
          07824 381541
        </ContactInfo>
      </StyledPhoneCall>

      <StyledEmail href="mailto:mollywakeling@icloud.com">
        <Icloud>
          <Img src={emailIcon} />
          mollywakeling@icloud.com
        </Icloud>
      </StyledEmail>

      <Anchor href={fbLink}>
        <Picture src={facebook} />
      </Anchor>

      <AnchorRight href={instaLink}>
        <Picture src={instagram} />
      </AnchorRight>
    </Contact>
  );
};

export default ContactBar;
