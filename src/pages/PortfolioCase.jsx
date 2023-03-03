import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useState, useEffect } from "react";
import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.jpg";
import Illustrator from "../assets/img/icons/Icons_Illustrator.svg";
import Indesign from "../assets/img/icons/Icons_Indesign.svg";

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
          <article>
            <h3>Info</h3>
            <hr />
            <ul className="Apps">
              <li>
                <img src={Illustrator} alt="Illustrator Logo" />
              </li>
              <li>
                <img src={Indesign} alt="Indesign Logo" />
              </li>
            </ul>
            <p><b>Baba Energy</b> - Tekst</p>
            <ul>
              <li><b>Timeline:</b> 4 Måneder, 2020</li>
              <li><b>Udfordringer:</b></li>
            </ul>
          </article>
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
