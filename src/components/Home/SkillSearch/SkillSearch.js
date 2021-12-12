import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import './SkillSearch.scss';

const SkillSearch = (props) => {
  return (
    <div className="skill-search-wrapper">
      <Container>
        <Row>
          <Col className="mx-auto" lg={10}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillSearch;