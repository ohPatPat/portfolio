import { MetaTags } from "../comp/MetaTags.jsx";
import { NavLink } from "react-router-dom";

export const Portfolio = (props) => {



  console.log(props);

  return (
    <section id="Portfolio">
      <MetaTags title={props.title} />
      <main>
        <NavLink to={`${props.cases[0].url}`}>Baba</NavLink>
        <NavLink to={`${props.cases[1].url}`}>Cake</NavLink>
        <NavLink to={`${props.cases[2].url}`}>Dogie</NavLink>

        <article>
          <p>
            Det er virkligt være svært at give en god overblik over min evner.
            Selvom jeg har arbejdet på en bred vifte af projekter, der spænder
            fra simpel brochurer og creative brand-identitet til webdesign og
            -udvikling <i>(UX & UI)</i>. Jeg har valgt at vise nogle få
            eksempler af mine bedste og mest stolte cases, som jeg er glad for
            at lægge mit præ på.{" "}
          </p>
        </article>
      </main>
    </section>
  );
};
