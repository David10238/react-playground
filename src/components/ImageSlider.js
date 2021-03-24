import React from "react";

// set state is asyncronous

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
      "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
      "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
      "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg",
    ],
    idx: 0,
  };

  handleNext = () => {
    let nextImg = this.state.idx + 1;
    if (nextImg >= this.state.images.length) nextImg = 0;
    // this is a shallow merge.
    this.setState(
      {
        idx: nextImg,
      },
      () => {
        console.log("Callback from asynch");
      }
    );
    console.log("Printed after asynch");
  };

  render() {
    return (
      <div>
        <p>ImageSlider...</p>
        <img
          style={{
            width: 500,
            height: 500,
          }}
          src={this.state.images[this.state.idx]}
        />
        <div />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
