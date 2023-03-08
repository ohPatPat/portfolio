import { MetaTags } from "../comp/MetaTags.jsx";
import ImageZoom from "react-image-zooom";
import React, { useState, useEffect } from "react";
import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.jpg";
import Illustrator from "../assets/img/icons/Icons_Illustrator.svg";
import Indesign from "../assets/img/icons/Icons_Indesign.svg";

import GreenCan from "../assets/img/products/BabaEnergy/3 cans Mockup Matcha.jpg";
import PinkCan from "../assets/img/products/BabaEnergy/3 cans Mockup Strawberry.jpg";
import OrengeCan from "../assets/img/products/BabaEnergy/3 cans Mockup Orange.jpg";

import GreenClosed from "../assets/img/products/BabaEnergy/Matroska_GreenClosed.jpg";
import GreenOpen from "../assets/img/products/BabaEnergy/Matroska_GreenOpen.jpg";
import PinkClosed from "../assets/img/products/BabaEnergy/Matroska_PinkClosed.jpg";
import PinkOpen from "../assets/img/products/BabaEnergy/Matroska_PinkOpen.jpg";
import OrengeClosed from "../assets/img/products/BabaEnergy/Matroska_OrengeClosed.jpg";
import OrengeOpen from "../assets/img/products/BabaEnergy/Matroska_OrengeOpen.jpg";

import GreenSticker from "../assets/img/products/BabaEnergy/Matroska Matcha.jpg";
import PinkSticker from "../assets/img/products/BabaEnergy/Matroska Strawberry.jpg";
import OrengeSticker from "../assets/img/products/BabaEnergy/Matroska Orange.jpg";

import GreenDieLineFront from "../assets/img/products/BabaEnergy/Matroska 4pack Dieline_Green.jpg";
import PinkDieLineFront from "../assets/img/products/BabaEnergy/Matroska 4pack Dieline_Pink.jpg";
import OrengeDieLineFront from "../assets/img/products/BabaEnergy/Matroska 4pack Dieline_Orenge.jpg";

import BrainStorm from "../assets/img/products/BabaEnergy/Screenshot1.png";

export const PortfolioCase = (props) => {
  let [specificCase, setspecificCase] = useState(0);
  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
    setPrevScrollPos(window.pageYOffset);
    document.body.style.overflow = "hidden";
  };

  // function to close the modal
  const handleClose = () => {
    setImageSrc("");
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, prevScrollPos);
    }
  }, [isModalOpen, prevScrollPos]);

  return (
    <section id="PortfolioCase">
      {isModalOpen && (
        <section id="Modal">
          <ImageZoom
            className="HighlightImg"
            width="auto"
            height=" 100%"
            src={imageSrc}
            alt={imageSrc}
            zoom="300"
          />

          <a href="#" className="close-button" onClick={handleClose}>
            <div className="in">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
            <div className="out">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
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
              prioriterer branding og promovering af femininitet/feminisme👧
            </p>
            <section className="Grid">
              <div>
                <img
                  src={GreenOpen}
                  alt="GreenOpen"
                  onClick={() => handleClick(GreenOpen)}
                />
                <img
                  src={GreenClosed}
                  alt="GreenClosed"
                  onClick={() => handleClick(GreenOpen)}
                />
              </div>
              <div>
                <img
                  src={PinkOpen}
                  alt="PinkOpen"
                  onClick={() => handleClick(PinkOpen)}
                />
                <img
                  src={PinkClosed}
                  alt="PinkClosed"
                  onClick={() => handleClick(PinkOpen)}
                />
              </div>
              <div>
                <img
                  src={OrengeOpen}
                  alt="OrengeOpen"
                  onClick={() => handleClick(OrengeOpen)}
                />
                <img
                  src={OrengeClosed}
                  alt="OrengeClosed"
                  onClick={() => handleClick(OrengeOpen)}
                />
              </div>
            </section>

            <ul>
              <li>
                <b> Tidslinje:</b> 4 Måneder, 2020
              </li>
              <li>
                <b>Kunde:</b> Opdigtet projekt til min Svendeprøve
              </li>
              <li>
                <b>Udfordringer:</b> Konceptudvikling, Illostration, Marketing,
                Branding, Karakterdesign, Logo Design, Typografi, Layout,
                Emballagedesign, Dåse Design, Deadline
              </li>
            </ul>
            <h4>Dåse Design</h4>
            <hr />
            <section className="Grid">
              <img
                src={GreenCan}
                alt="GreenCan"
                onClick={() => handleClick(GreenCan)}
              />
              <img
                src={PinkCan}
                alt="PinkCan"
                onClick={() => handleClick(PinkCan)}
              />
              <img
                src={OrengeCan}
                alt="OrengeCan"
                onClick={() => handleClick(OrengeCan)}
              />
              <img
                src={GreenSticker}
                alt="GreenSticker"
                onClick={() => handleClick(GreenSticker)}
              />
              <img
                src={PinkSticker}
                alt="PinkSticker"
                onClick={() => handleClick(PinkSticker)}
              />
              <img
                src={OrengeSticker}
                alt="OrengeSticker"
                onClick={() => handleClick(OrengeSticker)}
              />
            </section>
            <h4>Emballagedesign</h4>
            <hr />
            <section className="Grid">
              <img
                src={GreenDieLineFront}
                alt="GreenDieLineFront"
                onClick={() => handleClick(GreenDieLineFront)}
              />
              <img
                src={PinkDieLineFront}
                alt="PinkDieLineFront"
                onClick={() => handleClick(PinkDieLineFront)}
              />
              <img
                src={OrengeDieLineFront}
                alt="OrengeDieLineFront"
                onClick={() => handleClick(OrengeDieLineFront)}
              />
            </section>
            <h4>Konceptudvikling</h4>
            <hr />
            <section className="NoGrid">
              <img
                src={BrainStorm}
                alt={BrainStorm}
                onClick={() => handleClick(BrainStorm)}
              />
            </section>
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
