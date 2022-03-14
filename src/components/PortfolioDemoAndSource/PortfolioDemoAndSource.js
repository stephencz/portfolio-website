import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './PortfolioDemoAndSource.scss';

const PortfolioDemoAndSource = (props) => {
  const getDemo = () => {
    if(props.project.demo_url !== null) {
      return (
        <p>A live demo for this project can be found <a href={ props.project.demo_url }>here</a>.</p>
      );

    }

    return (
      <p>A live demo is not available for this project.</p>
    );
  }

  const getSource = () => {
    if(props.project.source_url !== null) {
      return (
        <p>The source code for this project can be found <a href={ props.project.source_url }>here</a>.</p>
      );
    }

    return (
      <p>The source code for this project is not publicly available.</p>
    );
  }

  return (
    <Container>
      <Row>
        <Col lg={{span: 5, offset: 1}}>
          <Row>
            <Col lg={ 12 }><h2>Live Demo</h2></Col>
          </Row>
          <Row>
            <Col lg={ 12 }> { getDemo() } </Col>
          </Row>
        </Col>

        <Col lg={{span: 5, offset: 1}}>
          <Row>
            <Col lg={ 12 }><h2>Source Code</h2></Col>
          </Row>
          <Row>
            <Col lg={ 12 }> { getSource() } </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioDemoAndSource;