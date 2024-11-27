import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section id={"about"} className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
      
      
          <img src="me.png" height="150" width="150"></img>
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          WEB developer, Designer, and Trainer.
        </motion.h1>

        <p className="sub-title">
        I’m Mazahir Hussain, a web developer and UI/UX designer based in Gilgit-Baltistan, Pakistan. Along with my Bachelor’s degree in Computer Science, I have expertise in Node.js, React.js, HTML, CSS, and modern web technologies. I specialize in building dynamic and responsive web applications while creating user-friendly interfaces that provide seamless user experiences. Some of the projects I’m most proud of can be found below.
        </p>

        <div className="all-icons flex">
          <a
            href="https://github.com/Mazahir-Hussain-malik"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/mazahihussain/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-linkedin"
          ></a>
           <a
            href="https://www.instagram.com/mazahir177/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-instagram"
          ></a>
           <a
            href="https://www.linkedin.com/in/mohamad-jisri-a6354b135/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-whatsapp"
          ></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
