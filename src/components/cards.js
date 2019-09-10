import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

import TimelineButtons from "../components/timelineButtons";

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
        <TimelineButtons />
      </section>
    );
  }
}
