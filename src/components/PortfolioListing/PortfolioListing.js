import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
      let skills = project.skills.map((elem) => {
        return elem.trim().toLowerCase();
      })

      tokens.forEach((token) => {
        if(name.includes(token) || description.includes(token) || skills.includes(token)) {
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

  /**
   * Generates a portfolio listing.
   * @returns 
   */
  const generateListing = () => {
    let visibility = getVisibility(props.project);
    if(visibility) {

      let color = props.project.color;

      return (
          <div className="portfolio-listing-wrapper">
            <Container>
              <Row>
                <Col className="mx-auto" lg={10}>
                <a href={ props.project.url }>
                  <div className="project-wrapper" style={{backgroundColor: color}}>
                    <div className="project-information">
                      <Row>
                        <Col xs={6}>
                          <div className="project-name">{ props.project.name }</div>
                        </Col>
                        <Col xs={6}>
                          <div className="project-description">{ props.project.description }</div>
                        </Col>
                      </Row>
                    </div>
                    <div className="project-image">
                      <img src={ props.project.image } alt={"An image of the " + props.project.name + " portfolio project."} />
                    </div>
                  </div>
                </a>
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