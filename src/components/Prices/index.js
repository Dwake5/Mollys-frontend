import React from 'react'

import PawImg from '../../components/Reusable/Paw'

import dogwalk1 from './Images/10.jpg'
import dogwalk2 from './Images/47.jpg'
import homevisit1 from './Images/3dogs.jpg'
import homevisit2 from './Images/64.jpg'
import petvisit1 from './Images/twocats.jpg'
import petvisit2 from './Images/62.jpg'

import { Div, Div1, Div2, ServiceDiv, MainServiceDiv, MainServiceDivLessBot, Image, H2, P, Table, TableShiftedLeft, TD, TDbold, TH, UL, LeftImage, RightImage, MarginLeftP } from './style'
import { H1 } from '../../theme.js'

const Services = () => {
    return (
        <Div>
            <H1>Services and Prices</H1>
            <Div1>
                <PawImg blue margin='4px'/>Benfleet 
                <PawImg blue margin='4px'/>Hadleigh 
                <PawImg blue margin='4px'/>Leigh-on-Sea
                <PawImg blue margin='4px'/>
            </Div1>
            <Div2>
                <PawImg blue margin='4px'/>Westcliff
                <PawImg blue margin='4px'/>Southend 
                <PawImg blue margin='4px'/>Southchurch 
                <PawImg blue margin='4px'/>Thorpe Bay
                <PawImg blue margin='4px'/>
            </Div2>

            <MainServiceDiv>

                <LeftImage>
                    <Image landscape alt='Me with a dog' src={dogwalk1} />
                </LeftImage>

                <ServiceDiv>
                    <H2>Dog Walking</H2>    
                    <P>I provide sole household dog walking so that your dogs get my full attention and I get to know the dogs better, what they like and don't like and I can tailor every walk to suit each individual dog which also means no two walks are ever the same.</P>  
                    <P>I offer on and off-lead walking dependant on the dogs confidence level.</P>
                    <P>A discount will be deducted if you book 4 or more walks a week.</P>
                    <Table>
                        <tbody>
                            <tr>
                                <TH>Dogs</TH>
                                <TH>30 mins</TH>
                                <TH>1 hour</TH>
                            </tr>
                            <tr>
                                <TD>1</TD>
                                <TD>£9</TD>
                                <TD>£13</TD>
                            </tr>
                            <tr>
                                <TD>2</TD>
                                <TD>£13</TD>
                                <TD>£19</TD>
                            </tr>
                        </tbody>
                    </Table>
                    <P>*These prices are based on a 3 mile radius from Leigh-on-Sea. Please contact me for prices on more than two dogs.</P>
                </ServiceDiv>

                <RightImage>
                    <Image landscape alt='Me dog walking' src={dogwalk2} />
                </RightImage>

            </MainServiceDiv>

            <MainServiceDiv>

                <LeftImage>
                    <Image alt='cats feeding' src={petvisit1} />
                </LeftImage>

                <ServiceDiv>                
                    <H2>Pet Visits</H2>    
                    <P>If you have a pet that needs a visit whilst you are at work or out for the day, I can pop in and spend time with your furry friend.</P> 
                    <P>Your dog or puppy visit will include: feeding and providing fresh water, letting them out in the garden and play.</P> 
                    <P>Your cat or kitten visit will include: feeding and providing fresh water, changing litter trays, and giving them attention.</P> 
                    <TableShiftedLeft>
                        <tbody>
                            <tr>
                                <TH></TH>
                                <TH>Time</TH>
                                <TH>Price</TH>
                            </tr>
                            <tr>
                                <TDbold>Dog</TDbold>
                                <TD>30 mins</TD>
                                <TD>£12</TD>
                            </tr>
                            <tr>
                                <TDbold>Cat</TDbold>
                                <TD>20 mins</TD>
                                <TD>£7</TD>
                            </tr>
                            <tr>
                                <TDbold>Cat (twice)</TDbold>
                                <TD>20 mins</TD>
                                <TD>£12</TD>
                            </tr>
                        </tbody>
                    </TableShiftedLeft>
                </ServiceDiv>

                <RightImage>
                    <Image landscape alt='2 dogs' src={petvisit2} />
                </RightImage>
            </MainServiceDiv>

            <MainServiceDivLessBot>

                <LeftImage>
                    <Image landscape alt='3 dogs' src={homevisit1} />
                </LeftImage>

                <ServiceDiv>
                    <H2>House Sitting</H2>    
                    <P>I provide various house sitting services.</P> 
                    <UL>
                        <li>I look after dogs, cats and other animals for an additional cost.</li>
                        <li>Discounted rate after 7 days.</li>
                        <li>In the comfort of your pet's home.</li>
                        <li>It includes home security when you are away; car, lights, open and close the blinds, watering plants and taking in mail.</li>
                        <li>Optional updates and photos can be sent.</li>
                        <li>Regular check-ins throughout the day.</li>
                    </UL>
                    <MarginLeftP>£25 per night to stay over, in addition to the pricing of your dogs walks.</MarginLeftP>
                </ServiceDiv>

                <RightImage>
                    <Image alt='tortoises' src={homevisit2} />
                </RightImage>

            </MainServiceDivLessBot>


        </Div>
    )
}

export default Services