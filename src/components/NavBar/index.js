import React, { Component } from "react";
import { fetchNews } from "../../Services/api";
import ContactDiv from "./ContactDiv";
import HyperLinks from "./HyperLinks";
import { NavDiv } from "./style";

class NavBar extends Component {
  state = {
    formOpen: false,
    currentNews: [],
    newsHeight: 100,
  };

  toggleForm = () => {
    this.setState({
      formOpen: !this.state.formOpen,
    });
  };

  componentDidMount = () => {
    fetchNews().then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        this.setState({
          currentNews: data.news,
        });
      }
    });

    setTimeout(this.handleNewsHeight, 500);
  };

  handleNewsHeight = () => {
    if (document.getElementById("news")) {
      const height = document.getElementById("news").offsetHeight;
      this.setState({ newsHeight: height });
    }
  };

  render() {
    return (
      <NavDiv>
        <HyperLinks />

        {this.props.height > 512 && <ContactDiv />}
      </NavDiv>
    );
  }
}

export default NavBar;
