import React from "react";

const SkillButton = (props) => {

  const getButtonStyles = () => {
    if(props.browserData.activeButtons.includes(props.text)) {
      return "skill-button active";
    }

    return "skill-button";
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
        searchData: ""
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

export default SkillButton;