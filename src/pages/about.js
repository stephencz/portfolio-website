import * as React from "react"
import {  graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import StandardLayout from "../layouts/StandardLayout";

const AboutPage = ({ data }) => {

  return (
    <main>
      <StandardLayout>
        <Container>
          <Row>
            <Col lg={{span: 6, offset: 1}}>
            </Col>
          </Row>
        </Container>
      </StandardLayout>
    </main>
  )
}

export default AboutPage