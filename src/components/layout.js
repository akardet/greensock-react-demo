import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Greensock Stuff</title>
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
