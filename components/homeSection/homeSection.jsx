import Navigation from "../navigation/navigation";
import classes from "./homeSection.module.css";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className={classes.heroSection} id="Home">
      <Navigation />
      <video
        className={classes.bgVideo}
        autoPlay
        muted
        loop
        id="bg-video"
        style={{ pointerEvents: "none" }}
      >
        <source src="/bgVid.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className={classes.highlight}></div>

      <div className={classes.textContainer}>
        <h1 className={classes.header}>Lizi Ramishvili</h1>
        <h2 className={classes.subHeader}>Georgian Cellist & Public Figure</h2>

        <div className={classes.ctaContainer}>
          <Link className={classes.ctaSecondary} href={"#About"}>
            About Me
          </Link>
          <Link className={classes.cta} href={"#Contact"}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
