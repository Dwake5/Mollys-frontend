import React from 'react'

import { Picture, Div } from './style'
import logo from './MollysLogo.png'

const Logo = () => {
    return(
        <Div>
            <Picture src={logo}/>
        </Div>
    )
}


export default Logo