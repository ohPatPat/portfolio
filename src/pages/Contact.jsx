import { Galaxy } from "../comp/galaxy/Galaxy.jsx";
import { MetaTags } from "../comp/MetaTags.jsx";


export const Contact = (props) => {

    return (

        <section id="Contact">
      <MetaTags title={props.title}></MetaTags>

      <main>
        <Galaxy/>
      </main>



        </section>
    )


}