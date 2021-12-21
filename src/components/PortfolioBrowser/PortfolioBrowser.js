import React, { useState } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import SkillSearch from '../SkillSearch/SkillSearch';
import PortfolioListing from '../PortfolioListing/PortfolioListing';

import './PortfolioBrowser.scss';

/**
 * The PortfolioBrowser component provides a searchable portfolio display
 * for the user. Initially, all projects are listed alphabetically in the
 * browser. The user can then use the search section to narrow projects
 * based on skills used or text in their description or title.
 * @param {*} props 
 * @returns 
 */
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
    allProjectsJson {
        edges {
          node {
            id
            name
            url
            skills
            project_id
            description
            image,
            color
          }
        }
      }
    }  
  `);

  /** Object containing data needed by children */
  const [browserData, setBrowserData] = useState({
    projects: data.allProjectsJson.edges,
    activeButtons: [],
    searchData: ""
  });

  /**
   * Generates a list of PortfolioListing components which display portfolio
   * project information.
   * @param {*} data 
   * @returns 
   */
  const generatePortfolioListings = () => {
    return browserData.projects.map((element, index) => {
      return <PortfolioListing key={ index } project={ element.node } browserData={ browserData } setBrowserData={ setBrowserData } />
    })
  }

  return (
    <div className="portfolio-browser-wrapper">
      <SkillSearch data={data} browserData={ browserData } setBrowserData={ setBrowserData } />
      { generatePortfolioListings() }
    </div>
  );
}

export default PortfolioBrowser;