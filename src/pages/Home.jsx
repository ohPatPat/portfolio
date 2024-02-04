import { Galaxy } from "../comp/galaxy/Galaxy.jsx";
import { MetaTags } from "../comp/MetaTags.jsx";
import React, { useState, useEffect } from "react";
import { Nav } from "../comp/header/Navigation.jsx";

export const Home = (props) => {
  let [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    // You can set the currentPage state based on the current page
    setCurrentPage(window.location.pathname);
  }, []);

  const handleClick = () => {
    setCurrentPage(window.location.pathname);
  };

  return (
    <section id="Home">
      <MetaTags title={props.title}></MetaTags>
      <main>
        <Galaxy />
        <small> "For bedre brugeroplevelse anbefaler jeg, at ikke bruge <br /> Firefox eller Safari-browseren"</small>
      </main>
    </section>
  );
};
