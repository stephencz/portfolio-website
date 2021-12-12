import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import SkillSearch from '../SkillSearch/SkillSearch';

import './PortfolioBrowser.scss';

const PortfolioBrowser = (props) => {
  return (
    <div className="portfolio-browser-wrapper">
      <SkillSearch />
    </div>
  );
}

export default PortfolioBrowser;