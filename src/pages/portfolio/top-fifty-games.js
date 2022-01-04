import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";

import Content from '../../components/Content/Content';
import SkillList from '../../components/SkillList/SkillList';

import StandardLayout from "../../layouts/StandardLayout";

const TopFiftyGamesPortfolioPage = ({ data }) => {

  console.log(data);

  return (
    <main>
      <StandardLayout>
        <Content>
        <Container>
          <Row>
            <Col lg={{span: 10, offset: 1}}><h1>{ data.allProjectsJson.nodes[0].name }</h1></Col>
          </Row>
          <Row>
              <Col xl={{ span: 8, offset: 1 }}>
              <p>
              Task Manager is a full stack web application I created to help track, organize, and manage the tasks I need to complete.
              The application allows the user to create tasks, and organize those tasks using custom tags and deadlines.
              Tasks can be sorted and filtered by description, tag, and deadline.
              </p>
              <p>
              The four chief technologies used in this project were <b>React</b>, <b>Redux</b>, <b>Node.js</b>, and <b>Express.js</b>.
              React and Redux were used to construct the frontend user interface.
              While Node.js and Express.js were used to create a backend <b>REST API</b> for performing standard <abbr title="Create, Read, Update, and Delete">CRUD</abbr> operations on the task and tag resources.
              </p>
              </Col>
          </Row>

          <Row>
            <Col xl={10} className="mx-auto">
                <img className="portfolio-project-introduction-image" src={data.allProjectsJson.nodes[0].image} alt="The user interface for latest version of Task Manager"/>
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Live Demo</h2></Col>
                <Col lg={ 12 }>
                  <p>
                  A live, frontend only, demo for this project can be found <a href={ data.allProjectsJson.nodes[0].demo_url }>here</a>. 
                  </p>
                </Col>
              </Row>
            </Col>

            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Source Code</h2></Col>
                <Col lg={ 12 }>
                  <p> 
                    The source code for this project can be found on <a href={ data.allProjectsJson.nodes[0].source_url }>GitHub</a>.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Background</h2></Col>
                <Col lg={ 12 }>
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
                </Col>
              </Row>
            </Col>

            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Technologies</h2></Col>
                <Col lg={ 12 }>
                <SkillList project={ data.allProjectsJson.nodes[0] } />
                </Col>
              </Row>
            </Col>
          </Row>


          <Row>
            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Wins and Successes</h2></Col>
                <Col lg={ 12 }>
                  <p>
                  Without a doubt, the one of greatest successes of this project was simply making a useable piece of software.
                  </p>
                </Col>
              </Row>
            </Col>

            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Mistakes and Regrets</h2></Col>
                <Col lg={ 12 }>
                  <p> 
                    The source code for this project can be found on <a href={ data.allProjectsJson.nodes[0].source_url }>GitHub</a>.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>What I Would Have Done Differently</h2></Col>
                <Col lg={ 12 }>
                  <p>
                  A live, frontend only, demo for this project can be found <a href={ data.allProjectsJson.nodes[0].demo_url }>here</a>. 
                  </p>
                </Col>
              </Row>
            </Col>

            <Col lg={{span: 5, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>What I Would Like Add</h2></Col>
                <Col lg={ 12 }>
                  <p> 
                    The source code for this project can be found on <a href={ data.allProjectsJson.nodes[0].source_url }>GitHub</a>.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
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