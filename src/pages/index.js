import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import Introduction from "../components/Home/Introduction/Introduction"
import PortfolioBrowser from "../components/Home/PortfolioBrowser/PortfolioBrowser"


const IndexPage = (prop) => {
  return (
    <main>
      <Introduction />
      <PortfolioBrowser />
    </main>
  )
}

export default IndexPage