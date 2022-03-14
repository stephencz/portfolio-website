import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './PortfolioTechnologies.scss';

const PortfolioTechnologies = (props) => {

  const generateProjectSkillList = () => {
    return props.project.skills.sort().map((skill, index) => {
      return <div 
                className="skill-list-skill" 
                key={ index }
                style={ {backgroundColor: props.project.color} }
              >
                { skill }
              </div>
    });
  }

  return (
    <Container>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <Row>
            <Col lg={ 12 }><h2>Technologies</h2></Col>
          </Row>

          <Row>
            <Col lg={ 12 }>
              <div className="skill-list-wrapper">
                { generateProjectSkillList() }
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default PortfolioTechnologies;