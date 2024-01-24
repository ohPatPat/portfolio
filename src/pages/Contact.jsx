import { Galaxy } from "../comp/galaxy/Galaxy.jsx";
import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FlipIcon from "../assets/img/icons/FlipArrows.svg";
import Mail from "../assets/img/icons/InfoIcons_Mail.svg";
import Phone from "../assets/img/icons/InfoIcons_Phone.svg";
import HandPoint from "../assets/img/deco/ArrowHandSmall.svg";
import { useForm } from "react-hook-form";

export const Contact = (props) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [submitMessage, setSubmitMessage] = useState(null);

  const [Error, setError] = useState("");
  const clearFields = (e) => {
    if (Error || errors) {
      setError();
      clearErrors();
      setSubmitMessage(null);
      console.log("reset");
    }
  };

  const sendEmail = (e) => {
    //e.preventDefault();
    emailjs
      .sendForm(
        "service_3kxwtm1",
        "template_qw53jhd",
        form.current,
        "PWAaqSbEwQXEo4NqD"
      )

      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage(true);
        },
        (error) => {
          console.log("fail");
          setError("Kunne ikke sende!");
        }
      );
    document.getElementById("Form").reset();
  };


  useEffect(() => {
    let timeoutId;
    if (isSubmitSuccessful) {
      timeoutId = setTimeout(() => {
        setSubmitMessage(null);
      }, 5000); // change back to "noShow" after 5 seconds (adjust as needed)
    }
    return () => clearTimeout(timeoutId);
  }, [isSubmitSuccessful]);

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
                mig, som en del af jers team -
              </p>
              <ul>
                <li>fuldtid</li>
                <li>deltid.</li>
                <li>praktik.</li>
              </ul>
              <p>
                Så vil jeg meget gerne høre fra jer! <br /> I kan kontakte mig
                via min email, Tlf. Eller en direkte besked via min hjemmeside{" "}
                {}
                <i>(til min email)</i>. <br /> <br /> <span>FLIP!</span>
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

            <form id="Form" ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div>
                <div
                  className={
                    Error || errors.companyName
                      ? "InputWrapperError"
                      : "InputWrapper"
                  }
                >
                  <input
                    onClick={clearFields}
                    type="text"
                    name="companyName"
                    placeholder="Firma navn:"
                    autoComplete="off"
                  />
                </div>
                <div
                  className={
                    Error || errors.userName
                      ? "InputWrapperError"
                      : "InputWrapper"
                  }
                >
                  <input
                    onClick={clearFields}
                    type="text"
                    name="userName"
                    placeholder="navn:*"
                    autoComplete="off"
                    {...register("userName", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                      min: 2,
                    })}
                  />
                  {errors.userName?.type === "required" && (
                    <span>Du skal udfylde dit navn!</span>
                  )}
                  {errors.userName?.type === "pattern" && (
                    <span>Kun brug bogstaver!</span>
                  )}
                </div>
              </div>
              <div>
                <div
                  className={
                    Error || errors.userEmail
                      ? "InputWrapperError"
                      : "InputWrapper"
                  }
                >
                  <input
                    onClick={clearFields}
                    type="email"
                    name="userEmail"
                    placeholder="Email:*"
                    autoComplete="off"
                    {...register("userEmail", {
                      required: true,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                      min: 2,
                    })}
                  />
                  {errors.userEmail?.type === "required" && (
                    <span>Du skal skriv en email!</span>
                  )}
                  {errors.userEmail?.type === "pattern" && (
                    <span>Udfyld Email korrekt! </span>
                  )}
                </div>

                <div
                  className={
                    Error || errors.userPhone
                      ? "InputWrapperError"
                      : "InputWrapper"
                  }
                >
                  <input
                    onClick={clearFields}
                    type="number"
                    name="userPhone"
                    placeholder="Tlf:"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div
                className={
                  Error || errors.userMessage ? "TextareaError" : "InputWrapper"
                }
              >
                <textarea
                  onClick={clearFields}
                  name="userMessage"
                  placeholder="Besked:*"
                  autoComplete="off"
                  {...register("userMessage", {
                    required: true,
                    min: 2,
                  })}
                />
                {errors.userMessage?.type === "required" && (
                  <span>Du skal skriv en besked!</span>
                )}
              </div>
              <button
                data-type="emoji"
                id="Submit"
                onClick={clearFields}
                type="submit"
              >
                Send
              </button>
              {/* <div id="Show" > */}
              <div id={submitMessage ? "Show" : "noShow"}>
              {/* <div id={submitMessage ? "noShow" : "Show"}> */}
                <div></div>
                <div></div>

                <p>👍</p>
              </div>
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
