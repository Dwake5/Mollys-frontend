import React, { Component } from "react";

import { patchNews } from "../../../Services/api";

class NewsForm extends Component {
  state = {
    news: "",
  };

  updateState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNews = () => {
    if (this.state.news.length < 5) {
      alert("That is some very short news, please make it longer.");
    } else {
      patchNews(this.state.news);
      alert("News has been successfully updated!");
    }
  };

  render() {
    return (
      <div>
        <textarea
          required
          type="text"
          value={this.state.news}
          placeholder="Whats new.."
          name="news"
          onChange={this.updateState}
        />
        <button onClick={() => this.submitNews()}>Submit</button>
      </div>
    );
  }
}

export default NewsForm;
