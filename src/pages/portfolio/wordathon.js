import * as React from "react"
import { graphql } from "gatsby";

import Helmet from "react-helmet";
import StandardLayout from "../../layouts/StandardLayout";
import Content from '../../components/Content/Content';
import PortfolioIntroduction from "../../components/Portfolio/PortfolioIntroduction/PortfolioIntroduction";
import PortfolioDemoAndSource from "../../components/Portfolio/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../../components/Portfolio/PortfolioTechnologies/PortfolioTechnologies";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";


const WordathonPortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <Helmet>
        <title>Wordathon | Full Stack Software Engineer</title>
        <meta name="description" content="A word game inspired by the popular game Wordle. Made by Stephen Czekalski." />
      </Helmet>
      <StandardLayout>
        <Content>

        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="The Wordathon user interface.">
          <p>
          Wordathon is a take on the popular word game <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>.
          Unlike Wordle, which only gives the player one puzzle a day, Wordathon challenges the user to solve several puzzles in a row to build
          up a streak. Additionally, the game features difficulty levels to make the game more, or less, challenging.
          </p>
          <p>
          The two technologies at the core of Wordathon are <b>React</b> and <b>Redux</b>.
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
  query WordathonPageQuery {
    allProjectsJson(filter: {project_id: { eq:"wordathon"}}) {
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

export default WordathonPortfolioPage