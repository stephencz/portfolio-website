import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";
import Content from '../../components/Content/Content';

import StandardLayout from "../../layouts/StandardLayout";

const TaskManagerPortfolioPage = ({ data }) => {

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
              <Col lg={{ span: 5, offset: 1 }}>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
              </Col>
              <Col lg={{ span: 4, offset: 1}}>
                <img className="portfolio-project-introduction-image" src={data.allProjectsJson.nodes[0].image} alt="An image of the latest version of Task Manager"/>
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

            <Col lg={{span: 4, offset: 1}}>
              <Row>
                <Col lg={ 12 }><h2>Source Code</h2></Col>
                <Col lg={ 12 }>
                  <p> 
                    The source code for this project can be found on <a href="">GitHub</a>.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 10, offset: 1}}><h2>Background</h2></Col>
          </Row>
          <Row>
            <Col lg={{span: 5, offset: 1}}>

            </Col>
            <Col lg={{span: 4, offset: 1}}>
              
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 10, offset: 1}}><h2>Challenges</h2></Col>
          </Row>
          <Row>
            <Col lg={{span: 5, offset: 1}}>

            </Col>
            <Col lg={{span: 4, offset: 1}}>
              
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 10, offset: 1}}><h2>Things I Would Like to Add</h2></Col>
          </Row>
          <Row>
            <Col lg={{span: 5, offset: 1}}>

            </Col>
            <Col lg={{span: 4, offset: 1}}>
              
            </Col>
          </Row>
        </Container>
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
      }
    }
  }
`;

export default TaskManagerPortfolioPage