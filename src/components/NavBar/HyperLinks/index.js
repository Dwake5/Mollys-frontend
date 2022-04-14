import React from "react";

import pawPic from "../../../Images/paw.png";
import housePic from "../Images/house.png";

import {
  StyledLink,
  StyledLinkMiddle,
  LinkDiv,
  Img,
  DownImg,
  PawImg,
} from "./style";

const HyperLinks = ({ basic }) => {
  return basic ? (
    <LinkDiv row>
      <StyledLink basic="true" activeClassName="noBold" exact to="/">
        Home <div>Page</div>
      </StyledLink>
      <StyledLink basic="true" activeClassName="noBold" to="/Services">
        Services & Prices
      </StyledLink>
      <StyledLinkMiddle basic="true" activeClassName="noBold" to="/Gallery">
        Gallery
      </StyledLinkMiddle>
      <StyledLink
        basic="true"
        activeClassName="noBold"
        to="/BusinessRecommendations"
      >
        Suggested Businesses
      </StyledLink>
      <StyledLink basic="true" activeClassName="noBold" to="/Reviews">
        Customer Reviews
      </StyledLink>
    </LinkDiv>
  ) : (
    <LinkDiv>
      <StyledLink activeClassName="selected" exact to="/" style={{ 'margin-top': '5px'}}>
        <Img src={housePic} alt="home" />
        Home Page
      </StyledLink>
      <StyledLink activeClassName="selected" to="/Services">
        <DownImg src={pawPic} alt="paw" />
        Services & <span>Prices</span>
      </StyledLink>
      <StyledLink activeClassName="selected" to="/Gallery">
        <PawImg src={pawPic} alt="paw" />
        Gallery
      </StyledLink>
      <StyledLink activeClassName="selected" to="/BusinessRecommendations">
        <DownImg src={pawPic} alt="paw" />
        Suggested <span>Businesses</span>
      </StyledLink>
      <StyledLink activeClassName="selected" to="/Reviews">
        <DownImg src={pawPic} alt="paw" />
        Customer <span>Reviews</span>
      </StyledLink>
    </LinkDiv>
  );
};

export default HyperLinks;
