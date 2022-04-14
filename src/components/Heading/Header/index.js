import React from "react";
import { H1, H2, HeadDiv, Quote } from "./style";

class Header extends React.Component {
  state = {
    currentQuote: "",
    messages: [
      '"Wake up early everyday, so that while others are still dreaming, you can make your dreams come true"',
      '"If you want to be successful in this world, you have to follow your passion, not a paycheck"',
      `"You can't change a dogs past, but you could rewrite their future"`,
      '"Animals do speak, but only to those who know how to listen"',
      '"It takes nothing away from a human to be kind to an animal"',
    ],
  };

  componentDidMount = () => {
    const { displayNewQuote, displaySameQuote } = this;

    // See what day it is and when they last viewed the page, and the last quote in order to not show it to them twice in a row.
    let date = new Date().getDate();
    let firstVisit = !localStorage.hasOwnProperty("lastLogin");

    // First visit, display a quote and set lastLogin
    if (firstVisit) {
      displayNewQuote();
      localStorage.setItem("lastLogin", date);
    }

    if (!firstVisit) {
      // If they have visited before and its not the same day display a new different quote and set lastLogin
      if (date !== Number(localStorage.getItem("lastLogin"))) {
        displayNewQuote(localStorage.getItem("lastQuote"));
        localStorage.setItem("lastLogin", date);
      } else {
        // They have logged in before, but it was today so display the same quote.
        displaySameQuote();
      }
    }
  };

  displayNewQuote = (ignore = null) => {
    const { messages } = this.state;
    let chosenQuote = Math.floor(Math.random() * messages.length);
    if (chosenQuote === ignore) {
      this.displayNewQuote(ignore);
    }
    this.setState({
      currentQuote: messages[chosenQuote],
    });
    localStorage.setItem("lastQuote", chosenQuote);
  };

  displaySameQuote = () => {
    this.setState({
      currentQuote: this.state.messages[localStorage.getItem("lastQuote")],
    });
  };

  render() {
    return (
      <HeadDiv>
        <H1>Molly's Pet & Home Care</H1>
        <H2>for when you can't be there</H2>
        <Quote>Quote of the Day: {this.state.currentQuote}</Quote>
      </HeadDiv>
    );
  }
}

export default Header;
