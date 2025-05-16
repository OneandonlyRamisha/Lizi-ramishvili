import { getSchedule } from "@/lib/getSchedule";
import classes from "./schedule.module.css";
import Link from "next/link";

export default async function Schedule() {
  const schedule = await getSchedule();

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
