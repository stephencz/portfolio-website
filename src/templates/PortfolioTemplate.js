import React from "react";
import { graphql } from "gatsby"

import StandardLayout from "../layouts/StandardLayout";
import { Helmet } from "react-helmet";

import Content from "../components/Content/Content";

import PortfolioContent from "../components/PortfolioContent/PortfolioContent";
import PortfolioDemoAndSource from "../components/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../components/PortfolioTechnologies/PortfolioTechnologies";

const PortfolioTemplate = (props) => {

  return (
    <main>
      <StandardLayout>  
        <Helmet>
          <title>{ props.pageContext.portfolioData.name } | Stephen Czekalski | Full Stack Software Engineer</title>
          <meta name="description" content={ props.pageContext.portfolioData.description } />
        </Helmet>
        <Content>
          <PortfolioContent project={ props.pageContext } />
          <PortfolioDemoAndSource project={ props.pageContext.portfolioData } />
          <PortfolioTechnologies project={ props.pageContext.portfolioData }/>
        </Content>
      </StandardLayout>
    </main>
  );

};

const data = graphql`
  
`

export default PortfolioTemplate;