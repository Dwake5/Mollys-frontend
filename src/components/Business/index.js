import React from "react";
import emailIcon from "../../Images/emailgrey.png";
import facebook from "../../Images/greyfb.png";
import { H1 } from "../../theme.js";
import dogspa from "./Images/dogspa2.jpg";
import horse from "./Images/horse.jpg";
import pets from "./Images/pets.jpg";
import phone from "./Images/phonegrey.png";
import dog from "./Images/pooches.jpg";
import website from "./Images/website.png";
import {
  Address,
  Anchor,
  AnchorLeft,
  BusinessDiv,
  BusinessDivLessBot,
  BusinessImg,
  BusinessText,
  Div,
  ImgDivLeft,
  ImgDivRight,
  ImgP,
  LinkDiv,
  Picture,
} from "./style";

const Business = () => {
  return (
    <Div>
      <H1>Business Recommendations</H1>
      <BusinessDiv>
        <ImgDivLeft>
          <BusinessImg src={dog} alt="clareLogo" />
        </ImgDivLeft>

        <BusinessText>
          <h3>Clare's Dog Grooming</h3>
          <p>
            Clare has been grooming since 2000 and has been trained by City and
            Guilds. She is fully insured.
          </p>
          <p>
            Clare does one-to-one dog grooming from either her customers home so
            that the dog's feel comfortable staying there or she can pamper your
            pooches at her own grooming room in her house.
          </p>
          <p>Covers Rayleigh, Hockley, Rochford, Thundersley and Benfleet.</p>
          <Address>520 Arterial Road,</Address>
          <Address>Rayleigh,</Address>
          <Address>Southend-on-Sea,</Address>
          <Address>SS9 4DT</Address>
          <ImgP>
            <img height="15px" alt="phone icon" src={phone} /> 07795 248 426
          </ImgP>
          <LinkDiv>
            <AnchorLeft href={"mailto:Clarebearjohnson@hotmail.co.uk"}>
              <Picture src={emailIcon} />
            </AnchorLeft>
            <AnchorLeft
              href={"https://www.facebook.com/ClaresMobileDoggrooming/"}
            >
              <Picture src={facebook} />
            </AnchorLeft>
          </LinkDiv>
        </BusinessText>
      </BusinessDiv>

      <BusinessDiv>
        <BusinessText>
          <h3>Melody Fisher Photography</h3>
          <p>Melody is an Essex-based dog and horse photographer.</p>
          <p>She offers one-to-one sessions as well as event photography.</p>
          <p>Melody has a Ba Hons in Photography and an ARPS Distinction.</p>
          <p>She is fully insured and DBS checked.</p>
          <ImgP>
            <img height="15px" alt="phone icon" src={phone} /> 07906 481 618
          </ImgP>
          <LinkDiv>
            <AnchorLeft href={"https://melodyfisherphotography.co.uk/"}>
              <Picture src={website} />
            </AnchorLeft>
            <Anchor href={"https://www.facebook.com/MelodyFisherPhotography/"}>
              <Picture src={facebook} />
            </Anchor>
          </LinkDiv>
        </BusinessText>
        <ImgDivRight>
          <BusinessImg src={horse} alt="Claire and her horse" />
        </ImgDivRight>
      </BusinessDiv>

      <BusinessDiv>
        <ImgDivLeft>
          <BusinessImg src={pets} alt="Pets in partnership logo" />
        </ImgDivLeft>
        <BusinessText>
          <h3>Pets in Partnership</h3>
          <p>
            Provides an array of high quality dog training and pet behaviour
            services. Each service that pets in partnership provides is led by
            relevantly qualified and experienced members of their team.
          </p>
          <p>
            Pets in Partnership works closely with vets and other professional
            people across a range of fields to ensure their customers receive as
            much support as possible.
          </p>
          <Address>Hullbridge Road,</Address>
          <Address>Lubards farm,</Address>
          <Address>Rayleigh,</Address>
          <Address>SS6 9QW</Address>

          <ImgP>
            <img height="15px" alt="phone icon" src={phone} /> 07593 875 748
          </ImgP>
          <LinkDiv>
            <AnchorLeft href={"http://www.petsinpartnership.co.uk/"}>
              <Picture src={website} />
            </AnchorLeft>
            <Anchor href={"https://www.facebook.com/petsinpartnership/"}>
              <Picture src={facebook} />
            </Anchor>
          </LinkDiv>
        </BusinessText>
      </BusinessDiv>

      <BusinessDivLessBot>
        <BusinessText>
          <h3>The Dog Spa</h3>
          <p>
            The Dog Spa is a new dog grooming and boutique salon based in Thorpe
            Bay. They are City and Guilds trained and hold a vet trained
            certificate in first aid.
          </p>
          <p>These are the following services they provide:</p>
          <ul>
            <li>Dog grooming - Full grooms, bath and dry, hand stripping</li>
            <li>
              Ultra sound teeth cleaning - State-of-the-art ultrasound teeth
              cleaning. Preventative dental hygiene for your dog.
            </li>
            <li>
              Puppy packages - Introduce your puppy to being groomed with one of
              their puppy packages.
            </li>
            <li>
              Spa treatments - Facials, face trim, eye trim, nose and pad
              treatment etc.
            </li>
            <li>Nail clipping - For dogs and small animals</li>
            <li>
              Retail shop - A wide variety of dog items for sale for both furry
              friends and human dog lovers.
            </li>
          </ul>
          <Address>36 Barnstaple Road,</Address>
          <Address>Southend-on-Sea,</Address>
          <Address>SS1 3PA</Address>
          <ImgP>
            <img height="15px" alt="phone icon" src={phone} /> 07960 823 776
          </ImgP>
          <LinkDiv>
            <AnchorLeft href={"https://thedogspa.net/"}>
              <Picture src={website} />
            </AnchorLeft>
            <Anchor href={"https://www.facebook.com/woofatthedogspa/"}>
              <Picture src={facebook} />
            </Anchor>
          </LinkDiv>
        </BusinessText>
        <ImgDivRight>
          <BusinessImg src={dogspa} alt="Dogs Spa Logo" />
        </ImgDivRight>
      </BusinessDivLessBot>
    </Div>
  );
};

export default Business;
