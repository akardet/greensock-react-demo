import React, { Component } from "react"

import Layout from "../components/layout"
import Landing from "../components/landing"
import Cards from "../components/cards"

export default class index extends Component {
  render() {
    return (
      <Layout>
        <Landing />
        <Cards />
      </Layout>
    )
  }
}
