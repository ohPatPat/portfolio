import "../App.scss";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
export const PageAnimation = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setPlayAnimation(true);
      }, 4000); // Change the delay time to your desired value in milliseconds
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <section id="PageAnimation" className={playAnimation ? "Show" : "noShow"}>

      <div id="Typewriter">
        <Typewriter
          options={{ loop: false, delay: 100 }}
          onInit={(typewriter) => {
            typewriter.pauseFor(1000).typeString("Patrik Dahl").start();
          }}
        />
      </div>
    </section>
  );
};
