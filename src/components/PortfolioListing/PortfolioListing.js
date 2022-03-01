import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
      if(props.browserData.searchData === project.type) {
        return true;
      }
    
    } else {
      return true;

    }

    return false;
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
                          <div className="project-description">{ props.project.type }</div>
                        </Col>
                      </Row>
                    </div>
                    <div className="project-image">
                      < GatsbyImage
                        image={ getImage(props.project.image) }
                        alt={ "the " + props.project.name + " portfolio project." }
                      />
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