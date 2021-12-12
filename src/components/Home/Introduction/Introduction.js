import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Image } from 'react-bootstrap';

import AuthorImage from '../../../assets/images/author.png';
import './Introduction.scss';

const HomeIntroduction = (props) => {

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        fullname
        job_title
      }
    }  
  `);

  return (
    <div className="introduction-wrapper">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="fullname">{ data.dataJson.fullname }</h1>
            <h2 className="title">{ data.dataJson.job_title }</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 1 }}>
            <div className="biography">
              <p>
                Programming is my passion.
                Since writing my first lines of code in my early teens, it has been a constant source of challenge and fun.
              </p>    
              <p>
                Over the years, I've had the oppurtunity to work with a wide variety of programming languages, frameworks, and tools.
                I've designed websites, full stack web applications, traditional software, plugins, and more.
              </p>
              
              <p>
                In all of my projects I strive to write code that is simple, beautiful, and effective.
                Below you can learn more about my past projects and work.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <Image className="author-image" src={AuthorImage} alt="A picture of Stephen Czekalski."/>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default HomeIntroduction;