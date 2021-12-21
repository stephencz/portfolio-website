import * as React from "react"

import { Container, Row, Col } from "react-bootstrap";

import StandardLayout from "../layouts/StandardLayout";
import MarkdownContent from '../components/MarkdownContent/MarkdownContent';
import PortfolioBrowser from "../components/PortfolioBrowser/PortfolioBrowser";

const WorkPage = (prop) => {
  return (
    <main>
      <StandardLayout>
        <Container>
          <Row>
            <Col lg={{span: 7, offset: 1}}>
              <MarkdownContent id="work-page" />
            </Col>
          </Row>
        </Container>
        <PortfolioBrowser />
      </StandardLayout>
    </main>
  )
}

export default WorkPage