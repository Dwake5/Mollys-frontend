import React from 'react'

import AboutMe from './AboutMe'
import Quotes from './Quotes'

import { PhotoDiv, TitleDiv, MainDiv, BottomDiv, LeftDiv, Img, Photo, Content } from './style'
import { H1 } from '../../theme.js'

import picture1 from './Images/Me1.jpg'
import picture2 from './Images/5.jpg'
import picture3 from './Images/8.jpg'
import picture4 from './Images/6.jpg'
import twoHands from './Images/2hands.png'

const HomePage = props => {

    return (
        <MainDiv>
            <TitleDiv>
                <H1>About Me</H1>
            </TitleDiv>
            
            <Content>
                <LeftDiv>
                    <AboutMe />
                    <BottomDiv>
                        <Img src={twoHands} />
                    </BottomDiv>
                    <Quotes { ...props } /> 
                </LeftDiv>
                
                <PhotoDiv>
                    <Photo src={picture1}/>
                    <Photo src={picture2}/>
                    <Photo src={picture3}/>
                    <Photo src={picture4}/>
                </PhotoDiv> 
            </Content>
            
        </MainDiv>
    ) 
}

export default HomePage
