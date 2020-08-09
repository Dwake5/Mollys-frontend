import React from 'react'

import { CustomerQuote, ReviewLink, Div } from './style'

const Quotes = props => {

    const pushToReviews = () => {
        window.scrollTo(0, 0);
        props.history.push('/Reviews')
    }

    return (
        <>
            <Div>
                <CustomerQuote>
                    <p>"Loves animals and looks after all our pets with love and attention like they were her own”</p>
                    <p>- Joanne </p>
                </CustomerQuote>

                <CustomerQuote>
                    <p>“She managed the complicated wheelchair and all its straps with ease first time”</p>
                    <p>“Molly is sensible and business like”</p> 
                    <p>- Rosemary</p>  
                </CustomerQuote>

                <CustomerQuote>
                    <p>“She is completely trustworthy and a joy to have around” </p>
                    <p>“Mature beyond her years”</p>
                    <p>- Claire</p>
                </CustomerQuote>

                <CustomerQuote>
                    <p>“Very reliable, honest and genuine person”</p>
                    <p>- Emma</p> 
                </CustomerQuote>
            </Div>
            <ReviewLink onClick={() => pushToReviews()}>Click to see more or leave a review?</ReviewLink>
        </>
    )
}

export default Quotes