import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import SkillSearch from '../SkillSearch/SkillSearch';

import './PortfolioBrowser.scss';

const PortfolioBrowser = (props) => {

  const data = useStaticQuery(graphql`
  query {
    dataJson {
      skills {
        frameworks
        languages
        tools
      }
    }
  }  
  `);

  return (
    <div className="portfolio-browser-wrapper">
      <SkillSearch data={data} />
    </div>
  );
}

export default PortfolioBrowser;