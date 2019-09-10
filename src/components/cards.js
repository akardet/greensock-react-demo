import React, { Component } from "react"
import { TimelineLite, CSSPlugin } from "gsap/all"

export default class cards extends Component {
  constructor(props) {}

  componentDidMount() {}

  render() {
    this.tl
      .kill()
      .clear()
      .pause(0)

    return <section tabIndex="0" id="cards" className="cards"></section>
  }
}
