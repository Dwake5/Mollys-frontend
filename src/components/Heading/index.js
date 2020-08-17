import React, { useState, useEffect } from 'react'

import Header from './Header'
import Logo from './Logo'
import SignIn from './SignIn'
import HyperLinks from '../NavBar/HyperLinks'
import ContactBar from './ContactBar'

import { HeaderDiv, Div } from './style'

const Heading = ({ currentUser, signin, signout }) => {

    const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;
    
    function useCurrentWidth() {
        // save current window width in the state object
        let [width, setWidth] = useState(getWidth());
        
        // in this case useEffect will execute only once because
        // it does not have any dependencies.
        useEffect(() => {
            const resizeListener = () => {
                // change width from the state object
                setWidth(getWidth())
            };
            // set resize listener
            window.addEventListener('resize', resizeListener);
            
            // clean up function
            return () => {
                // remove resize listener
                window.removeEventListener('resize', resizeListener);
            }
        }, [])
        
        return width
    }
    
    let width = useCurrentWidth()

    return (
        
        <HeaderDiv >
            <Div>
                <Logo />
                <Header />
                <SignIn currentUser={currentUser} signin={signin} signout={signout}/>
            </Div>
            {
                width < 541 &&
                <>
                    <HyperLinks row basic />
                    <ContactBar/> {/* Actually a footer */}
                </>
            }
        </HeaderDiv>
    ) 
}


export default Heading