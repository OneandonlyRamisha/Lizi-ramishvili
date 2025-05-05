import classes from "./schedule.module.css";
import Link from "next/link";

export default function Schedule() {
  const schedule = [
    { date: "2025-05-18", city: "Berlin, Germany", url: "#" },
    { date: "2025-06-02", city: "Madrid, Spain", url: "#" },

    { date: "2025-06-18", city: "Rome, Italy", url: "#" },
    { date: "2025-06-26", city: "New York, USA", url: "#" },
    { date: "2025-07-04", city: "Tokyo, Japan", url: "#" },
    { date: "2025-07-12", city: "Zurich, Switzerland", url: "#" },
    { date: "2025-07-20", city: "London, UK", url: "#" },
  ];

  return (
    <section className={classes.scheduleSection} id="Schedule">
      <div className={classes.scheduleContainer}>
        <h2 className={classes.header}>Schedule</h2>
        {schedule.map((concerts) => (
          <ul className={classes.concertList}>
            <li className={classes.concert}>
              <p className={classes.date}>{concerts.date}</p>
              <p className={classes.place}>{concerts.city}</p>
              <Link href={concerts.url} className={classes.ticket}>
                Tickets
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
