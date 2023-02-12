import { MetaTags } from "../comp/MetaTags.jsx";

import Mail from "../assets/img/icons/InfoIcons_Mail.svg";
import Phone from "../assets/img/icons/InfoIcons_Phone.svg";
import RuFlag from "../assets/img/icons/InfoIcons_Ru.svg";
import GbFlag from "../assets/img/icons/InfoIcons_Gb.svg";
import DkFlag from "../assets/img/icons/InfoIcons_Dk.svg";

let skills = ["PHOTOSHOP", "ILLUSTRATOR", "INDESIGN", "XD", "lightroom", "bridge", "BILLEDBEHANDLING", "TYPOGRAFI", "LAYOUT", "VECTOR",  "EMBALLAGEDESIGN", "HTML5", "SASS", "JAVASCRIPT", "REACT", "npm", "seo", "GITHUB", "ChatGPT", "SCRUM", "WORDPRESS", "POSTMAN", "CMS", "STRAPI", "PWA", "MYSQL", "VSCODE", "BRACKETS", "DREAMWEAVER", "WINDOWS", "MAC"];

export const About = (props) => {
  const currentTime = new Date().getHours();

  const MorningTime = currentTime < 12;
  const DayTime = currentTime >= 12 && currentTime < 17;
  const EveningTime = currentTime >= 17 && currentTime <= 24;

  return (
    <section id="About">
      <MetaTags title={props.title}></MetaTags>
      <main>
        <h1>- OM MIG -</h1>
        <div className="FlexWrapper">
          <article id="OmMig">
            <h2>
              <span className="AboutTitle">
                <span className={` ${MorningTime ? "DayHighlight" : "false"}`}>
                  GODMORGEN
                </span>
                ,{" "}
                <span className={` ${DayTime ? "DayHighlight" : "false"}`}>
                  GODDAG
                </span>{" "}
                OG{" "}
                <span className={` ${EveningTime ? "DayHighlight" : "false"}`}>
                  GODAFTEN
                </span>
              </span>
            </h2>
            <hr
              className={` ${MorningTime ? "MorningTime" : "false"} ${
                DayTime ? "DayTime" : "false"
              } ${EveningTime ? "EveningTime" : "false"}`}
            />
            <p>
              Mit navn er Patrik <span id="WaveHand">✌️</span>
            </p>
            <p>
              Jeg er en ung uddannet grafiker og frontend-udvikler. Jeg har en
              dyb passion for at skabe visuelt imponerende og brugervenlige
              designs, samt en stærk baggrund i webudvikling, der giver mig
              mulighed for at bringe mange af disse designs til live.
            </p>
            <p>
              Jeg er en detaljeorienteret og kreativ person med en stærk
              arbejdsmoral og en passion for at levere højkvalitetsresultater.
              Jeg søger altid efter nye udfordringer og muligheder for at udvide
              mine færdigheder og viden, og jeg er overbevist om, at denne
              kombination af kundskaber gør mig til en værdifuld tilføjelse til
              enhver team.
            </p>
            <p>
              Jeg er uddanet mediegrafiker og webudvikler på Techcollege Aalborg
              (6 år i alt), hvor jeg forfinerede mine færdigheder i grafiske
              programmer fx. som Adobe Photoshop, Indesign og (min yndlings)
              Adobe Illustrator. Har også opnåed en grundig forståelse af
              designprincipper, farveteori og typografi. Under mit ophold på
              Techcollege fik jeg grundigt kendskab til en bred vifte af design
              stilarter og teknikker, hvilket har givet mig evnen til at
              tilpasse mig til forskellige projekter og målgrupper.
            </p>
            <p>
              Ud over min erfaring som grafisk designer er jeg også en
              talentfuld frontend udvikler med ekspertise i HTML, SCSS, SEO,
              JavaScript og REACT. Denne kombination af design- og udviklings
              færdigheder har givet mig mulighed for at bringe mine projekter
              til live på en måde, der er både visuelt tiltalende og funktionel.
              Jeg har også en dyb forståelse for responsive design og
              tilgængelighed med bedste praksis.
            </p>
            <p>
              I min fritid, hvis jeg ikke er sammen med mine venner, sidder jeg
              forand computeren og holder mig opdateret med de nyeste design- og
              teknologitrends, samt eksperimenterer med nye designsoftware og
              teknikker inden for branchen. Jeg kan også godt lig at rejse og
              nyder at udforske nye kulturer og fordybe mig i nye miljøer.
            </p>
          </article>

          <article id="CV">
            <div>
              <h2>KONTAKT</h2>
              <hr />
              <ul>
                <li>
                  {" "}
                  <img src={Mail} /> ohpatrikdahl@gmail.com
                </li>
                <li>
                  {" "}
                  <img src={Phone} /> +45 42 78 28 36
                </li>
              </ul>
            </div>
            <div>
              <h2>SPROG</h2>
              <hr />
              <ul>
                <li>
                  {" "}
                  <img className="Shadow" src={RuFlag} /> Modersmål
                </li>
                <li>
                  {" "}
                  <img className="Shadow" src={GbFlag} /> Flydende
                </li>
                <li>
                  {" "}
                  <img className="Shadow" src={DkFlag} /> Flydende
                </li>
              </ul>
            </div>
            <div>
              <h2>Uddannelse</h2>
              <hr />
              <ul className="NoFlex">
                <li>
                  <span className="Small">2021 - 2022</span> <br />
                  <span className="Bold">Webudvikler</span> <br /> TECHCOLLEGE
                  Aalborg
                </li>
                <li>
                  <span className="Small">2017 - 2020</span> <br />
                  <span className="Bold">Mediegrafiker</span> <br />
                  TECHCOLLEGE Aalborg
                </li>
                <li>
                  <span className="Small">2016 - 2017</span> <br />
                  <span className="Bold">GF1 på IT, Web & Medielinje</span>
                  <br />
                  TECHCOLLEGE Aalborg
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div>
          <article id="Skills">
            <h2>skills</h2>
            <hr />
              <ul>
                {skills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
          </article>
        </div>
      </main>
    </section>
  );
};
