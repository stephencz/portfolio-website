import React from "react";

import StandardLayout from "../layouts/StandardLayout";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation"
import Content from "../components/Content/Content";

const PortfolioTemplate = ({children}) => {

  return (
    <main>
      <Navigation />
      <StandardLayout>  
        <Helmet>
          <title>Fake Tweet Generator | Stephen Czekalski | Full Stack Software Engineer</title>
          <meta name="description" content="A web application that can be used to generate fake tweets. Made for educational purposes by Stephen Czekalski." />
        </Helmet>
        <Content>
          { children }
        </Content>
      </StandardLayout>
    </main>
  );

};

export default PortfolioTemplate;