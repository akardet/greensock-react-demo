import React, { Component } from "react"
import TimelineButtons from "../components/timelineButtons"

export default class landing extends Component {
  render() {
    return (
      <section tabIndex="0" id="landing" className="landing">
        <h1>Playing with Greensock</h1>
        <h2>By: Sam</h2>
        <TimelineButtons />
      </section>
    )
  }
}
