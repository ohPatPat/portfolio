import React, { useState, useEffect } from "react";
import { Squash as Hamburger, Squash } from "hamburger-react";
import { NavLink } from "react-router-dom";

export const Nav = (props) => {
  return (
    <nav id={props.identify}>
      <ul onClick={props.click}>
        <li>
          <NavLink to="/portfolio" onClick={props.click} className={props.name}>
            Portfolio
          </NavLink>
          <div className="Hand" />
          <hr />
        </li>
        <li>
          <NavLink to="/about" onClick={props.click} className={props.name}>
            Om mig
          </NavLink>
          <div className="Hand" />
          <hr />
        </li>

        <li>
          <NavLink to="/contact" onClick={props.click} className={props.name}>
            Kontakt
          </NavLink>
          <div className="Hand" />
          <hr />
        </li>
      </ul>
    </nav>
  );
};

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  if (isOpen) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    if (!isOpen) {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Squash toggled={isOpen} toggle={setOpen} id={isOpen ? "Light" : "Dark"}/>
      <Nav
        identify={isOpen ? "burgerActive" : "burgerNotActive"}
        click={handleToggle}
      />
    </>
  );
};


export const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 300; // Adjust this value based on when you want the button to appear

    setIsVisible(scrollTop > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      OP
    </button>
  );
};

