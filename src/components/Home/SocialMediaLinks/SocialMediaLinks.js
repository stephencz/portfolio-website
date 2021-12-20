import React from "react";

import GitHub from '../../../assets/images/github.png'
import LinkedIn from '../../../assets/images/linkedin.png'
import Email from '../../../assets/images/mail.png'

import "./SocialMediaLinks.scss"

const SocialMediaLinks = (props) => {

  return (
    <div className="social-media-wrapper">
      <div className="linkedin">
        <span className="icon">
          <img src={LinkedIn} />
        </span>
        <a href="https://www.linkedin.com/in/sczekalski/" target="_blank">LinkedIn</a>
      </div>
      <div className="github">
        <span className="icon">
          <img src={GitHub} />
        </span>
        <a href="https://github.com/stephencz" target="_blank">GitHub</a>
      </div>
      <div className="email">
        <span className="icon">
          <img src={Email} />
        </span>
        <a href="mailto:stephencze243@gmail.com" target="_blank">Email</a>
        </div>
    </div>
  );
}

export default SocialMediaLinks;