import React from "react";
import PawImg from "../../Reusable/Paw";
import diamond from "../Images/diamondgrey.png";
import { A, BlockDiv, Diamond, Div, P, Quote, Ul } from "./style";

const AboutMe = () => {
  return (
    <Div>
      <BlockDiv>
        <Quote>
          "The girl that believes animals are more of a best friend than
          diamonds"
        </Quote>
        <Diamond src={diamond} alt="diamond" />
      </BlockDiv>
      <P>
        Hello, my name is Molly Wakeling and I am a passionate dog walker based
        in Leigh-on-Sea.
      </P>
      <P>
        I started dog walking in 2018 for friends and family and then decided
        that I wanted to change my career from hospitality to working with
        animals. Within the dog walking world I have:
      </P>
      <P>
        <PawImg margin="4px" />
        <A href="https://www.crufts.org.uk">
          Attended Crufts 10-13th March 2022 and 2020
        </A>
      </P>
      <P>
        <PawImg margin="4px" />
        Attended "Noise Phobia Workshop" with Pets in Partnership 25th January
        2020
      </P>
      <P>
        <PawImg margin="4px" />
        Passed Tia (cockapoo) at "Beginners Obedience Course" which is
        recognised by The Kennel Club
      </P>
      <P>
        I attended a working dog session with Anita de Klerk and loved every
        minute of it. Since meeting Rebecca Keattch, the head trainer and team
        leader at Pets in Partnership, I am now a volunteer student gaining
        knowledge of dog behaviour and training techniques to further my
        education and career.
      </P>
      <P>
        I enjoy reading books about animal communication and training too, for
        example:
      </P>
      <Ul>
        <li>
          <A href="https://www.goodreads.com/book/show/460968.Ruff_Love">
            'Ruff Love' by Susan Garrett
          </A>
        </li>
        <li>
          <A href="https://www.goodreads.com/book/show/117142.The_Perfect_Puppy">
            'The Perfect Puppy' by Gwen Bailey
          </A>
        </li>
      </Ul>
      <P>
        I hope you enjoy looking around my website, feel free to contact me with
        any questions and queries.
      </P>
      <P>Thank you!</P>
    </Div>
  );
};

export default AboutMe;
