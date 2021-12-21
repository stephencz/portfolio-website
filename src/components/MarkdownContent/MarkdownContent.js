import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

import './MarkdownContent.scss';

const MarkdownContent = (props) => {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            id
            title
            author
            description
          }
        }
      }
    }
  }  
  `);

  const generateContentHTML = (data) => {
    console.log(data);

    for(let i = 0; i < data.allMarkdownRemark.edges.length; i++) {
      if(data.allMarkdownRemark.edges[i].node.frontmatter.id === props.id) {
        return (
          <div 
            className="md-content-wrapper" 
            dangerouslySetInnerHTML={{__html:  data.allMarkdownRemark.edges[i].node.html}}>
              <Helmet>
                <title>{ data.allMarkdownRemark.edges[i].node.frontmatter.title } | Stephen Czekalski | Full Stack Software Engineer</title>
                <meta name="description" content={ data.allMarkdownRemark.edges[i].node.frontmatter.description } />
              </Helmet>
          </div>
        );
      }
    }
    
    return <div className="md-content-wrapper"><p>No content found for id: { props.id }</p></div>
  }

  return generateContentHTML(data);

}

export default MarkdownContent;