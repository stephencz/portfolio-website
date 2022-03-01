import React from "react";

import { Container, Row, Col } from 'react-bootstrap';

import "./Navigation.scss";

const Navigation = (props) => {

  const getStyle = () => {
    if(props.color !== undefined) {
      return {
        backgroundColor: props.color
      }
    }

    return {}
  }

  return (
    <div className="navigation-wrapper" style={getStyle()}>
      <Container>
        <Row>
          <Col className="mx-auto" lg={10}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="mailto:stephencze243@gmail.com">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Navigation;