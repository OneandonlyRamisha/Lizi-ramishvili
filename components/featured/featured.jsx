import classes from "./featured.module.css";
import Image from "next/image";

import berlin from "@/public/berlin.png";
import carnegie from "@/public/carnegie-hall.svg";
import tsinandali from "@/public/Forbes_logo.svg";
import dersden from "@/public/dresdena.png";

import kfr from "@/public/kfr.jpg";

export default function Featured() {
  return (
    <div className={classes.featuredContainer}>
      <h2 className={classes.header}>Featured In</h2>

      <div className={classes.logosContainer}>
        <Logos url={tsinandali} />
        <Logos url={dersden} />
        <Logos url={berlin} />
        <Logos url={carnegie} />
      </div>
    </div>
  );
}

function Logos({ url }) {
  return <Image className={classes.image} src={url} />;
}
