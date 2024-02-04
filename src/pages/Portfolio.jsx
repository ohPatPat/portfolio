import { MetaTags } from "../comp/MetaTags.jsx";
import { NavLink } from "react-router-dom";

import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.webp";
import Ban_Spring from "../assets/img/products/Springeren/Banners_Springeren.webp";
import Ban_Skagen from "../assets/img/products/Skagen/Banners_Skagen.webp";
import Ban_Hjerte from "../assets/img/products/Hjerte/Banners_Hjerte.webp";
import Ban_SundhedsSupport from "../assets/img/products/SundhedsSupport/Banners_SundhedsSupport.webp";
import Ban_PatiaWorkshop from "../assets/img/products/PatiaWorkshop/Banners_PatiaWorkshop.webp";
import Ban_Arturs from "../assets/img/products/Arturs/Banners_Arturs.webp";


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

        <NavLink to={`${props.cases[3].url}`}>
        <img src={Ban_Hjerte} alt="Hjerte banner" loading="lazy"/>
        </NavLink>

        <NavLink to={`${props.cases[4].url}`}>
        <img src={Ban_SundhedsSupport} alt="SundhedsSupport banner" loading="lazy"/>
        </NavLink>

        <NavLink to={`${props.cases[5].url}`}>
        <img src={Ban_PatiaWorkshop} alt="Patia Workshop banner" loading="lazy"/>
        </NavLink>

        <NavLink to={`${props.cases[6].url}`}>
        <img src={Ban_Arturs} alt="Arturs Pirazkov banner" loading="lazy"/>
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
