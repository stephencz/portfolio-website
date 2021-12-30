import React from "react";

import './Content.scss';

const Content = (props) => {

  return (
    <div>
      <div className="md-content-wrapper">
        { props.children }
      </div>
    </div>
  );

}

export default Content;