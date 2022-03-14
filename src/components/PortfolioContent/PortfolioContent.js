import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PortfolioContent.scss";

const PortfolioContent = (props) => {

  console.log(props.project)

  return (
    <Container>
      <Row>
        <Col lg={10} className="mx-auto">
        <div className="portfolio-content">
          <h1>{ props.project.portfolioData.name }</h1>
          <div dangerouslySetInnerHTML={{ __html: props.project.html }}></div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioContent;