import classes from "./contact.module.css";
import Image from "next/image";
import image from "@/public/image3.jpg";

export default function Contact() {
  return (
    <section className={classes.contactSection} id="Contact">
      <div className={classes.imgContainer}>
        <Image
          className={classes.img}
          src={image}
          alt="Contact"
          fill
          priority
        />
      </div>
      <div className={classes.container}>
        <h2 className={classes.header}>Contact Lizi</h2>
        <form
          action="https://formsubmit.co/liziramishvilicello@gmail.com"
          method="POST"
          className={classes.form}
        >
          <div className={classes.group}>
            <label className={classes.label}>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className={classes.input}
            />
          </div>

          <div className={classes.group}>
            <label className={classes.label}>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className={classes.input}
            />
          </div>

          <div className={classes.group}>
            <label className={classes.label}>Message</label>
            <textarea
              name="message"
              placeholder="Type your message..."
              required
              className={classes.textarea}
            />
          </div>

          <button type="submit" className={classes.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
