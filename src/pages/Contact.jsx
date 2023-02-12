import { Galaxy } from "../comp/galaxy/Galaxy.jsx";
import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
  return (
    <section id="Contact">
      <MetaTags title={props.title}></MetaTags>

      <Galaxy />
      <main>
        <h1>kontakt</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <div>
              <input type="text" name="company_name" placeholder="Firma navn" />
            </div>
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="navn"
              />
            </div>
          </div>
          <div>
            <input className="Mail" type="email" name="user_email" placeholder="Email" />
          </div>
          <div>
            <textarea name="message" placeholder="skriv Besked her" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </main>
    </section>
  );
};
