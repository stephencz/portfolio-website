import React from "react";

const SkillButton = (props) => {

  const getButtonStyles = () => {
    if(props.browserData.activeButtons.includes(props.text)) {
      return "skill-button active";
    }

    return "skill-button";
  }

  const handleButtonClick = (event) => {
    
    // Toggle buttons between active and not active
    if(props.browserData.activeButtons.includes(props.text)) {
      props.setBrowserData({
        ...props.browserData, 
        activeButtons: props.browserData.activeButtons.filter((elem, index) => elem != props.text),
        searchData: ""
      });
    } else {
      props.setBrowserData({
        ...props.browserData,
        activeButtons: [...props.browserData.activeButtons, props.text],
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