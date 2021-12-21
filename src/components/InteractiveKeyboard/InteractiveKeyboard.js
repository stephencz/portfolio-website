import React, { useState, useEffect } from "react";

import './InteractiveKeyboard.scss';

/**
 * 
 * @param {*} props 
 * @returns 
 */
const StandardKey = (props) => {


  const [isLit , setIsLit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(isLit === true) {
        setIsLit(false);
      } else {
        setIsLit(true);
      }
    }, Math.floor(Math.random() * 2000));

    return () => clearInterval(interval);
  }, [isLit, setIsLit]);

  const getClassName = () => {
    if(isLit) {
      return "standard-key lit";
    } else {
      return "standard-key";
    }
  }

  return (
    <div className={ getClassName() }></div>
  );
}

/**
 * Approx. the size of two standard keys
 * @param {*} props 
 * @returns 
 */
const BigKey = (props) => {

  const [isLit , setIsLit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(isLit === true) {
        setIsLit(false);
      } else {
        setIsLit(true);
      }
    }, Math.floor(Math.random() * 4000));

    return () => clearInterval(interval);
  }, [isLit, setIsLit]);

  const getClassName = () => {
    if(isLit) {
      return "big-key lit";
    } else {
      return "big-key";
    }
  }


  return (
    <div className={ getClassName() }></div>
  );
}

/**
 * Approx. the size of seven 
 * @param {*} props 
 * @returns 
 */
const SpaceKey = (props) => {

  const [isLit , setIsLit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(isLit === true) {
        setIsLit(false);
      } else {
        setIsLit(true);
      }
    }, Math.floor(Math.random() * 750));

    return () => clearInterval(interval);
  }, [isLit, setIsLit]);

  const getClassName = () => {
    if(isLit) {
      return "space-key lit";
    } else {
      return "space-key";
    }
  }
  
  return (
    <div className={ getClassName() }></div>
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
        <BigKey/>
        <EmptyKey/>
        <StandardKey />
        <StandardKey />
        <StandardKey />
      </div>
    </div>
  );
}

export default Keyboard;