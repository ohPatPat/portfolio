import { MetaTags } from "../comp/MetaTags.jsx";
import ImageZoom from "react-image-zooom";
import React, { useState, useEffect } from "react";
import Illustrator from "../assets/img/icons/Icons_Illustrator.svg";
import Indesign from "../assets/img/icons/Icons_Indesign.svg";
import Photoshop from "../assets/img/icons/Icons_Photoshop.svg";
import wordpress from "../assets/img/icons/Icons_WordPress.svg";
import Canva from "../assets/img/icons/Icons_Canva.svg";
import Vscode from "../assets/img/icons/Icons_Vscode.svg";
import Camera from "../assets/img/icons/Icons_Camera.svg";

// BabaEnergy pics
import Ban_Baba from "../assets/img/products/BabaEnergy/Banners_BabaEnergy.webp";
import GreenCan from "../assets/img/products/BabaEnergy/3 cans Mockup Matcha.webp";
import PinkCan from "../assets/img/products/BabaEnergy/3 cans Mockup Strawberry.webp";
import OrengeCan from "../assets/img/products/BabaEnergy/3 cans Mockup Orange.webp";
import GreenClosed from "../assets/img/products/BabaEnergy/Matroska_GreenClosed.webp";
import GreenOpen from "../assets/img/products/BabaEnergy/Matroska_GreenOpen.webp";
import PinkClosed from "../assets/img/products/BabaEnergy/Matroska_PinkClosed.webp";
import PinkOpen from "../assets/img/products/BabaEnergy/Matroska_PinkOpen.webp";
import OrengeClosed from "../assets/img/products/BabaEnergy/Matroska_OrengeClosed.webp";
import OrengeOpen from "../assets/img/products/BabaEnergy/Matroska_OrengeOpen.webp";
import GreenSticker from "../assets/img/products/BabaEnergy/Matroska Matcha.webp";
import PinkSticker from "../assets/img/products/BabaEnergy/Matroska Strawberry.webp";
import OrengeSticker from "../assets/img/products/BabaEnergy/Matroska Orange.webp";
import GreenDieLineFront from "../assets/img/products/BabaEnergy/Matroska 4pack Dieline_Green.webp";
import PinkDieLineFront from "../assets/img/products/BabaEnergy/Matroska 4pack Dieline_Pink.webp";
import OrengeDieLineFront from "../assets/img/products/BabaEnergy/Matroska 4pack Dieline_Orenge.webp";
import BrainStorm from "../assets/img/products/BabaEnergy/Screenshot1.webp";

// Springeren
import Ban_Spring from "../assets/img/products/Springeren/Banners_Springeren.webp";
import TicketFront from "../assets/img/products/Springeren/GoldingTicketFront.webp";
import TicketBack from "../assets/img/products/Springeren/GoldingTicketBack.webp";
import Mockup from "../assets/img/products/Springeren/Springeren_Mockup2023.webp";
import Ticket1 from "../assets/img/products/Springeren/Ticket1.webp";
import Ticket2 from "../assets/img/products/Springeren/Ticket2.webp";
import FolderBack from "../assets/img/products/Springeren/FolderBack.webp";
import Moodboard from "../assets/img/products/Springeren/Screenshot 2023-03-09 054603.webp";

// Skagen
import Ban_Skagen from "../assets/img/products/Skagen/Banners_Skagen.webp";
import MockupClosed from "../assets/img/products/Skagen/MockupClosed.webp";
import MockupOpen from "../assets/img/products/Skagen/MockupOpen.webp";

import MockupPages1 from "../assets/img/products/Skagen/MockupPages_1.webp";
import MockupPages2 from "../assets/img/products/Skagen/MockupPages_2.webp";
import MockupPages3 from "../assets/img/products/Skagen/MockupPages_3.webp";
import MockupPages4 from "../assets/img/products/Skagen/MockupPages_4.webp";
import MockupPages5 from "../assets/img/products/Skagen/MockupPages_5.webp";
import MockupPages6 from "../assets/img/products/Skagen/MockupPages_6.webp";
import MockupPages7 from "../assets/img/products/Skagen/MockupPages_7.webp";
import MockupPages8 from "../assets/img/products/Skagen/MockupPages_8.webp";

