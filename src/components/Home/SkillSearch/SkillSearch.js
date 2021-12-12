import React, { useState } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import SkillButton from '../SkillButton/SkillButton';

import './SkillSearch.scss';

/**
 * The SkillSearch component is a controlled component belonging to
 * the PortfolioBrowser component. The skill search component provides
 * buttons and a text input for searching through the author's portfolio
 * of projects according to the skills used in each project.
 * 
 * @param {*} props 
 * @returns 
 */
const SkillSearch = (props) => {

  /**
   * Generates a skill section which contains skill buttons the user can
   * use to search for portfolio projects that used that particular skill.
   * @param {*} header The text heading of the section
   * @param {*} data The data containing the author's skills i.e. props.data
   * @param {*} skillset The specific skill set i.e. languages, tools, or frameworks.
   * @returns 
   */
  const generateSkillSection = (header, data, skillset) => {
    return (
      <Row>
        <Col className="mx-auto" lg={10}>
          <div className="skill-section">
            <div className="section-header">{ header }</div>
            <div className="section-buttons">
              { generateSkillButtons(data, skillset) }
            </div>
          </div>
        </Col>
      </Row>
    )
  }

  /**
   * Generates a list of SkillButtons.
   * @param {*} data The data containing the author's skills i.e. props.data
   * @param {*} skillset The specific skill set i.e. languages, tools, or frameworks.
   * @returns 
   */
  const generateSkillButtons = (data, skillset) => {
    return data.dataJson.skills[skillset].map((skill, index) => {
      return <SkillButton key={index} text={ skill } />
    });
  }

  return (
    <div className="skill-search-wrapper">
      <Container>
        { generateSkillSection("Languages I Know: ", props.data, "languages") }
        { generateSkillSection("Tools I've Used: ", props.data, "tools") }
        { generateSkillSection("Frameworks I've Worked With: ", props.data, "frameworks") }
      </Container>
    </div>
  );
}

export default SkillSearch;