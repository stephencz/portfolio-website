import React from "react";

import GitHub from '../../../assets/images/github.webp'
import LinkedIn from '../../../assets/images/linkedin.webp'
import Email from '../../../assets/images/mail.webp'

import "./SocialMediaLinks.scss"

const SocialMediaLinks = (props) => {

  return (
    <div className="social-media-wrapper">
      <div className="linkedin">
        <span className="icon">
          <img src={LinkedIn} alt="The logo for LinkedIn." />
        </span>
        <a href="https://www.linkedin.com/in/sczekalski/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="github">
        <span className="icon">
          <img src={GitHub} alt="The logo for GitHub."/>
        </span>
        <a href="https://github.com/stephencz" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="email">
        <span className="icon">
          <img src={Email} alt="The logo for GMail."/>
        </span>
        <a href="mailto:stephencze243@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>
    </div>
  );
}

export default SocialMediaLinks;