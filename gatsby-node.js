const path = require("path");
const lodash = require("lodash");

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions;

  const results = await graphql(
    `
    query PortfolioPageQuery {
      allProjectsJson {
        edges {
          node {
            project_id
            url
            skills
            name
            color
            demo_url
            source_url
            description
          }
        } 
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
            }
            html
          }
        }
      }
    }
    `
  );

  if(results.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const portfolioPageTemplate = path.resolve(`src/templates/PortfolioTemplate.js`);
  results.data.allProjectsJson.edges.forEach(({ node }) => {
    const path = "/portfolio/" + node.project_id;
    const html = results.data.allMarkdownRemark.edges.find((mdNode) => mdNode.node.frontmatter.id === node.project_id);

    createPage({
      path,
      component: portfolioPageTemplate,
      context: {
        portfolioData: node,
        html: html.node.html
      }
    })
  });

}