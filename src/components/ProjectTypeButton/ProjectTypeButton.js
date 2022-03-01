import React from "react";
import "./ProjectTypeButton.scss";

const ProjectTypeButton = (props) => {

  const getButtonStyles = () => {
    if(props.browserData.activeButtons.includes(props.text)) {
      return "project-type-button active";
    }

    return "project-type-button";
  }

  const handleButtonClick = (event) => {
    
    if(props.browserData.activeButtons.includes(props.text)) {
      props.setBrowserData({
        ...props.browserData,
        activeButtons: [],
        searchData: ""
      });

    } else {
      props.setBrowserData({
        ...props.browserData,
        activeButtons: [props.text],
        searchData: props.text
      })
    }
    
  }
  
  return (
    <div 
      className={ getButtonStyles() }
      onClick={ (event) => handleButtonClick(event) }
    >
      { props.text }
    </div>
  );

};

export default ProjectTypeButton;