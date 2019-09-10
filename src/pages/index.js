import React, { Component } from "react"
import "../sass/main.scss"
import { TimelineLite, Back } from "gsap/all"
export default class index extends Component {
  constructor(props) {
    super(props)
    this.myElement = null
    this.myTween = null
  }

  componentDidMount() {
    this.myTween = new TimelineLite().to(this.myElement, 4, {
      x: 400,
      ease: Back.easeIn,
    })
  }

  render() {
    return (
      <div>
        <h1>Greensock and React</h1>
        <div className="circle" ref={div => (this.myElement = div)} />;
      </div>
    )
  }
}