import Skagen_brochure1 from "../assets/img/products/Skagen/Skagen_brochure1.webp";
import Skagen_brochure2 from "../assets/img/products/Skagen/Skagen_brochure2.webp";
import Skagen_brochure3 from "../assets/img/products/Skagen/Skagen_brochure3.webp";
import Skagen_brochure4 from "../assets/img/products/Skagen/Skagen_brochure4.webp";
import Skagen_brochure5 from "../assets/img/products/Skagen/Skagen_brochure5.webp";
import Skagen_brochure6 from "../assets/img/products/Skagen/Skagen_brochure6.webp";
import Skagen_brochure7 from "../assets/img/products/Skagen/Skagen_brochure7.webp";
import Skagen_brochure8 from "../assets/img/products/Skagen/Skagen_brochure8.webp";

// Hjerte
import Ban_Hjerte from "../assets/img/products/Hjerte/Banners_Hjerte.webp";
import BusMockup from "../assets/img/products/Hjerte/BusMockup.webp";
import BusMockup_Finished from "../assets/img/products/Hjerte/Billed 2.webp";

import Fishing from "../assets/img/products/Hjerte/Fishing.webp";
import Horse from "../assets/img/products/Hjerte/Horse.webp";
import Road from "../assets/img/products/Hjerte/Road.webp";

import Instagram_post from "../assets/img/products/Hjerte/Instagram post.webp";
import InstaMockup1 from "../assets/img/products/Hjerte/InstaMockup1.webp";
import InstaMockup2 from "../assets/img/products/Hjerte/InstaMockup2.webp";
import InstaMockup3 from "../assets/img/products/Hjerte/InstaMockup3.webp";

//SundhedsSupport
import Ban_SundhedsSupport from "../assets/img/products/SundhedsSupport/Banners_SundhedsSupport.webp";
import DesktopMockupTop_SundhedsSupport from "../assets/img/products/SundhedsSupport/DesktopMockupTop-SundhedsSupport.webp";
import DesktopMockupBot_SundhedsSupport from "../assets/img/products/SundhedsSupport/DesktopMockupBot-SundhedsSupport.webp";
import FacebookMockup_SundhedsSupport from "../assets/img/products/SundhedsSupport/FacebookMockup-SundhedsSupport.webp";

import BrochureFront_SundhedsSupport from "../assets/img/products/SundhedsSupport/BrochureFront_SundhedsSupport.webp";
import BrochureBack_SundhedsSupport from "../assets/img/products/SundhedsSupport/BrochureBack_SundhedsSupport.webp";
import Businesscard_SundhedsSupport from "../assets/img/products/SundhedsSupport/Businesscard_SundhedsSupport.webp";

//PatiaWorkshop
import Ban_PatiaWorkshop from "../assets/img/products/PatiaWorkshop/Banners_PatiaWorkshop.webp";
import Patia_DesktopMockup from "../assets/img/products/PatiaWorkshop/Patia_DesktopMockup.webp";
import Patia_DesktopMockup2 from "../assets/img/products/PatiaWorkshop/Patia_DesktopMockup2.webp";

import Patia_PhoneMockup from "../assets/img/products/PatiaWorkshop/Patia_PhoneMockup.webp";
import Patia_PhoneMockup2 from "../assets/img/products/PatiaWorkshop/Patia_PhoneMockup2.webp";
import Patia_PhoneMockup3 from "../assets/img/products/PatiaWorkshop/Patia_PhoneMockup3.webp";
import Patia_PhoneMockup4 from "../assets/img/products/PatiaWorkshop/Patia_PhoneMockup4.webp";

