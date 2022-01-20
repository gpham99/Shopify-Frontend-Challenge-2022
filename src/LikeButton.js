import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likeActive: false,
    };
  }

  setLike() {
    this.setState({ likeActive: !this.state.likeActive });
  }

  render() {
    return (
      <IconButton
        aria-label="add to favorites"
        onClick={() => this.setLike()}
        color={this.state.likeActive ? "error" : "default"}
      >
        <FavoriteIcon />
      </IconButton>
    );
  }
}

export default LikeButton;
