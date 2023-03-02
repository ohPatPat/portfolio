import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useState, useEffect } from "react";
import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.jpg";

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
      <MetaTags title={`Patrik Dahl | ${props.cases[specificCase].caseName}`} />
      {specificCase == 0 ? (
        <main>
          <img src={Ban_Baba} alt="Baba Energy banner" />
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <h2>mediegrafiker svendestykke</h2>
        </main>
      ) : null}
      {specificCase == 1 ? (
        <main>
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
        </main>
      ) : null}
      {specificCase == 2 ? (
        <main>
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
        </main>
      ) : null}
    </section>
  );
};
