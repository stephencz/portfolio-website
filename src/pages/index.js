import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "../components/Home/Navigation/Navigation"
import Introduction from "../components/Home/Introduction/Introduction"
import PortfolioBrowser from "../components/Home/PortfolioBrowser/PortfolioBrowser"


const IndexPage = (prop) => {
  return (
    <main>
      <Navigation />
      <Introduction />
      <PortfolioBrowser />
    </main>
  )
}

export default IndexPage