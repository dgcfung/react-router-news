import React from "react";
import Header from "./Header";

import { withRouter } from "react-router-dom";

const Welcome = props => {
  return (
    <div className="welcome-container">
      <Header lastQuery="owl's" />
      <h2>Please select a category</h2>
      <div className="button-container">
        <button
          className="welcome-button"
          onClick={() => props.history.push("/top-news")}
        >
          top US
        </button>
        <button
          className="welcome-button"
          onClick={() => props.history.push("/all-news")}
        >
          all news
        </button>
      </div>
    </div>
  );
};

export default withRouter(Welcome);
