import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import './PortfolioSection.scss'

const PortfolioSection = (props) => {
  return (
  <Container>
    <Row>
      <Col lg={{span: 10, offset: 1}}>
        <Row>
          <Col lg={ 12 }><h2>{ props.title }</h2></Col>
        </Row>
        <Row>
          <Col lg={ 12 }>{ props.children }</Col>
        </Row>
      </Col>
    </Row>
  </Container>
  );
}

export default PortfolioSection;