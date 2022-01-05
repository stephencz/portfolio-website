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
          React and Redux were used to construct the frontend user interface.
          While Node.js and Express.js were used to create a backend <b>REST API</b> for performing standard <abbr title="Create, Read, Update, and Delete">CRUD</abbr> operations on the task and tag resources.
          </p>
        </PortfolioIntroduction>

        <PortfolioDemoAndSource project={ data.allProjectsJson.nodes[0] } hasDemo={ false } hasSource={ true } />

        <PortfolioTechnologies project={ data.allProjectsJson.nodes[0] }/>

        <PortfolioSection title="Background" >
          <p>
          In college, I used a spreadsheet to keep myself organized.
          As work was assigned, I would enter a description of it, the class it was for, and it due date.
          Using this method I was able to easily stay on top of all my work, and I was rarely overwhelmed.
          </p>

          <p>
            While spreadsheets are a wonderful tool, they are cumbersome to use.
            Excel and Google Sheets are designed to cater to business and statistical needs.
            While entering data is straightforward, it isn't intuitive.
            Additionally, formatting data to make it readable at a glance requires conditional formatting which is finicky and takes time to get right.
          </p>

          <p>
            After graduating, I made Task Manager my first project.
            My goal was to create an application that could replace my spreadsheet, but be flexible enough to capture tasks for a wide variety of areas of life.
            I wanted to be able to capture tasks relating to work and my job search, maintaining my house and yard, personal goals, interpersonal needs, etc.
          </p>
        </PortfolioSection>

        <PortfolioSection title="Biggest Success">
          <p>
            The biggest success of this project was the frontend. 
            This was only my third project using React, and compared to my past projects it was far more complex.
            One of the chief difficulties of React, and frontend UI work in general, is state management.
            I specifically taught myself Redux to make creating a complex frontend more easier and I believe it went well.
          </p>

          <p>
            I was able to implement UI features such as selectable list items and the bulk application of operations, such as adding a tag or setting a deadline, based on what was selected.
            Additionally, the frontend features drop down tag adding and remove lists, and a drop down calendar for setting the deadline.
            Overall, the UI looks clean and is easy to use which is exactly what I was going for.
          </p>
        </PortfolioSection>

        <PortfolioSection title="Biggest Mistake">
          <p>
            The biggest mistake I made during this project was using string concatenation to build the REST APIs SQL queries.
            Using string concatenation to build SQL queries is almost always a bad idea because it opens an application up to SQL injection attacks.
            To fix this I had to convert all the existing queries I wrote to properly formed parameterized queries.
            This was time consuming and unenjoyable.
            Another way I could have fixed this issue was using an Object-Relational Mapping library such as Sequelize. 
            Using an ORM would have greatly simplified my backend, while keep user input sanitized and safe.
          </p>
        </PortfolioSection>

        <PortfolioSection title="Features I Would Like to Add">
          <p>
            There are two features I would like to add to this project in the future: One small and one large.
          </p>

          <p>
            Firstly, I would like to add a color picker to the tag management menu. 
            One of the main features of tags is that they can be colored to however the user desires.
            The main benefit of doing this is it allows users to identify different categories of tasks at a glance.
            Currently, setting colors is not user friendly. 
            The user has to manually input a hex code.
            I attempted to add one early on in the project, but I couldn't find a pre-existing library that worked as I needed it too.
            I decided to move on with implementing the core features of the application, instead of getting bogged down on accessibility features.
          </p>

          <p>
            Secondly, I would like to add authentication and the ability to have multiple users.
            As I stated previously, I started this project as a personal tool to replace my spreadsheet system of managing tasks.
            It is something I wanted to self-host on a private local machine (a Raspberry Pi to be exact).
            Accordingnly, there wasn't any need for a user system or authentication.
            While this is fine for my purposes, the application would be better if it was accessible via the Internet and had the option to support multiple users.
          </p>
        </PortfolioSection>
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