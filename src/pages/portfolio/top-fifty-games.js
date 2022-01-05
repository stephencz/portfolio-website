import * as React from "react"
import { graphql } from "gatsby";

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
      <StandardLayout>
        <Content>
        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="The homepage of topfiftygames.com.">
          <p>
            Top Fifty Games was a website I created for my capstone experience at Rowan University.
            The goal of the capstone experience was to create a website or application which used data from three to four public APIs.
            My team decided to create a website that would determine and display the top fifty highest rated video games of all time.
            Each game was displayed in a list and had its own dedicated page providing information such as publishers, platform availability, ESRB and PEGI ratings, as well as gameplay videos, images, and social media posts.
          </p>
          <p>
            During this project I led a team of four developers through a semester long, multi-phase, development project.
            We collected data from the IGDB, Youtube, Bing Image Search, and Reddit <b>REST API</b>s using <b>Python</b>.
            We configured a <b><abbr title="Linux, Nginx, MySQL, and PHP">LEMP</abbr></b> stack web server using <b><abbr title="Amazon Web Service">AWS</abbr></b> and <b>DigitalOcean</b>.
            We related and mapped our data in a <b>MySQL</b> database system. 
            And, finally, we designed a dynamic website to display our data using <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, and <b>PHP</b>.
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