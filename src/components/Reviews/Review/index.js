import React, { Component } from "react";

import {
  ReviewDiv,
  Img,
  BottomText,
  MainText,
  Config,
  Button,
  ButtonDelete,
  ConfirmButton,
  Span,
} from "./style";

import dog1 from "../Images/dogpic1.jpg";
import dog2 from "../Images/dogpic2.png";
import cat1 from "../Images/catpic1.jpg";
import cat2 from "../Images/catpic2.jpg";
import house1 from "../Images/housepic1.png";
import house2 from "../Images/housepic2.jpg";

const truncValue = 400;

class Review extends Component {
  state = {
    truncated: this.props.review.length > truncValue ? true : false,
    beenChanged: false,
    confirmDeleteButton: false,
  };

  matchService = (service, binary) => {
    if (service === "dog") {
      return binary ? dog1 : dog2;
    } else if (service === "cat") {
      return binary ? cat1 : cat2;
    } else {
      return binary ? house1 : house2;
    }
  };

  capitalize = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };

  handleName = (name) => {
    if (this.props.currentUser) return name;
    name = name.trim();
    let splitName = name.split(" ");
    let newName = "";
    newName += this.capitalize(splitName[0]);
    return splitName.length === 1
      ? newName
      : (newName +=
          " " + this.capitalize(splitName[splitName.length - 1].slice(0, 1)));
  };

  shorten = (review) => {
    let shorterReview = review.slice(0, truncValue).trim() + "... ";
    return shorterReview;
  };

  dontTruncate = () => {
    this.setState({ truncated: false, beenChanged: true });
  };

  doTruncate = () => {
    this.setState({ truncated: true });
  };

  openConfirm = () => {
    this.setState({
      confirmDeleteButton: true,
    });
  };

  render() {
    const {
      data,
      service,
      review,
      name,
      showExtra,
      display,
      handleDisplaySwitch,
      handleDelete,
      chosenPicture,
      area,
    } = this.props;
    const { truncated, beenChanged, confirmDeleteButton } = this.state;
    const {
      matchService,
      dontTruncate,
      doTruncate,
      shorten,
      handleName,
      openConfirm,
      capitalize,
    } = this;

    return (
      <ReviewDiv>
        <Img src={matchService(service, chosenPicture)} />
        {!truncated && (
          <MainText>
            {review}
            {beenChanged && <Span onClick={() => doTruncate()}> See Less</Span>}
          </MainText>
        )}
        {truncated && (
          <MainText>
            {shorten(review)}
            <Span onClick={() => dontTruncate()}>Read More</Span>
          </MainText>
        )}
        <BottomText>
          {handleName(name)}, {capitalize(area)}
        </BottomText>
        {showExtra && data.id > 0 && (
          <Config>
            <Button
              onClick={() => handleDisplaySwitch(data.id, true)}
              bright={display}
            >
              Shown
            </Button>
            <Button
              onClick={() => handleDisplaySwitch(data.id, false)}
              bright={!display}
            >
              Hidden
            </Button>
            {!confirmDeleteButton ? (
              <ButtonDelete onClick={() => openConfirm()}>Delete</ButtonDelete>
            ) : (
              <ConfirmButton onClick={() => handleDelete(data.id)}>
                Are you sure?
              </ConfirmButton>
            )}
          </Config>
        )}
      </ReviewDiv>
    );
  }
}

export default Review;
