"use client";

import { useEffect, useState } from "react";
import classes from "./welcome.module.css";

const messages = [
  "Welcome", // English
  "Benvenuto", // Italian
  "Bienvenido", // Spanish
  "Bem-vindo", // Portuguese
  "Bienvenue", // French
  "Willkommen", // German
  "欢迎 ", // Chinese
  "Καλώς ήρθατε", // Greek
  "Bun venit", // Romanian
  "Witamy", // Polish
  "Welkom", // Tagalog
  "Välkommen", // Amharic
  "Laipni lūdzam", // Arabic (last message)
  "მოგესალმებით", // Georgian
];

export default function Welcome() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [containerFadeOut, setContainerFadeOut] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const isLast = index === messages.length - 1;
    const delay = isLast ? 1600 : Math.max(150, 600 - index * 100);
    const fadeOutTime = isLast ? 1000 : 200;

    const timer = setTimeout(() => {
      setFadeIn(false);
      setTimeout(() => {
        if (isLast) {
          setTimeout(() => setContainerFadeOut(true), 400); // wait before lifting
          setTimeout(() => setDone(true), 1800); // total delay before full removal
        } else {
          setIndex((prev) => prev + 1);
          setFadeIn(true);
        }
      }, fadeOutTime);
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  if (done) return null;

  return (
    <div
      className={`${classes.welcomeContainer} ${
        containerFadeOut ? `${classes.containerFadeUp}` : ""
      }`}
    >
      <h5
        className={`${classes.welcomeText} ${
          fadeIn ? `${classes.fadeIn}` : `${classes.fadeOut}`
        }`}
      >
        {messages[index]}
      </h5>
    </div>
  );
}
