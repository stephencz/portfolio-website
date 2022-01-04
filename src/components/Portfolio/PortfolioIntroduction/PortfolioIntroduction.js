import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './PortfolioIntroduction.scss';

const PortfolioIntroduction = (props) => {
  
  return (
    <Container>
      <Row>
        <Col xl={{span: 10, offset: 1}}>
          <h1>{ props.project.name }</h1>
          </Col>
      </Row>
      <Row>
          <Col xl={{ span: 10, offset: 1 }}>
            { props.children }
          </Col>
      </Row>

      <Row>
        <Col xl={10} className="mx-auto" >
            <img 
              className="portfolio-project-introduction-image" 
              style={{ backgroundColor: props.project.color }} 
              src={ props.project.image } 
              alt={ props.alt} 
            />
        </Col>
      </Row>
    </Container>
  );

}

export default PortfolioIntroduction;