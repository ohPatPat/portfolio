import { MetaTags } from "../comp/MetaTags.jsx";
import ImageZoom from "react-image-zooom";
import React, { useState, useEffect } from "react";
import Illustrator from "../assets/img/icons/Icons_Illustrator.svg";
import Indesign from "../assets/img/icons/Icons_Indesign.svg";
import Photoshop from "../assets/img/icons/Icons_Photoshop.svg";
import wordpress from "../assets/img/icons/Icons_Wordpress.svg";
import Canva from "../assets/img/icons/Icons_Canva.svg";

// BabaEnergy pics
import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.jpg";
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

// Springeren
import Ban_Spring from "../assets/img/products/Springeren/Banners_Springeren.jpg";
import TicketFront from "../assets/img/products/Springeren/GoldingTicketFront.png";
import TicketBack from "../assets/img/products/Springeren/GoldingTicketBack.png";
import Mockup from "../assets/img/products/Springeren/Springeren_Mockup2023.jpg";
import Ticket1 from "../assets/img/products/Springeren/Ticket1.jpg";
import Ticket2 from "../assets/img/products/Springeren/Ticket2.jpg";
import FolderBack from "../assets/img/products/Springeren/FolderBack.jpg";
import Moodboard from "../assets/img/products/Springeren/Screenshot 2023-03-09 054603.png";

// Skagen
import Ban_Skagen from "../assets/img/products/Skagen/Banners_Skagen.jpg";
import MockupClosed from "../assets/img/products/Skagen/MockupClosed.jpg";
import MockupOpen from "../assets/img/products/Skagen/MockupOpen.jpg";

import MockupPages1 from "../assets/img/products/Skagen/MockupPages_1.png";
import MockupPages2 from "../assets/img/products/Skagen/MockupPages_2.png";
import MockupPages3 from "../assets/img/products/Skagen/MockupPages_3.png";
import MockupPages4 from "../assets/img/products/Skagen/MockupPages_4.png";
import MockupPages5 from "../assets/img/products/Skagen/MockupPages_5.png";
import MockupPages6 from "../assets/img/products/Skagen/MockupPages_6.png";
import MockupPages7 from "../assets/img/products/Skagen/MockupPages_7.png";
import MockupPages8 from "../assets/img/products/Skagen/MockupPages_8.png";

import Skagen_brochure1 from "../assets/img/products/Skagen/Skagen_brochure1.jpg";
import Skagen_brochure2 from "../assets/img/products/Skagen/Skagen_brochure2.jpg";
import Skagen_brochure3 from "../assets/img/products/Skagen/Skagen_brochure3.jpg";
import Skagen_brochure4 from "../assets/img/products/Skagen/Skagen_brochure4.jpg";
import Skagen_brochure5 from "../assets/img/products/Skagen/Skagen_brochure5.jpg";
import Skagen_brochure6 from "../assets/img/products/Skagen/Skagen_brochure6.jpg";
import Skagen_brochure7 from "../assets/img/products/Skagen/Skagen_brochure7.jpg";
import Skagen_brochure8 from "../assets/img/products/Skagen/Skagen_brochure8.jpg";

// Hjerte
import Ban_Hjerte from "../assets/img/products/Hjerte/Banners_Hjerte.jpg";
import BusMockup from "../assets/img/products/Hjerte/BusMockup.png";
import BusMockup_Finished from "../assets/img/products/Hjerte/Billed 2.jpg";

import Fishing from "../assets/img/products/Hjerte/Fishing.png";
import Horse from "../assets/img/products/Hjerte/Horse.png";
import Road from "../assets/img/products/Hjerte/Road.png";

import Instagram_post from "../assets/img/products/Hjerte/Instagram post.jpg";
import InstaMockup1 from "../assets/img/products/Hjerte/InstaMockup1.png";
import InstaMockup2 from "../assets/img/products/Hjerte/InstaMockup2.png";
import InstaMockup3 from "../assets/img/products/Hjerte/InstaMockup3.png";

//SundhedsSupport
import Ban_SundhedsSupport from "../assets/img/products/SundhedsSupport/Banners_SundhedsSupport.jpg";
import DesktopMockupTop_SundhedsSupport from "../assets/img/products/SundhedsSupport/DesktopMockupTop-SundhedsSupport.png";
import DesktopMockupBot_SundhedsSupport from "../assets/img/products/SundhedsSupport/DesktopMockupBot-SundhedsSupport.png";
import FacebookMockup_SundhedsSupport from "../assets/img/products/SundhedsSupport/FacebookMockup-SundhedsSupport.png";

