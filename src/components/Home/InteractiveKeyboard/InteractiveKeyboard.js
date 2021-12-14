import React from "react";

import './InteractiveKeyboard.scss';

/**
 * 
 * @param {*} props 
 * @returns 
 */
const StandardKey = (props) => {
  return (
    <div className="standard-key"></div>
  );
}

/**
 * Approx. the size of two standard keys
 * @param {*} props 
 * @returns 
 */
const BigKey = (props) => {
  return (
    <div className="big-key"></div>
  );
}

/**
 * Approx. the size of seven 
 * @param {*} props 
 * @returns 
 */
const SpaceKey = (props) => {
  return (
    <div className="space-key"></div>
  );
}

const EmptyKey = (props) => {
  return (
    <div className="empty-key"></div>
  );
}

const Keyboard = (props) => {

  return (
    <div className="interactive-keyboard">
      <div className="key-row">
        <BigKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <BigKey />
        <EmptyKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
      </div>
      <div className="key-row">
        <BigKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <BigKey/>
        <EmptyKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
      </div>
      <div className="key-row">
        <BigKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <BigKey/>
        <EmptyKey/>
        <EmptyKey />
        <EmptyKey />
        <EmptyKey />
      </div>
      <div className="key-row">
        <BigKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <BigKey/>
        <EmptyKey/>
        <EmptyKey />
        <StandardKey />
        <EmptyKey />
      </div>
      <div className="key-row">
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <SpaceKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <StandardKey />
        <EmptyKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
      </div>
    </div>
  );
}

export default Keyboard;