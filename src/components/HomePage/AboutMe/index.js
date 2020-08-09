import React from 'react'

import PawImg from '../../Reusable/Paw'

import { Div, Quote, BlockDiv, Diamond, Ul } from './style'
import diamond from '../Images/diamondgrey.png'

const AboutMe = () => {
    return (
        <Div>
            <BlockDiv>
                <Quote>"The girl that believes animals are more of a best friend than diamonds"</Quote>
                <Diamond src={diamond} alt="diamond" /> 
            </BlockDiv>
            <p>Hello, my name is Molly Wakeling and I am a passionate dog walker based in Leigh-on-Sea.</p>
            <p>I started dog walking in 2018 for friends and family and then decided that I wanted to change my career from hospitality to working with animals. Within the dog walking world I have:</p>
            <p><PawImg margin='4px'/><a href='https://www.crufts.org.uk'>Attended Crufts 5-8th March 2020</a></p>
            <p><PawImg margin='4px'/>Attended "Noise Phobia Workshop" with Pets in Partnership 25th Janurary 2020</p>
            <p><PawImg margin='4px'/>Passed Tia (cockapoo) at "Beginners Obedience Course" which is recognised by The Kennel Club</p>
            <p>I attended a working dog session with Anita de Klerk and loved every minute of it. Since meeting Rebecca Keattch, the head trainer and team leader at Pets in Partnership, I am now a volunteer student gaining knowledge of dog behaviour and training techniques to further my education and career.</p>
            <p>I enjoy reading books about animal communication and training too, for example:</p>
            <Ul>
                <li><a href='https://www.goodreads.com/book/show/460968.Ruff_Love'>'Ruff Love' by Susan Garrett</a></li>
                <li><a href='https://www.goodreads.com/book/show/117142.The_Perfect_Puppy'>'The Perfect Puppy' by Gwen Bailey</a></li>
            </Ul>
            <p>I hope you enjoy looking around my website, feel free to contact me with any questions and queries.</p>
            <p>Thank you!</p>
        </Div>
    )
}

export default AboutMe