import { MetaTags } from "../comp/MetaTags.jsx";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
export const Error = (props) => {
  return (
    <section id="Error">
      <MetaTags title={props.title}></MetaTags>
      <main id="Error">
        <NavLink to="/">
          <div id="Typewriter">
            <Typewriter
              options={{ loop: true, delay: 100,}}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Kunne ikke finde siden 🤔")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Prøve igen 😁")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </NavLink>
      </main>
    </section>
  );
};
