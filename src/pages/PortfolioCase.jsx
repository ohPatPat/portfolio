import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useState, useEffect } from "react";
import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.jpg";
import Illustrator from "../assets/img/icons/Icons_Illustrator.svg";
import Indesign from "../assets/img/icons/Icons_Indesign.svg";

import GreenClosed from "../assets/img/products/BabaEnergy/Matroska_GreenClosed.jpg";
import GreenOpen from "../assets/img/products/BabaEnergy/Matroska_GreenOpen.jpg";
import PinkClosed from "../assets/img/products/BabaEnergy/Matroska_PinkClosed.jpg";
import PinkOpen from "../assets/img/products/BabaEnergy/Matroska_PinkOpen.jpg";
import OrengeClosed from "../assets/img/products/BabaEnergy/Matroska_OrengeClosed.jpg";
import OrengeOpen from "../assets/img/products/BabaEnergy/Matroska_OrengeOpen.jpg";

export const PortfolioCase = (props) => {
  let [specificCase, setspecificCase] = useState(0);
  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/portfolio/Baba_Energy":
        setspecificCase(0);
        break;
      case "/portfolio/Cake":
        setspecificCase(1);
        break;
      case "/portfolio/Dogie":
        setspecificCase(2);
        break;
      default:
        setspecificCase(null);
        break;
    }
  }, []);

  // function to handle click event and open the modal
  const handleClick = (src) => {
    setImageSrc(src);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  // function to close the modal
  const handleClose = () => {
    setImageSrc("");
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <section id="PortfolioCase">
      {isModalOpen && (
        <section id="Modal" onClick={handleClose}>
          <img src={imageSrc} alt="modal image" />
            <a href="#" class="close-button" onClick={handleClose}>
              <div class="in">
                <div class="close-button-block"></div>
                <div class="close-button-block"></div>
              </div>
              <div class="out">
                <div class="close-button-block"></div>
                <div class="close-button-block"></div>
              </div>
            </a>
        </section>
      )}

      <MetaTags title={`Patrik Dahl | ${props.cases[specificCase].caseName}`} />
      {specificCase === 0 ? (
        <main>
          <img src={Ban_Baba} alt="Baba Energy banner" />
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <h2>mediegrafiker svendestykke</h2>
          <article>
            <h3>Info</h3>
            <hr />
            <ul className="Apps">
              <li>
                <img src={Illustrator} alt="Illustrator Logo" />
              </li>
              <li>
                <img src={Indesign} alt="Indesign Logo" />
              </li>
            </ul>
            <p>
              <b>Baba Energy</b> - Østeuropæisk inspireret energidriksmærke, der
              prioriterer branding og promovering af femininitet/feminisme
            </p>
            <section id="Grid">
              <img
                src={GreenClosed}
                alt="GreenClosed"
                onClick={() => handleClick(GreenClosed)}
              />
              <img
                src={PinkClosed}
                alt="PinkClosed"
                onClick={() => handleClick(PinkClosed)}
              />
              <img
                src={OrengeClosed}
                alt="OrengeClosed"
                onClick={() => handleClick(OrengeClosed)}
              />
              <img
                src={GreenOpen}
                alt="GreenOpen"
                onClick={() => handleClick(GreenOpen)}
              />
              <img
                src={PinkOpen}
                alt="PinkOpen"
                onClick={() => handleClick(PinkOpen)}
              />
              <img
                src={OrengeOpen}
                alt="OrengeOpen"
                onClick={() => handleClick(OrengeOpen)}
              />
            </section>
            <ul>
              <li>
                <b>Timeline:</b> 4 Måneder, 2020
              </li>
              <li>
                <b>Kunde:</b> Opdigtet projekt til min Svendeprøve
              </li>
              <li>
                <b>Problemomfang:</b> Konceptudvikling, Illostration, Marketing,
                Branding, Karakterdesign, Logo Design, Typografi, Layout,
                Emballagedesign, Dåse Design, Deadline
              </li>
            </ul>
          </article>
        </main>
      ) : null}
      {specificCase === 1 ? (
        <main>
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
        </main>
      ) : null}
      {specificCase === 2 ? (
        <main>
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
        </main>
      ) : null}
    </section>
  );
};
