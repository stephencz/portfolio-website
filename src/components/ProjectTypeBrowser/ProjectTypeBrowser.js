import React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import ProjectTypeButton from "../ProjectTypeButton/ProjectTypeButton";
import PortfolioListing from "../PortfolioListing/PortfolioListing";

import "./ProjectTypeBrowser.scss";

/**
 * The ProjectTypeBrowser component provides an interface for displaying
 * a list of portfolio projects, and for filtering the displayed projects
 * by their 'project type' i.e. website, web application, game, etc.
 */
const ProjectTypeBrowser = () => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        skills {
          frameworks
          languages
          tools
          concepts
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
            type
            color
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }  
  `);

  const [browserData, setBrowserData] = useState({
    projects: data.allProjectsJson.edges,
    activeButtons: [],
    searchData: ""
  })

  /** @returns An array of all the portfolio project 'types'. */
  const getUniqueProjectTypes = () => {
    let unique = []

    for(let i = 0; i < browserData.projects.length; i++) {
      let type = browserData.projects[i].node.type;
      if(!unique.includes(type)) {
        unique = [...unique, type];
      }
    }

    return unique;
  }

  const generateProjectTypeButtons = () => {
    
    const unique = getUniqueProjectTypes();

    const sorted = unique.sort((a, b) => {
      if(a < b) { return -1; }
      if(a > b) { return  1; }
      return 0;
    })

    return sorted.map((projectType, index) => {
      return <ProjectTypeButton 
        key={ index } 
        browserData={ browserData } 
        setBrowserData={ setBrowserData }
        text={ projectType }
      />
    });
  }

  /**
   * Generates a list of PortfolioListing components which display portfolio
   * project information.
   * @returns An Array of PortfolioListing Elements
   */
  const generatePortfolioListings = () => {
    return browserData.projects.map((element, index) => {
      return <PortfolioListing key={ index } project={ element.node } browserData={ browserData } setBrowserData={ setBrowserData } />
   })
  }

  return (
    <div className="project-type-browser-wrapper">
      <Container>
        <Row>
          <Col className="mx-auto" lg="10">
            <h2 id="portfolio">Projects</h2>
            <div className="project-type-search">
              <span className="project-type-button-label" >Filter: </span>
              { generateProjectTypeButtons() }
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="portfolio-projects">
        { generatePortfolioListings() }
      </div>
    </div>
  )
}

export default ProjectTypeBrowser;