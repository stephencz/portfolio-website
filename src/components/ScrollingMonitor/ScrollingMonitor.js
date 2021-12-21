import React from "react";

import './ScrollingMonitor.scss';

const ScrollingMonitor = (props) => {

  return (
    <div className="scrolling-monitor-wrapper">
      <div className="screen-one">
        <div className="code-line">
          <div className="variable-declaration-m"></div>
          <div className="text-m"></div>
        </div>
        <div className="code-line">
          <div className="variable-declaration-m"></div>
          <div className="text-s"></div>
        </div>
        <div className="code-line">
          <div className="variable-declaration-m"></div>
          <div className="text-l"></div>
        </div>
        <div className="code-line"></div>
        <div className="code-line">
          <div className="return-type-m"></div>
          <div className="function-name-m"></div>
          <div className="parenthesis"></div>
        </div>
        <div className="code-line">
          <div className="variable-declaration-s indent"></div>
          <div className="text-l"></div>
        </div>
      </div>

      <div className="screen-two">
       <div className="code-line">
          <div className="function-return-type-m indent"></div>
          <div className="text-m"></div>
        </div>
        <div className="code-line">
          <div className="parenthesis"></div>
        </div>
        <div className="code-line"></div>
        <div className="code-line">
          <div className="variable-declaration-s"></div>
          <div className="text-l"></div>
        </div>
        <div className="code-line">
          <div className="variable-declaration-m"></div>
          <div className="text-s"></div>
        </div>
        <div className="code-line">
        <div className="variable-declaration-s"></div>
          <div className="text-m"></div>
        </div>
      </div>

      <div className="screen-three">
        <div className="code-line"></div>

        <div className="code-line">
          <div className="return-type-s"></div>
          <div className="function-name-l"></div>
          <div className="parenthesis"></div>
        </div>

        <div className="code-line">
          <div className="variable-declaration-s indent"></div>
          <div className="text-l"></div>
        </div>

        <div className="code-line">
          <div className="variable-declaration-m indent"></div>
          <div className="text-l"></div>
        </div>

        <div className="code-line">
          <div className="variable-declaration-s indent"></div>
          <div className="text-m"></div>
        </div>

        <div className="code-line">
          <div className="text-m indent"></div>
          <div className="text-s"></div>
        </div>
      </div>

      <div className="screen-four">
        <div className="code-line">
          <div className="parenthesis"></div>
        </div>

        <div className="code-line"></div>

        <div className="code-line">
          <div className="return-type-m"></div>
          <div className="function-name-m"></div>
          <div className="parenthesis"></div>
        </div>

        <div className="code-line">
          <div className="function-name-l indent"></div>
          <div className="variable-declaration-m"></div>
        </div>

        <div className="code-line">
          <div className="variable-declaration-s indent"></div>
          <div className="text-m"></div>
        </div>

        <div className="code-line">
          <div className="function-return-type-m indent"></div>
          <div className="text-s"></div>
        </div>

      </div>
      <div className="screen-five">
        <div className="code-line">
          <div className="parenthesis"></div>
        </div>

        <div className="code-line"></div>

        <div className="code-line">
          <div className="text-m"></div>
          <div className="text-l"></div>
        </div>
        <div className="code-line">
          <div className="text-s"></div>
          <div className="text-l"></div>
        </div>

        <div className="code-line"></div>

        <div className="code-line">
          <div className="variable-declaration-m"></div>
          <div className="text-l"></div>
        </div>
      </div>
    </div>
  );

}

export default ScrollingMonitor;