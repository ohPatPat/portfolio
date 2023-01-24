import { MetaTags } from "../comp/MetaTags.jsx";
import { NavLink } from "react-router-dom";

export const Error = (props) => {
  return (
    <section id="Error">
      <MetaTags title={props.title}></MetaTags>

      <NavLink to="/">
        <h1 id="ErrorTitle" className="H1Text TextColor">
          Error! page not found!
        </h1>
      </NavLink>
    </section>
  );
};