import SekigetsuYukiLogoV2 from "../assets/img/products/PatiaWorkshop/SekigetsuYukiLogoV2.webp";
import EllenOverlaysWaterMark from "../assets/img/products/PatiaWorkshop/EllenOverlaysWaterMark.webp";
import ZukiiOverlaysWaterMark from "../assets/img/products/PatiaWorkshop/ZukiiOverlaysWaterMark.webp";
import JuninyaOverlaysWaterMark from "../assets/img/products/PatiaWorkshop/JuninyaOverlaysWaterMark.webp";

//ArtursPirazkov
import Ban_Arturs from "../assets/img/products/Arturs/Banners_Arturs.webp";
import Arturs_DesktopMockup from "../assets/img/products/Arturs/Arturs_DesktopMockup.webp";
import Arturs_DesktopMockup2 from "../assets/img/products/Arturs/Arturs_DesktopMockup2.webp";

import Arturs_PhoneMockup from "../assets/img/products/Arturs/Arturs_PhoneMockup.webp";
import Arturs_PhoneMockup2 from "../assets/img/products/Arturs/Arturs_PhoneMockup2.webp";
import Arturs_Logo from "../assets/img/products/Arturs/Logo.webp";
import Arturs_Workboard from "../assets/img/products/Arturs/Workboard.webp";

