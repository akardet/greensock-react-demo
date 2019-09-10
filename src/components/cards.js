import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

// import TimelineButtons from "../components/timelineButtons";
import { dataArray } from "../components/data/cardData";

export default class cards extends Component {
  constructor(props) {
    super(props);
    this.cards = [];
    this.tl = new TimelineLite({
      paused: true,
    });
    this.cardTween = null;
  }

  componentDidMount() {
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
  }

  render() {
    this.tl
      .kill()
      .clear()
      .pause(0);

    return (
      <section tabIndex="0" id="cards" className="cards">
        <div className="timelineBtns">
          <button className="btn ripple" onClick={() => this.tl.play()}>
            Play
          </button>
          <button className="btn ripple" onClick={() => this.tl.pause()}>
            Pause
          </button>
          <button className="btn ripple" onClick={() => this.tl.reverse()}>
            Reverse
          </button>
          <button className="btn ripple" onClick={() => this.tl.restart()}>
            Restart
          </button>
        </div>
        <div className="cards__container">
          {// map through the elements
          dataArray.map((element, index) => (
            <div
              key={element.id}
              className="card-element"
              ref={div => (this.cards[index] = div)}
            >
              <div tabIndex="0" role="card" className="card">
                <div className="card-body">
                  <h4>{element.name}</h4>
                  <div className="media">
                    <img
                      className="mr-3"
                      src="https://source.unsplash.com/random"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
