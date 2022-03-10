import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./Education.scss";

const Education = (props) => {

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
  }
  `);

  return (
    <div className="education-wrapper">
      
    </div>
  );
}

export default Education;