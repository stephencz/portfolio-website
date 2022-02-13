import * as React from "react"
import { graphql } from "gatsby";

import Helmet from "react-helmet";

import StandardLayout from "../../layouts/StandardLayout";
import Content from '../../components/Content/Content';
import PortfolioIntroduction from "../../components/Portfolio/PortfolioIntroduction/PortfolioIntroduction";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";
import PortfolioDemoAndSource from "../../components/Portfolio/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../../components/Portfolio/PortfolioTechnologies/PortfolioTechnologies";

const TopFiftyGamesPortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <Helmet>
        <title>Top Fifty Games | Stephen Czekalski | Full Stack Software Engineer</title>
        <meta name="description" content="A website that displays the top fifty highest rated video games of all time. Made by Stephen Czekalski." />
      </Helmet>
      <StandardLayout>
        <Content>
        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="The homepage of topfiftygames.com.">
          <p>
            Top Fifty Games was a website I created for my capstone experience at <a href="https://www.rowan.edu/" target="_blank">Rowan University</a>.
            The website used data from four public REST APIs to determine and display the top fifty highest rated video games of all time.
            Each game was ranked in a list and had a dedicated page providing information about the game's release date, platform availability, publishers, ESRB/PEGI ratings, as well as gameplay videos, images, and social media posts.
          </p>

          <p>
            During this project I led a team of four developers.
            We used <b>Python</b> to pull data from four public <b>REST APIs</b> .
            We used <b>AWS</b> and <b>DigitalOcean</b> to configure a <b>LEMP</b> (<b>Linux</b>, <b>Nginx</b>, <b>MariaDB</b>, and <b>PHP</b>) stack webserver.
            We parsed our <b>JSON</b> data and stored in a RDBMS.
            And, finally, we designed a reponsive website to display our data using <b>HTML</b>, <b>CSS</b>, <b>PHP</b>, and <b>Bootstrap</b>.
            
          </p>
        </PortfolioIntroduction>

        <PortfolioDemoAndSource project={ data.allProjectsJson.nodes[0] } hasDemo={ false } hasSource={ true } />

        <PortfolioTechnologies project={ data.allProjectsJson.nodes[0] }/>

        </Content>
      </StandardLayout>
    </main>
  )
}

export const query = graphql`
  query TopFiftyGamesQuery {
    allProjectsJson(filter: {project_id: { eq:"top-fifty-games"}}) {
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

export default TopFiftyGamesPortfolioPage