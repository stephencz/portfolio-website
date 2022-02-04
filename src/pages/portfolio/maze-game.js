import * as React from "react"
import { graphql } from "gatsby";

import Helmet from "react-helmet";

import StandardLayout from "../../layouts/StandardLayout";
import Content from '../../components/Content/Content';
import PortfolioIntroduction from "../../components/Portfolio/PortfolioIntroduction/PortfolioIntroduction";
import PortfolioDemoAndSource from "../../components/Portfolio/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../../components/Portfolio/PortfolioTechnologies/PortfolioTechnologies";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";

const MazeGamePortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <Helmet>
        <title>Maze Game | Full Stack Software Engineer</title>
        <meta name="description" content="A maze generation and solving game made with Java and LibGDX. Made by Stephen Czekalski." />
      </Helmet>
      <StandardLayout>
        <Content>
        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="A static chessboard generated using jekyll-chess.">
          <p>
            Maze Game is a game which is capable of generating square and hexagonal mazes that the user has to escape.
            I created the game using <b>Java</b> and the <b>LibGDX</b> game development framework. 
            During the project I made heavy use of <b>Object-Oriented Programming</b> technqiues and advanced Java language features such as generic types.
            Additionally, I implemented highly abstracted versions of a backtracking algorithm and the Aldous-Broder algorithm to generate mazes composed of any 2D shape with three or more sides.
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
  query MazeGamePageQuery {
    allProjectsJson(filter: {project_id: { eq:"maze-game"}}) {
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

export default MazeGamePortfolioPage