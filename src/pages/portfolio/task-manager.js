import * as React from "react"
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import StandardLayout from "../../layouts/StandardLayout";
import Content from '../../components/Content/Content';
import PortfolioIntroduction from "../../components/Portfolio/PortfolioIntroduction/PortfolioIntroduction";
import PortfolioDemoAndSource from "../../components/Portfolio/PortfolioDemoAndSource/PortfolioDemoAndSource";
import PortfolioTechnologies from "../../components/Portfolio/PortfolioTechnologies/PortfolioTechnologies";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";


const TaskManagerPortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <StandardLayout>
        <Content>

        <PortfolioIntroduction project={ data.allProjectsJson.nodes[0] } alt="The frontend user interface for the Task Manager web application.">
          <p>
          Task Manager is a full stack web application I created to help track, organize, and manage the tasks I need to complete.
          The application allows the user to create tasks, and organize those tasks using custom tags and deadlines.
          Tasks can be sorted and filtered by description, tag, or deadline to only show whats relevant.
          </p>
          <p>
          The four chief technologies used in this project were <b>React</b>, <b>Redux</b>, <b>Node.js</b>, and <b>Express.js</b>.
          React and Redux were used to design the frontend user interface.
          While Node.js and Express.js were used to create a backend <b>REST API</b> for performing standard <abbr title="Create, Read, Update, and Delete">CRUD</abbr> operations on the task and tag resources.
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
  query TaskManagerPageQuery {
    allProjectsJson(filter: {project_id: { eq:"task-manager"}}) {
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

export default TaskManagerPortfolioPage