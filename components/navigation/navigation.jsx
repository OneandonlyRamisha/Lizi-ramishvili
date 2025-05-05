"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const activePath = usePathname();
  const navItems = ["Home", "About", "Schedule", "Contact"];

  return (
    <>
      <header className={styles.header}>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`${styles.burgerButton} ${open ? styles.open : ""}`}
        >
          <div className={styles.burgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <nav className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const href = `#${item}`;
            const isActive = activePath === href;
            return (
              <li
                key={item}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
              >
                <Link
                  className={styles.navLink}
                  href={href}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