import BrochureFront_SundhedsSupport from "../assets/img/products/SundhedsSupport/BrochureFront_SundhedsSupport.png";
import BrochureBack_SundhedsSupport from "../assets/img/products/SundhedsSupport/BrochureBack_SundhedsSupport.png";
import Businesscard_SundhedsSupport from "../assets/img/products/SundhedsSupport/Businesscard_SundhedsSupport.png";

export const PortfolioCase = (props) => {
  let [specificCase, setspecificCase] = useState(0);
  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpenW, setIsModalOpenW] = useState(false);
  const [isModalOpenH, setIsModalOpenH] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/portfolio/Baba_Energy":
        setspecificCase(0);
        break;
      case "/portfolio/Springeren":
        setspecificCase(1);
        break;
      case "/portfolio/Skagens_Museum":
        setspecificCase(2);
        break;
      case "/portfolio/Hjerte_Foreningen":
        setspecificCase(3);
        break;
      case "/portfolio/SundhedsSupport":
        setspecificCase(4);
        break;
      default:
        setspecificCase(null);
        break;
    }
  }, []);

  // function to handle click event and open the modal
  const handleClickH = (src) => {
    if (isLargeScreen) {
      setImageSrc(src);
      setIsModalOpenH(true);
      setPrevScrollPos(window.pageYOffset);
    }
  };

  const handleClickW = (src) => {
    if (isLargeScreen) {
      setImageSrc(src);
      setIsModalOpenW(true);
      setPrevScrollPos(window.pageYOffset);
    }
  };

  // function to close the modal
  const handleClose = () => {
    setImageSrc("");
    setIsModalOpenH(false);
    setIsModalOpenW(false);
  };

  useEffect(() => {
    if (isModalOpenW || isModalOpenH) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, prevScrollPos);
    }
  }, [isModalOpenW, isModalOpenH, prevScrollPos]);

  return (
    <section id="PortfolioCase">
      <MetaTags title={`Patrik Dahl | ${props.cases[specificCase].caseName}`} />

      {isModalOpenW && (
        <section id="Modal">
          <ImageZoom
            className="HighlightImgW"
            zoomLensStyl="background-color: red;"
            width="auto"
            height=" 100%"
            src={imageSrc}
            alt={imageSrc}
            zoom="300"
          />

          <span className="close-button" onClick={handleClose}>
            <div className="in">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
            <div className="out">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
          </span>
        </section>
      )}
      {isModalOpenH && (
        <section id="Modal">
          <ImageZoom
            className="HighlightImgH"
            zoomLensStyl="background-color: red;"
            width="auto"
            height=" 100%"
            src={imageSrc}
            alt={imageSrc}
            zoom="300"
          />

          <span className="close-button" onClick={handleClose}>
            <div className="in">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
            <div className="out">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
          </span>
        </section>
      )}

      {specificCase === 0 ? (
        <main>
          <img src={Ban_Baba} alt="Baba Energy banner" loading="lazy" />
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <h2>mediegrafiker svendestykke</h2>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img
                    src={Illustrator}
                    alt="Illustrator Logo"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img src={Indesign} alt="Indesign Logo" loading="lazy" />
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - Østeuropæisk
                inspireret energidriksmærke, der prioriterer branding og
                promovering af femininitet/feminisme👧
              </p>
            </span>

            <section className="Grid Grid3">
              <div>
                <img
                  className="NotDisapear"
                  src={GreenOpen}
                  alt="GreenOpen"
                  loading="lazy"
                  onClick={() => handleClickH(GreenOpen)}
                />
                <img
                  className="Disapear"
                  src={GreenClosed}
                  alt="GreenClosed"
                  loading="lazy"
                  onClick={() => handleClickH(GreenOpen)}
                />
              </div>
              <div>
                <img
                  src={PinkOpen}
                  alt="PinkOpen"
                  loading="lazy"
                  onClick={() => handleClickH(PinkOpen)}
                />
                <img
                  className="Disapear"
                  src={PinkClosed}
                  alt="PinkClosed"
                  loading="lazy"
                  onClick={() => handleClickH(PinkOpen)}
                />
              </div>
              <div>
                <img
                  src={OrengeOpen}
                  alt="OrengeOpen"
                  loading="lazy"
                  onClick={() => handleClickH(OrengeOpen)}
                />
                <img
                  className="Disapear"
                  src={OrengeClosed}
                  alt="OrengeClosed"
                  loading="lazy"
                  onClick={() => handleClickH(OrengeOpen)}
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
            <span>
              <h4>Dåse Design</h4>
              <hr />
              <section className="Grid Grid3">
                <img
                  src={GreenCan}
                  alt="GreenCan"
                  loading="lazy"
                  onClick={() => handleClickH(GreenCan)}
                />
                <img
                  src={PinkCan}
                  alt="PinkCan"
                  loading="lazy"
                  onClick={() => handleClickH(PinkCan)}
                />
                <img
                  src={OrengeCan}
                  alt="OrengeCan"
                  loading="lazy"
                  onClick={() => handleClickH(OrengeCan)}
                />
                <img
                  src={GreenSticker}
                  alt="GreenSticker"
                  loading="lazy"
                  onClick={() => handleClickH(GreenSticker)}
                />
                <img
                  src={PinkSticker}
                  alt="PinkSticker"
                  loading="lazy"
                  onClick={() => handleClickH(PinkSticker)}
                />
                <img
                  src={OrengeSticker}
                  alt="OrengeSticker"
                  loading="lazy"
                  onClick={() => handleClickH(OrengeSticker)}
                />
              </section>
            </span>
            <span>
              <h4>Emballagedesign</h4>
              <hr />
              <section className="Grid Grid3">
                <img
                  src={GreenDieLineFront}
                  alt="GreenDieLineFront"
                  loading="lazy"
                  onClick={() => handleClickH(GreenDieLineFront)}
                />
                <img
                  src={PinkDieLineFront}
                  alt="PinkDieLineFront"
                  loading="lazy"
                  onClick={() => handleClickH(PinkDieLineFront)}
                />
                <img
                  src={OrengeDieLineFront}
                  alt="OrengeDieLineFront"
                  loading="lazy"
                  onClick={() => handleClickH(OrengeDieLineFront)}
                />
              </section>
            </span>

            <span>
              <h4>Konceptudvikling</h4>
              <hr />
              <section className="Grid">
                <img
                  src={BrainStorm}
                  alt="BrainStorm"
                  loading="lazy"
                  onClick={() => handleClickH(BrainStorm)}
                />
              </section>
            </span>
          </article>
        </main>
      ) : null}
      {specificCase === 1 ? (
        <main>
          <img src={Ban_Spring} alt="Spring banner" loading="lazy" />
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <h2>Maritimt oplevelsescenter</h2>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Indesign} alt="Indesign Logo" loading="lazy" />
                </li>
                <li>
                  <img
                    src={Illustrator}
                    alt="Illustrator Logo"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img src={Photoshop} alt="Illustrator Logo" loading="lazy" />
                </li>
                <li>
                  <p>📷</p>
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - En ambitiøs
                genfortolkning af det historiske museum med et fantasifuldt
                twist⛵
              </p>
            </span>
            <section className="Grid">
              <div>
                <img
                  className="MediumSize NotDisapear"
                  src={TicketBack}
                  alt={TicketBack}
                  loading="lazy"
                  onClick={() => handleClickW(TicketBack)}
                />
                <img
                  className="MediumSize Disapear"
                  src={TicketFront}
                  alt={TicketFront}
                  loading="lazy"
                  onClick={() => handleClickW(TicketBack)}
                />
              </div>
            </section>

            <ul>
              <li>
                <b> Tidslinje:</b> 7 Uger, 2018
              </li>
              <li>
                <b>Kunde:</b> Skole projekt - Samarbejde med Springeren Maritimt
                Oplevelsescenter i Aalborg
              </li>
              <li>
                <b>Udfordringer:</b> Konceptudvikling, Fotografering,
                Billedredigering, Marketing, Branding, Logo Design, Typografi,
                Layout, Folder design, Deadline
              </li>
            </ul>
            <span>
              <h4>Folder & Billetter</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={Mockup}
                    alt={Mockup}
                    loading="lazy"
                    onClick={() => handleClickH(Mockup)}
                  />
                </section>
                <section className="Grid Grid2">
                  <img
                    src={Ticket1}
                    alt={Ticket1}
                    loading="lazy"
                    onClick={() => handleClickH(Ticket1)}
                  />
                  <img
                    src={Ticket2}
                    alt={Ticket2}
                    loading="lazy"
                    onClick={() => handleClickH(Ticket2)}
                  />
                </section>
                <section className="Grid">
                  <img
                    src={FolderBack}
                    alt={FolderBack}
                    loading="lazy"
                    onClick={() => handleClickH(FolderBack)}
                  />
                </section>
              </span>
            </span>
            <span>
              <h4>Moodboard</h4>
              <hr />
              <section className="Grid">
                <img
                  src={Moodboard}
                  alt="Moodboard"
                  loading="lazy"
                  onClick={() => handleClickH(Moodboard)}
                />
              </section>
            </span>
          </article>
        </main>
      ) : null}
      {specificCase === 2 ? (
        <main>
          <img src={Ban_Skagen} alt="Skagen banner" loading="lazy" />
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Indesign} alt="Indesign Logo" loading="lazy" />
                </li>
                <li>
                  <p>📷</p>
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - Gamle historier i
                en moderne pakke.
              </p>
            </span>
            <section className="Grid Hover">
              <div>
                <img
                  className="MediumSize NotDisapear"
                  src={MockupOpen}
                  alt={MockupOpen}
                  loading="lazy"
                  onClick={() => handleClickW(MockupOpen)}
                />
                <img
                  className="MediumSize Disapear"
                  src={MockupClosed}
                  alt={MockupClosed}
                  loading="lazy"
                  onClick={() => handleClickW(MockupOpen)}
                />
              </div>
            </section>

            <ul>
              <li>
                <b> Tidslinje:</b> 7 Uger, 2018
              </li>
              <li>
                <b>Kunde:</b> Skole projekt - Samarbejde med Skagens museum
              </li>
              <li>
                <b>Udfordringer:</b> Fotografering, Typografi, Layout, Printe,
                Deadline
              </li>
            </ul>
            <span>
              <h4>Brochure</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={MockupPages1}
                    alt={MockupPages1}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure1)}
                  />
                  <img
                    src={MockupPages2}
                    alt={MockupPages2}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure2)}
                  />
                  <img
                    src={MockupPages3}
                    alt={MockupPages3}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure3)}
                  />
                  <img
                    src={MockupPages4}
                    alt={MockupPages4}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure4)}
                  />
                  <img
                    src={MockupPages5}
                    alt={MockupPages5}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure5)}
                  />
                  <img
                    src={MockupPages6}
                    alt={MockupPages6}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure6)}
                  />
                  <img
                    src={MockupPages7}
                    alt={MockupPages7}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure7)}
                  />
                  <img
                    src={MockupPages8}
                    alt={MockupPages8}
                    loading="lazy"
                    onClick={() => handleClickW(Skagen_brochure8)}
                  />
                </section>
              </span>
            </span>
          </article>
        </main>
      ) : null}
      {specificCase === 3 ? (
        <main>
          <img src={Ban_Hjerte} alt="Hjerte foreningen banner" loading="lazy" />
          <h1>{`- ${props.cases[specificCase].caseName} - `}</h1>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Photoshop} alt="Photoshop Logo" loading="lazy" />
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - Hjælper mænd med
                at se, seriøsiteten i et større billede.
              </p>
            </span>
            <section className="Grid Hover">
              <div>
                <img
                  className="MediumSize NotDisapear"
                  src={BusMockup_Finished}
                  alt={BusMockup_Finished}
                  loading="lazy"
                  onClick={() => handleClickW(BusMockup_Finished)}
                />
                <img
                  className="MediumSize Disapear"
                  src={BusMockup}
                  alt={BusMockup}
                  loading="lazy"
                  onClick={() => handleClickW(BusMockup_Finished)}
                />
              </div>
            </section>

            <ul>
              <li>
                <b> Tidslinje:</b> 2 dage, 2020.
              </li>
              <li>
                <b>Kunde:</b> Projekt Til Min Svendeprøve - Samarbejde med
                Hjerte foreningen.
              </li>
              <li>
                <b>Udfordringer:</b> Konceptudvikling, Marketing,
                Billedbehandling, Typografi, Layout, Deadline.
              </li>
            </ul>
            <span>
              <h4>Bus reklamer</h4>
              <hr />
              <span>
                <section className="Grid Grid3">
                  <img
                    src={Fishing}
                    alt={Fishing}
                    loading="lazy"
                    onClick={() => handleClickW(Fishing)}
                  />
                  <img
                    src={Horse}
                    alt={Horse}
                    loading="lazy"
                    onClick={() => handleClickW(Horse)}
                  />
                  <img
                    src={Road}
                    alt={Road}
                    loading="lazy"
                    onClick={() => handleClickW(Road)}
                  />
                </section>
              </span>
            </span>

            <span>
              <h4>Instagram Karrusel post</h4>
              <hr />
              <span>
                <section className="Grid Grid3">
                  <img
                    src={InstaMockup1}
                    alt={InstaMockup1}
                    loading="lazy"
                    onClick={() => handleClickW(InstaMockup1)}
                  />
                  <img
                    src={InstaMockup2}
                    alt={InstaMockup2}
                    loading="lazy"
                    onClick={() => handleClickW(InstaMockup2)}
                  />
                  <img
                    src={InstaMockup3}
                    alt={InstaMockup3}
                    loading="lazy"
                    onClick={() => handleClickW(InstaMockup3)}
                  />
                </section>
                <section className="Grid">
                  <img
                    src={Instagram_post}
                    alt={Instagram_post}
                    loading="lazy"
                    onClick={() => handleClickW(Instagram_post)}
                  />
                </section>
              </span>
            </span>
          </article>
        </main>
      ) : null}
      {specificCase === 4 ? (
        <main>
          <img
            src={Ban_SundhedsSupport}
            alt="SundhedsSupport banner"
            loading="lazy"
          />
          <h1>{`- ${props.cases[specificCase].caseName} - `}</h1>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Indesign} alt="Indesign Logo" loading="lazy" />
                </li>
                <li>
                  <img
                    src={Illustrator}
                    alt="Illustrator Logo"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img src={Photoshop} alt="Photoshop Logo" loading="lazy" />
                </li>
                <li>
                  <img src={wordpress} alt="wordpress Logo" loading="lazy" />
                </li>
                <li>
                  <img src={Canva} alt="Canva Logo" loading="lazy" />
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - Samme hjælp,
                men med et nyt look!💆
              </p>
            </span>
            <section className="Grid Hover">
              <div>
                <a href="https://sundhedssupport.dk" target="_blank">
                  <img
                    className="MediumSize NotDisapear"
                    src={DesktopMockupBot_SundhedsSupport}
                    alt={DesktopMockupBot_SundhedsSupport}
                    loading="lazy"
                  />
                  <img
                    className="MediumSize Disapear"
                    src={DesktopMockupTop_SundhedsSupport}
                    alt={DesktopMockupTop_SundhedsSupport}
                    loading="lazy"
                  />
                </a>
              </div>
            </section>

            <ul>
              <li>
                <b> Tidslinje:</b> 4 uger, 2023.
              </li>
              <li>
                <b>Kunde:</b> Arbejdspraktik hos SundhedSupport.
              </li>
              <li>
                <b>Udfordringer:</b> Research, Rebranding, Marketing, Typografi, Layout, SoMe, kodning,
                Deadline.
              </li>
            </ul>
            <span>
              <h4>Facebook banner</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={FacebookMockup_SundhedsSupport}
                    alt={FacebookMockup_SundhedsSupport}
                    loading="lazy"
                    onClick={() => handleClickW(FacebookMockup_SundhedsSupport)}
                  />
                </section>
              </span>
            </span>

            <span>
              <h4>Brochure</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={BrochureFront_SundhedsSupport}
                    alt={BrochureFront_SundhedsSupport}
                    loading="lazy"
                    onClick={() => handleClickW(BrochureFront_SundhedsSupport)}
                  />
                </section>
                <section className="Grid">
                  <img
                    src={BrochureBack_SundhedsSupport}
                    alt={BrochureBack_SundhedsSupport}
                    loading="lazy"
                    onClick={() => handleClickW(BrochureBack_SundhedsSupport)}
                  />
                </section>
              </span>
            </span>

            <span>
              <h4>Visitkort</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={Businesscard_SundhedsSupport}
                    alt={Businesscard_SundhedsSupport}
                    loading="lazy"
                    onClick={() => handleClickW(Businesscard_SundhedsSupport)}
                  />
                </section>
              </span>
            </span>

          </article>
        </main>
      ) : null}
    </section>
  );
};