export const PortfolioCase = (props) => {
  let [specificCase, setspecificCase] = useState(0);
  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpenW, setIsModalOpenW] = useState(false);
  const [isModalOpenH, setIsModalOpenH] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1100);
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
      case "/portfolio/PatiaWorkshop":
        setspecificCase(5);
        break;
      case "/portfolio/ArtursPirazkov":
        setspecificCase(6);
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
      setPrevScrollPos(window.scrollY);
    }
  };

  const handleClickW = (src) => {
    if (isLargeScreen) {
      setImageSrc(src);
      setIsModalOpenW(true);
      setPrevScrollPos(window.scrollY);
    }
  };

  console.log(imageSrc);

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
                <b> Beskrivelse:</b> Et fiktivt svendeprøveprojekt, som jeg har
                designet og udviklet helt fra bunden. Inspirationen hentede jeg
                fra den måde, de flereste energidrikke er typisk markedsføret
                til mænd. Derfor valgte jeg at gå i en modsat retning og tilføge
                mere personligheder.
              </li>
              <li>
                <b> Tidslinje:</b> 4 Måneder, 2020.
              </li>
              <li>
                <b>Kunde:</b> Opdigtet projekt til min Svendeprøve.
              </li>
              <li>
                <b>Udfordringer:</b> Konceptudvikling, Illostration, Marketing,
                Branding, Karakterdesign, Logo Design, Typografi, Layout,
                Emballagedesign, Dåse Design, Deadline.
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
                  <img src={Photoshop} alt="Photoshop Logo" loading="lazy" />
                </li>
                <li>
                  <img src={Camera} alt="Camera" loading="lazy" />
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
                <b> Beskrivelse:</b> Rebranding af Springeren Maritimt
                Oplevelsescenter og exempler på deres nye produkter.
              </li>
              <li>
                <b> Tidslinje:</b> 7 Uger, 2018.
              </li>
              <li>
                <b>Kunde:</b> Skole projekt - Samarbejde med Springeren Maritimt
                Oplevelsescenter i Aalborg.
              </li>
              <li>
                <b>Udfordringer:</b> Konceptudvikling, Fotografering,
                Billedredigering, Marketing, Branding, Logo Design, Typografi,
                Layout, Folder Design, Deadline.
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
                  <img src={Camera} alt="Camera" loading="lazy" />
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - Gamle historier i
                en moderne pakke. 🖼️
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
                <b> Beskrivelse:</b> En simpel og moderne, men funktionel
                brochure.
              </li>
              <li>
                <b> Tidslinje:</b> 7 Uger, 2018.
              </li>
              <li>
                <b>Kunde:</b> Skole projekt - Samarbejde med Skagens Museum.
              </li>
              <li>
                <b>Udfordringer:</b> Fotografering, Typografi, Layout, Printe,
                Deadline.
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
                at se, seriøsiteten i et større billede. ❤️
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
                <b> Beskrivelse:</b> En opgave, hvor jeg fik mulighed for at
                udarbejde en reklamekampagne for Hjerteforeningen. Jeg
                besluttede at skabe en række busreklamer, der sætter fokus på
                mænd, som har udfordringer med at tage vare på sig selv. I
                stedet for at negligere deres eget helbred, foreslår kampagnen,
                at de bør tænke på deres familie. Dette budskab formidles gennem
                "photobashing" og nogle slagkraftige overskrifter, hvor vi ser
                børn, der savner deres fædre.
              </li>
              <li>
                <b> Tidslinje:</b> 2 dage, 2020.
              </li>
              <li>
                <b>Kunde:</b> Projekt Til Min Svendeprøve - Samarbejde med
                Hjerteforeningen.
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
                <b>{props.cases[specificCase].caseName}</b> - Samme hjælp, men
                med et nyt look!💆
              </p>
            </span>
            <section className="Grid Hover">
              <div>
                <a
                  href="https://sundhedssupport.dk"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <b> Beskrivelse:</b> En 4 ugers arbejdspraktik hos
                SundhedsSupport. hvor jeg havde muligheden for at hjælpe Inger
                Viborg, med at rebrande hindes virksomhed med, at udarbejde nye
                folder, visitkort, socialle medie og opdater hindes hjemmeside.
              </li>
              <li>
                <b> Tidslinje:</b> 4 uger, 2023.
              </li>
              <li>
                <b>Kunde:</b> Arbejdspraktik hos SundhedSupport.
              </li>
              <li>
                <b>Udfordringer:</b> Research, Rebranding, Marketing, Typografi,
                Layout, SoMe, kodning, Deadline.
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
      {specificCase === 5 ? (
        <main>
          <img
            src={Ban_PatiaWorkshop}
            alt="Patia Workshop banner"
            loading="lazy"
          />
          <h1>{`- ${props.cases[specificCase].caseName} - `}</h1>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Vscode} alt="Vscode Logo" loading="lazy" />
                </li>
                <li>
                  <img
                    src={Illustrator}
                    alt="Illustrator Logo"
                    loading="lazy"
                  />
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - Unikt
                "Mobile-First" porfolio 📱
              </p>
            </span>
            <section className="Grid Hover">
              <div>
                <a
                  href="https://patiaworkshop.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="MediumSize NotDisapear"
                    src={Patia_DesktopMockup2}
                    alt={Patia_DesktopMockup2}
                    loading="lazy"
                  />
                  <img
                    className="MediumSize Disapear"
                    src={Patia_DesktopMockup}
                    alt={Patia_DesktopMockup}
                    loading="lazy"
                  />
                </a>
              </div>
            </section>

            <ul>
              <li>
                <b> Beskrivelse:</b> Patiaworkshop er en portefølje designet til mine grafikprojekter for YouTubere og streamere. Det er en "Mobil-First" hjemmeside, da 80% af internetbrugerne anvender deres mobiltelefoner til at gå på internettet.
              </li>
              <li>
                <b> Tidslinje:</b> 2 måneder, 2023.
              </li>
              <li>
                <b>Kunde:</b> Personlig projekt.
              </li>
              <li>
                <b>Udfordringer:</b> Kodning - React, Html, Scss.
              </li>
            </ul>
            <span>
              <h4>Mobil</h4>
              <hr />
              <span>
                <section className="Grid Grid2">
                  <img
                    src={Patia_PhoneMockup}
                    alt={Patia_PhoneMockup}
                    loading="lazy"
                    onClick={() => handleClickW(Patia_PhoneMockup)}
                  />
                  <img
                    src={Patia_PhoneMockup2}
                    alt={Patia_PhoneMockup2}
                    loading="lazy"
                    onClick={() => handleClickW(Patia_PhoneMockup2)}
                  />
                  <img
                    src={Patia_PhoneMockup3}
                    alt={Patia_PhoneMockup3}
                    loading="lazy"
                    onClick={() => handleClickW(Patia_PhoneMockup3)}
                  />
                  <img
                    src={Patia_PhoneMockup4}
                    alt={Patia_PhoneMockup4}
                    loading="lazy"
                    onClick={() => handleClickW(Patia_PhoneMockup4)}
                  />
                </section>
              </span>
            </span>

            <span>
              <h4>Produkter fra PatiaWorkshop.com</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={SekigetsuYukiLogoV2}
                    alt={SekigetsuYukiLogoV2}
                    loading="lazy"
                    onClick={() => handleClickW(SekigetsuYukiLogoV2)}
                  />
                </section>
                <section className="Grid Grid3">
                  <img
                    src={EllenOverlaysWaterMark}
                    alt={EllenOverlaysWaterMark}
                    loading="lazy"
                    onClick={() => handleClickW(EllenOverlaysWaterMark)}
                  />
                  <img
                    src={ZukiiOverlaysWaterMark}
                    alt={ZukiiOverlaysWaterMark}
                    loading="lazy"
                    onClick={() => handleClickW(ZukiiOverlaysWaterMark)}
                  />
                  <img
                    src={JuninyaOverlaysWaterMark}
                    alt={JuninyaOverlaysWaterMark}
                    loading="lazy"
                    onClick={() => handleClickW(JuninyaOverlaysWaterMark)}
                  />
                </section>
              </span>
            </span>
          </article>
        </main>
      ) : null}
      {specificCase === 6 ? (
        <main>
          <img src={Ban_Arturs} alt="Arturs Pirazkov banner" loading="lazy" />
          <h1>{`- ${props.cases[specificCase].caseName} - `}</h1>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Vscode} alt="Vscode Logo" loading="lazy" />
                </li>
                <li>
                  <img
                    src={Illustrator}
                    alt="Illustrator Logo"
                    loading="lazy"
                  />
                </li>
              </ul>
              <p>
                <b>{props.cases[specificCase].caseName}</b> - En udenlandsk
                fotograf med dansk kvalitet billeder 📷
              </p>
            </span>
            <section className="Grid Hover">
              <div>
                <a
                  href="https://arturspirazkov.dk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="MediumSize NotDisapear"
                    src={Arturs_DesktopMockup2}
                    alt={Arturs_DesktopMockup2}
                    loading="lazy"
                  />
                  <img
                    className="MediumSize Disapear"
                    src={Arturs_DesktopMockup}
                    alt={Arturs_DesktopMockup}
                    loading="lazy"
                  />
                </a>
              </div>
            </section>

            <ul>
            <li>
                <b> Beskrivelse:</b> En simpel "One Page" hjemmeside for en fotograf, komplet med et logo.
              </li>
              <li>
                <b> Tidslinje:</b> 3 måneder, 2024.
              </li>
              <li>
                <b>Kunde:</b> Arturs Pirazkov.
              </li>
              <li>
                <b>Udfordringer:</b> Kundekontakt - Branding - Logo Design -
                Layout - Kodning.
              </li>
            </ul>
            <span>
              <h4>Mobil</h4>
              <hr />
              <span>
                <section className="Grid Grid2">
                  <img
                    src={Arturs_PhoneMockup}
                    alt={Arturs_PhoneMockup}
                    loading="lazy"
                    onClick={() => handleClickW(Arturs_PhoneMockup)}
                  />
                  <img
                    src={Arturs_PhoneMockup2}
                    alt={Arturs_PhoneMockup2}
                    loading="lazy"
                    onClick={() => handleClickW(Arturs_PhoneMockup2)}
                  />
                </section>
              </span>
            </span>

            <span>
              <h4>Logo</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={Arturs_Logo}
                    alt={Arturs_Logo}
                    loading="lazy"
                    onClick={() => handleClickW(Arturs_Logo)}
                  />
                </section>
              </span>
            </span>

            <span>
              <h4>KONCEPTUDVIKLING</h4>
              <hr />
              <span>
                <section className="Grid">
                  <img
                    src={Arturs_Workboard}
                    alt={Arturs_Workboard}
                    loading="lazy"
                    onClick={() => handleClickW(Arturs_Workboard)}
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
