import { Galaxy } from "../comp/galaxy/Galaxy.jsx";
import { MetaTags } from "../comp/MetaTags.jsx";

export const Home = (props) => {
  return (
    <section id="Home">
      <MetaTags title={props.title}></MetaTags>
      <main>
        <Galaxy/>
      </main>
    </section>
  );
};
