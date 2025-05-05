"use client";

import Image from "next/image";
import imageOne from "@/public/image1.jpg";
import imageTwo from "@/public/image2.jpg";
import imageFour from "@/public/image4.jpg";
import imageFive from "@/public/home.jpg";
import { useEffect, useState } from "react";
import classes from "./homePageAbout.module.css";

export default function ImageChanger() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [imageOne, imageTwo, imageFour, imageFive];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // trigger fade-in
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${classes.imageWrapper} ${
        fade ? classes.fadeIn : classes.fadeOut
      }`}
    >
      <Image
        src={images[current]}
        className={classes.img}
        alt="Slideshow"
        priority
      />
    </div>
  );
}
