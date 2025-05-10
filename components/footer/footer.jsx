import { FaFacebook, FaInstagram } from "react-icons/fa";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.credit}>
          <h5 className={classes.creditHeader}>Designed by:&nbsp;</h5>
          <a
            className={classes.designer}
            href="https://ramiforza.com/"
            target="_blank"
          >
            {" "}
            <h5>www.ramiforza.com</h5>
          </a>
        </div>
        <h5 className={classes.copyRight}>
          &copy; All rights reserved 2025 - Lizi Ramishvili
        </h5>
        <div className={classes.social}>
          <h5 className={classes.socialHeader}>Follow Me:</h5>
          <div className={classes.socials}>
            <a
              href="https://www.facebook.com/p/Lizi-Ramishvili-100080192833048/"
              target="_blank"
            >
              {<FaFacebook />}
            </a>
            <a
              href="https://www.instagram.com/lizi_ramishvili_/"
              target="_blank"
            >
              {<FaInstagram />}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
