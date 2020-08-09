import React, { Component } from 'react'

import { Div } from './style'
import { H1 } from '../../theme.js'

import Review from './Review'
import ReviewForm from './ReviewForm'

import { fetchReviews, patchReview, deleteReview } from '../../Services/api'

class Reviews extends Component {
    state = {
        reviews: [
            {id:'-3', service: 'dog', review: 'Molly is a lovely young lady. Mature beyond her years. Her love of animals is clear in everything she does. She is passionate about animals and has a lovely nature. She is clearly knowledgeable and keen to share her knowledge and help us to train our two boisterous puppies. My boys absolutely adore her and love her visits. We really can see the difference her help has made. I would not hesitate to recommend Molly. She is completely trustworthy and a joy to have around. I use her services for both training and overnight care.', name: 'Claire W', display: true, area: 'Great Wakering' },
            {id:'-2', service: 'cat', review: 'Molly has looked after my cat twice now, and she’s been great and well looked after and always seems in great condition and happy and well fed when I’m home. She’s a scaredy-cat, but loves Molly! Total piece of mind when I’m away. Thanks so much!', name:'David', display: true, area: 'Leigh-on-Sea'},
            {id:'-1', service: 'house', review: 'Molly is a really lovely person who loves animals and looks after all our pets with love and attention like they are her own. She not only looks after your pets but your home too it was as I left it clean and tidy. I would highly recommend her services 5 ☆ service x', name:'Joanne', display: true, area: 'Westcliff'}
        ]
    }

    componentDidMount = () => {
        fetchReviews()
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                this.setState({
                    reviews: [...this.state.reviews, ...data]
                })
            }
        })
    }

    displayForUser = () => {
        // The following code alternates a specific services picture. i.e. pic 1, pic 2, pic 1 ...
        let iterations = [-1, -1, -1]
        let chosenPicture 

        return this.state.reviews.map((review,index) => {
            if (review.service === 'dog') {
                iterations[0]++
                chosenPicture = iterations[0]%2
            }
            if (review.service === 'cat') {
               iterations[1]++ 
               chosenPicture = iterations[1]%2
            } 
            if (review.service === 'house') {
                iterations[2]++
                chosenPicture = iterations[2]%2
            } 

            return <Review 
                currentUser={this.props.currentUser}
                handleDisplaySwitch={this.handleDisplaySwitch}
                handleDelete={this.handleDelete}
                chosenPicture={chosenPicture}
                data={this.state.reviews[index]}
                service={review.service}
                display={review.display}
                showExtra img={review.img}
                review={review.review}
                name={review.name}
                key={review.id}
                area={review.area}
            />
        })
    }

    displayForNonUser = () => {
        let iterations = [-1, -1, -1]
        let chosenPicture 
        return this.state.reviews.map(review => {
            if (review.service === 'dog' && review.display) {
                iterations[0]++
                chosenPicture = iterations[0]%2
            }
            if (review.service === 'cat' && review.display) {
               iterations[1]++ 
               chosenPicture = iterations[1]%2
            } 
            if (review.service === 'house' && review.display) {
                iterations[2]++
                chosenPicture = iterations[2]%2
            } 

            return review.display &&
            <Review 
                chosenPicture={chosenPicture}
                service={review.service} 
                display={review.display}
                review={review.review}
                name={review.name}
                key={review.id}
                area={review.area}
            />
        })
    }

    handleDelete = id => {
        deleteReview(id)
        this.setState({
            reviews: this.state.reviews.filter(rev => rev.id !== id)
        })
    }

    handleDisplaySwitch = (id, boolean) => {
        patchReview(id, boolean)
        const elementsIndex = this.state.reviews.findIndex(review => review.id === id )
        let newArray = [...this.state.reviews]
        newArray[elementsIndex] = {...newArray[elementsIndex], display: boolean}
        this.setState({
            reviews: newArray
        })
    }
    

    render() {
        return (
            <Div>
                <H1>Customer Reviews</H1>
                {   this.props.currentUser
                    ? this.displayForUser()
                    : this.displayForNonUser()
                }
                <br />
                <ReviewForm reviews={this.state.reviews}/>
            </Div>
        )
    }
}

export default Reviews

