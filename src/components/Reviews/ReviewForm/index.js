import React, { Component } from 'react';

import { H2, FormDiv, Label, Input, Select, Textarea, Button, ButtonDiv, Required, Red } from './style'

import { postReview } from "../../../Services/api";

class ReviewForm extends Component {
  state = {
    name: "",
    area: "",
    service: "dog",
    review: "",
    errors: []
  };

  sendEmail = (name, area, message) => {
    
    window.emailjs.init("user_eEDLQRiYBnrH92MR22rZA"); //please encrypted user id for malicious attacks
    
    let templateParams = {
      toWho: 'mollywakeling@icloud.com',
      fromName: name,
      fromArea: area,
      review: message,
    };

    window.emailjs.send('gmail', 'template_ueLGSsep', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

  resetState = () => {
    this.setState({
        review: "",
        name: "",
        area: "",
        service: "dog",
    })
  }

  componentDidMount = () => {
    let formData = JSON.parse(sessionStorage.getItem('lastForm'))
    if (sessionStorage.lastForm) {
      this.setState({
        name: formData.name,
        area: formData.area,
        service: formData.service,
        review: formData.review,
      })
    }
  }

  componentWillUnmount = () => {
    const { name, area, service, review } = this.state
      sessionStorage.setItem('lastForm', JSON.stringify({name: name, area: area, service: service, review: review}))
  }

  cutSidesOfText = text => {
    let start, end 
  
    for ( let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i)
      if ( (char > 64 && char < 91) || (char > 96 && char < 123) ) {
        start = i
        break
      }
    }
  
    for ( let j = text.length; j >= 0; j--) {
      let char = text.charCodeAt(j)
      if ( (char > 64 && char < 91) || (char > 96 && char < 123) ) {
        end = j
        break
      }
    }
  
    return text.slice(start, end+1)
  }

  handleSubmit = event => {
    event.preventDefault()
    const { review, name, area, service } = this.state
    let validationPassed = true
    let errorsLocal = []

    // Error Handling

    // Name

    let newName = this.cutSidesOfText(name)
    let newArea = this.cutSidesOfText(area)

    if (newName.length < 2) {
      validationPassed = false
      errorsLocal.push('Name is too short')
    }

    if (!/^[a-zA-Z\s]*$/i.test(newName)) {
      validationPassed = false
      errorsLocal.push('Name must be only letters and spaces')
    }

    // Area
    if (newArea.length < 3) {
      validationPassed = false
      errorsLocal.push('Area is too short')
    }

    if (!/^[A-Za-z\s-]+$/i.test(newArea)) {
      validationPassed = false
      errorsLocal.push('Area must be only letters, hyphens and spaces')
    }

    // Review
    if (review.length < 10) {
      validationPassed = false
      errorsLocal.push('Review is too short')
    }

    this.setState({
      errors: [...errorsLocal]
    })

    if (validationPassed) {
      postReview(review, newName, newArea, service, false )
      .then(data => {
        if (data.error) {
          alert(data.error) 
        } 
      }) 
      localStorage.removeItem('lastForm')
      this.sendEmail(name, area, review)
      this.resetState()
      alert('Thanks for the review! \r\n Your review has been submitted, pending approval.')
    }
  
  }

  updateState = e => {
      this.setState({ [e.target.name]: e.target.value})
  };

  render() {
    return (
      <FormDiv>
        <H2>Leave a review...</H2>
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <Label>
            Name: <Required>*</Required>
          </Label>
          <Input required type="text" value={this.state.name} placeholder="John Smith.." name="name" onChange={this.updateState}/>
  
          <Label>
            Area: <Required>*</Required>
          </Label>
          <Input required type="text" value={this.state.area} placeholder="Leigh-on-Sea.."  name="area" onChange={this.updateState}/>

          <Label>
            Service Provided:
          </Label>

          <Select name='service'  onChange={this.updateState}>
              <option value="dog">Dog Walking</option>
              <option value="cat">Pet Vistits</option>
              <option value="house">House Sitting</option>
          </Select>

          <Label>
            Review: <Required>*</Required>
          </Label>
          <Textarea required value={this.state.review} placeholder='Review..' type="text" name="review" onChange={this.updateState}/>

          { this.state.errors.length > 0 && 
            <ul>
              {this.state.errors.map((error, i) => <li key={i}>{<Red>{error}</Red>}</li>)}
            </ul>
          }

          <ButtonDiv>
            <Button>Submit Review</Button>
          </ButtonDiv>
        </form>
      </FormDiv>
    )
  }  
}

export default ReviewForm;