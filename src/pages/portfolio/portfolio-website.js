import * as React from "react"
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import StandardLayout from "../../layouts/StandardLayout";
import Content from '../../components/Content/Content';
import PortfolioIntroduction from "../../components/Portfolio/PortfolioIntroduction/PortfolioIntroduction";
import PortfolioDemoAndSource from "../../components/Portfolio/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../../components/Portfolio/PortfolioTechnologies/PortfolioTechnologies";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";


const PortoflioWebsitePortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <Helmet>
        <title>Portfolio Website | Stephen Czekalski | Full Stack Software Engineer</title>
        <meta name="description" content="A portfolio website to show off the projects completed by Stephen Czekalski." />
      </Helmet>
      <StandardLayout>
        <Content>

        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="the homepage of Stephen Czekalski's portfolio website">
          <p>
            My portfolio website is a website I created to show off who I am and my past work.
            The website was built using the static website generator <b>Gatsby</b>.
            The user interface was designed with <b>React</b>.
            And <b>GraphQL</b> was used to query <b>JSON</b> data and easily generate new content.
          </p>
        </PortfolioIntroduction>

        <PortfolioDemoAndSource project={ data.allProjectsJson.nodes[0] } hasDemo={ true } hasSource={ true } />

        <PortfolioTechnologies project={ data.allProjectsJson.nodes[0] }/>
        </Content>
      </StandardLayout>
    </main>
  )
}

export const query = graphql`
  query PortfolioWebsitePageQuery {
    allProjectsJson(filter: {project_id: { eq:"portfolio-website"}}) {
      nodes {
        image
        url
        skills
        name
        color
        demo_url
        source_url
      }
    }
  }
`;

export default PortoflioWebsitePortfolioPage;