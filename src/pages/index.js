import * as React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Introduction from "../components/Introduction/Introduction";
import ProjectTypeBrowser from "../components/ProjectTypeBrowser/ProjectTypeBrowser";

const IndexPage = (prop) => {
  return (
    <main>
      <Helmet>
        <title>Stephen Czekalski | Full Stack Software Engineer</title>
        <meta name="description" content="The programming and work portfolio of Stephen Czekalski a life long programmer and Full Stack Software Engineer." />
      </Helmet>
      <Navigation />
      <Introduction />
      <ProjectTypeBrowser />
    </main>
  )
}

export default IndexPage