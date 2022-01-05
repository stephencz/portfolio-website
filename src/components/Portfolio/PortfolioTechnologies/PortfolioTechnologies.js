import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SkillList from '../../SkillList/SkillList';
import './PortfolioTechnologies.scss';

const PortfolioTechnologies = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <Row>
            <Col lg={ 12 }><h2>Technologies</h2></Col>
          </Row>

          <Row>
            <Col lg={ 12 }>
              <SkillList project={ props.project } />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default PortfolioTechnologies;