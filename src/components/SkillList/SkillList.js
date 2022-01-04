import React from "react";
import './SkillList.scss';

const SkillList = (props) => {
  
  const generateProjectSkillList = (project) => {
    return project.skills.sort().map((skill, index) => {
      return <div className="skill-list-skill" 
                  key={ index }
                  style={ {backgroundColor: props.project.color} }
                  >
                  
                    { skill }
                  </div>
    });
  }

  return(
    <div className="skill-list-wrapper">
      { generateProjectSkillList(props.project) }
    </div>
  );
}

export default SkillList;