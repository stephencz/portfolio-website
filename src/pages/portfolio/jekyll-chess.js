import * as React from "react"
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import StandardLayout from "../../layouts/StandardLayout";
import Content from '../../components/Content/Content';
import PortfolioIntroduction from "../../components/Portfolio/PortfolioIntroduction/PortfolioIntroduction";
import PortfolioDemoAndSource from "../../components/Portfolio/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../../components/Portfolio/PortfolioTechnologies/PortfolioTechnologies";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";

const JekyllChessPortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <StandardLayout>
        <Content>
        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="A static chessboard generated using jekyll-chess.">
          <p>
            Jekyll Chess is a plugin for the static website generator <b>Jekyll</b> which can generate static chessboards from FEN Notation.
            FEN Notation is a standard for representing the state of a chessboard on a single turn of a game. 
            For this plugin I used <b>Ruby</b> and its support for the <b>Object Oriented Programming</b> paradigm to parse FEN Notation, create a representation of a chessboard in memory, and then render that chessboard as an <b>HTML</b> table.
            Finally, I used <b>SASS</b> to style the <b>HTML</b> table to look like a proper chessboard.
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
  query JekyllChessPageQuery {
    allProjectsJson(filter: {project_id: { eq:"jekyll-chess"}}) {
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

export default JekyllChessPortfolioPage