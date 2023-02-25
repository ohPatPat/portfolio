import { MetaTagsExtra } from "../comp/MetaTagsExtra.jsx";
import React, { useState, useEffect } from "react";

export const PortfolioCase = (props) => {
  let [specificCase, setspecificCase] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/portfolio/Baba_Energy":
        setspecificCase(0);
        break;
      case "/portfolio/Cake":
        setspecificCase(1);
        break;
      case "/portfolio/Dogie":
        setspecificCase(2);
        break;
      default:
        setspecificCase(null);
        break;
    }
  }, []);

  console.log(props);

  return (
    <section id="PortfolioCase">
      <MetaTagsExtra>
        <title>{`Patrik Dahl | ${props.cases[specificCase].caseName}`}</title>
      </MetaTagsExtra>
      <h5>{props.cases[specificCase].caseName}</h5>
      <div></div>
    </section>
  );
};
