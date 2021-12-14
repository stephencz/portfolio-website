import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'gatsby';

import './PortfolioListing.scss';

const PortfolioListing = (props) => {

  /**
   * Determines the visibility of the portfolio listing based
   * on active skill buttons and search data. 
   * @param {*} project 
   * @returns True if listing is visible. Otherwise false.
   */
  const getVisibility = (project) => {

    if(props.browserData.searchData !== "") {
      let matchFound = false;
      let tokens = props.browserData.searchData.trim().toLowerCase().split(" ");

      let name = project.name.trim().toLowerCase();
      let description = project.description.trim().toLowerCase();

      tokens.forEach((token) => {
        if(name.includes(token) || description.includes(token)) {
          matchFound = true;
        }
      })

      if(matchFound) {
        return true;
      }

      return false;

    } else {
      let matchesNeeded = props.browserData.activeButtons.length;

      // Determine if skills match
      if(matchesNeeded > 0) {
  
        props.browserData.activeButtons.forEach((button) => {
          project.skills.forEach((skill) => {
            if(button.toLowerCase() === skill.toLowerCase()) {
              matchesNeeded -= 1;
            }
          })
        })
      } else {
        return true;
      }
  
      if(matchesNeeded <= 0) {
        return true;
      
      } else {
        return false;
  
      }
    }
  }

  const generateListingSkillsList = () => {
    
    if(props.project.skills.length <= 0) {
      return <div className="skills"></div>;
    } 

    let elements = props.project.skills.sort().map((element, index) => {
      return <li key={index}> { element } </li>;
    })

    return (
      <div className="skills">
        <span className="skills-header">Tags:</span> 
        <ul> 
          { elements } 
        </ul>
      </div>
    );
  }

  const generateListing = () => {
    let visibility = getVisibility(props.project);
    if(visibility) {
      return (
        <div className="portfolio-listing-wrapper">
          <Container>
            <Row>
              <Col lg={{ span: 4, offset: 1 }}>
                <Image className="portfolio-image" style={ {maxHeight: props.project.image_max_height } } src={ props.project.image } />
              </Col>
              <Col lg={{ span: 5, offset: 1 }}>
                <div className="project-header"><Link to={props.project.url}>{ props.project.name }</Link></div>
                <div className="project-description">{ props.project.description }</div>
                { generateListingSkillsList() }
              </Col> 
            </Row>
          </Container>
        </div>
        );
    } else {
      return <div className="portfolio-list-wrapper hidden"></div>
    }
  }

  return generateListing()
  
}

export default PortfolioListing;