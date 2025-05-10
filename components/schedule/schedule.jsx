import classes from "./schedule.module.css";
import Link from "next/link";

export default function Schedule() {
  const schedule = [
    {
      date: "15-05-2025",
      city: "Tbilisi, Georgia",
      url: "https://www.facebook.com/photo.php?fbid=122167395254359425&set=a.122096175458359425&type=3&mibextid=wwXIfr&rdid=ousA3hNT1afUgmXJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F194NBnc2rB%2F%3Fmibextid%3DwwXIfr#",
    },
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
              <Link
                href={concerts.url}
                className={classes.ticket}
                target="_blank"
              >
                Tickets
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
