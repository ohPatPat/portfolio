import { MetaTags } from "../comp/MetaTags.jsx";
import { NavLink } from "react-router-dom";

import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.jpg";
import Ban_Spring from "../assets/img/products/Springeren/Banners_Springeren.jpg";
import Ban_Skagen from "../assets/img/products/Skagen/Banners_Skagen.jpg";


export const Portfolio = (props) => {
  console.log(props);

  return (
    <section id="Portfolio">
      <MetaTags title={props.title} />
      <main>

        <NavLink to={`${props.cases[0].url}`}>
          <img src={Ban_Baba} alt="Baba Energy banner" loading="lazy"/>
        </NavLink>

        <NavLink to={`${props.cases[1].url}`}>
        <img src={Ban_Spring} alt="Springer Banner" loading="lazy"/>
        </NavLink>

        <NavLink to={`${props.cases[2].url}`}>
        <img src={Ban_Skagen} alt="Skagen banner" loading="lazy"/>
        </NavLink>


        <article>
          <p>
            "Det er virkligt være svært at give en god overblik over min evner.
            Selvom jeg har arbejdet på en bred vifte af projekter, der spænder
            fra simpel brochurer og creative brand-identitet til webdesign og
            -udvikling <i>(UX & UI)</i>. Jeg har valgt at vise nogle få
            eksempler af mine bedste og mest stolte cases, som jeg er glad for
            at lægge mit præ på"
          </p>
        </article>
      </main>
    </section>
  );
};
