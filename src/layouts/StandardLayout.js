import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation/Navigation"

const StandardLayout = ({children}) => {

  return (
    <main>
      <Navigation />
      { children }
    </main>
  );

};

export default StandardLayout;