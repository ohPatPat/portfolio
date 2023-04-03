import { MetaTags } from "../comp/MetaTags.jsx";
import ImageZoom from "react-image-zooom";
import React, { useState, useEffect } from "react";
import Illustrator from "../assets/img/icons/Icons_Illustrator.svg";
import Indesign from "../assets/img/icons/Icons_Indesign.svg";
import Photoshop from "../assets/img/icons/Icons_Photoshop.svg";

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

export const PortfolioCase = (props) => {
  let [specificCase, setspecificCase] = useState(0);
  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpenW, setIsModalOpenW] = useState(false);
  const [isModalOpenH, setIsModalOpenH] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
      default:
        setspecificCase(null);
        break;
    }
  }, []);

  // function to handle click event and open the modal
  const handleClickH = (src) => {
    setImageSrc(src);
    setIsModalOpenH(true);
    setPrevScrollPos(window.pageYOffset);
  };

  const handleClickW = (src) => {
    setImageSrc(src);
    setIsModalOpenW(true);
    setPrevScrollPos(window.pageYOffset);
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
          <img src={Ban_Baba} alt="Baba Energy banner" loading="lazy"/>
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <h2>mediegrafiker svendestykke</h2>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Illustrator} alt="Illustrator Logo" loading="lazy"/>
                </li>
                <li>
                  <img src={Indesign} alt="Indesign Logo" loading="lazy"/>
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
          <img src={Ban_Spring} alt="Spring banner" loading="lazy"/>
          <h1>{`- ${props.cases[specificCase].caseName} -`}</h1>
          <h2>Maritimt oplevelsescenter</h2>
          <article>
            <span>
              <h3>Info</h3>
              <hr />
              <ul className="Apps">
                <li>
                  <img src={Indesign} alt="Indesign Logo" loading="lazy"/>
                </li>
                <li>
                  <img src={Illustrator} alt="Illustrator Logo" loading="lazy"/>
                </li>
                <li>
                  <img src={Photoshop} alt="Illustrator Logo" loading="lazy"/>
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
    </section>
  );
};
