import React from "react";

import { Container, Row, Col } from 'react-bootstrap';

import "./Navigation.scss";

const Navigation = (props) => {

  return (
    <div className="navigation-wrapper">
      <Container>
        <Row>
          <Col className="mx-auto" lg={10}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="mailto:stephencze243@gmail.com">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Navigation;