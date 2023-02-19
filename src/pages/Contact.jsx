import { Galaxy } from "../comp/galaxy/Galaxy.jsx";
import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FlipIcon from "../assets/img/icons/FlipArrows.svg";
import Mail from "../assets/img/icons/InfoIcons_Mail.svg";
import Phone from "../assets/img/icons/InfoIcons_Phone.svg";
import HandPoint from "../assets/img/deco/ArrowHandSmall.svg";

export const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zltc55m",
        "template_qw53jhd",
        form.current,
        "PWAaqSbEwQXEo4NqD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const Flip = "Flip";
  const NoFlip = "NoFlip";
  const [SideState, setSideState] = useState(
    localStorage.getItem("SideState") || NoFlip
  );

  const handleClick = () => {
    if (SideState === NoFlip) {
      setSideState(Flip);
      localStorage.setItem("SideState", Flip);
    } else {
      setSideState(NoFlip);
      localStorage.setItem("SideState", NoFlip);
    }
  };
  return (
    <section id="Contact">
      <MetaTags title={props.title}></MetaTags>

      <Galaxy />
      <main>
        <section id="Card" className={SideState}>
          <section id="FrontSide">
            <h1>- kontakt -</h1>
            <ul className="Kontakt">
              <li>
                {" "}
                <img src={Mail} /> ohpatrikdahl@gmail.com
              </li>
              <li>
                {" "}
                <img src={Phone} /> +45 42 78 28 36
              </li>
            </ul>
            <article>
              <p>
                Hvis i har fundet mig eller mit arbejde interessant og overvejer
                mig, som en del af jers team - som:
              </p>
              <ul>
                <li>fuldtid</li>
                <li>deltid.</li>
                <li>freelance.</li>
                <li>praktik.</li>
              </ul>
              <p>
                Så vil jeg meget gerne høre fra jer! <br /> I kan kontakte mig
                via min email, Tlf. Eller en direkte besked via min hjemmeside
                (til min email). <br /> <br />  FLIP!
              </p>
              <img src={HandPoint} alt="" />
            </article>
            <button className="FlipButton" onClick={handleClick}>
              <img src={FlipIcon} alt="Flip icon" />
            </button>
          </section>
          <section id="BackSide">
          <h1>- kontakt -</h1>
            <ul className="Kontakt">
              <li>
                {" "}
                <img src={Mail} /> ohpatrikdahl@gmail.com
              </li>
              <li>
                {" "}
                <img src={Phone} /> +45 42 78 28 36
              </li>
            </ul>

            <form ref={form} onSubmit={sendEmail}>
              <div>
                <div>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Firma navn:"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="navn:"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email:"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="user_phone"
                    placeholder="Tlf:"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Besked:"
                  autoComplete="off"
                />
              </div>
              <button type="submit">Send</button>
            </form>
            <button className="FlipButton" onClick={handleClick}>
              <img src={FlipIcon} alt="Flip icon" />
            </button>
          </section>
        </section>
      </main>
    </section>
  );
};
