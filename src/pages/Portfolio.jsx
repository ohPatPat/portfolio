import { MetaTags } from "../comp/MetaTags.jsx";


export const Portfolio = (props) => {

    return (

        <section id="Portfolio">
      <MetaTags title={props.title}></MetaTags>
      <h5>{props.title}</h5>



        </section>
    )


}