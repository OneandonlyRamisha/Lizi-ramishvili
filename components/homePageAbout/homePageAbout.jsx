import ImageChanger from "./imageChanger";
import classes from "./homePageAbout.module.css";
import Link from "next/link";
import Navigation from "../navigation/navigation";

export default function HomePageAbout() {
  return (
    <section className={classes.aboutSection} id="About">
      <h2 className={classes.header}>About Lizi Ramishvili</h2>
      <div className={classes.aboutContentContainer}>
        <div className={classes.textContainer}>
          <p>
            Born in Tbilisi, Georgia, in 1997, Lizi Ramishvili began her journey
            with the cello at the tender age of seven. Under the guidance of
            Professor Tamara Gabarashvili at the Paliashvili Central Music
            School, she quickly showcased her prodigious talent, delivering her
            first public performance just over a year into her studies.
          </p>
          <p>
            Lizi's dedication to her craft led her to the Pre-College division
            of the Kronberg Academy in Germany, where she studied under the
            esteemed cellist Frans Helmerson. She further honed her skills at
            the Haute École de Musique de Genève in Switzerland. In 2017, she
            was accepted into the Reina Sofía School of Music in Madrid,
            studying under Professor Jens Peter Maintz. Her studies there were
            supported by a scholarship from the Fundación Albéniz, which also
            provided her with a Fernando Solar González cello as part of an
            instrument scholarship.
          </p>
          <p>
            Lizi's talent has been recognized in numerous international
            competitions. She secured in Young age the First Prize and the
            Golden Nutcracker at the Nutcracker International TV Competition in
            Russia and clinched the Grand Prize at the Renaissance International
            Competition in Armenia. In 2012, she represented Georgia in the
            Classical Eurovision Competition. Her achievements were further
            acknowledged in 2017 when she received the Zhvania Tsinandali Award
            for Young Scholars and Artists. Additionally, she has been a
            recipient of full scholarships from the foundations of Mstislav
            Rostropovich, Nikolai Miaskovsky, Boris Pergamenschikov and Boris
            Ustinov.
          </p>
          <p>
            Lizi's performance career is marked by appearances at some of the
            world's most prestigious venues and festivals. She has graced the
            stages of Carnegie Hall in New York and the Berlin Konzerthaus. Her
            festival engagements include the Rheingau Music Festival, Ruhr Piano
            Festival, Musica Mundi, Young Euro Classic, Kronberg Academy
            Festival, Energy for Life, Arpeggione, Peregrinos Musicales,
            Schubertiade Festival, Al Bustan, the International Mstislav
            Rostropovich Festival, the Moscow Meets Friends festival and etc.
          </p>
          <p>
            Throughout her career, Lizi has collaborated with a host of renowned
            musicians, including Ivry Gitlis, Yuri Bashmet, Renaud Capuçon,
            Khatia Buniatishvili, Gvantsa Buniatishvili, Kazuki Yamada,
            Gianandrea Noseda, Pietari Inkinen and other. She has performed with
            esteemed orchestras such as the Deutsche Radio Philharmonie
            Saarbrücken Kaiserslautern, Real Filharmonía de Galicia, Arpeggione
            Hohenems Chamber Orchestra, Tbilisi Symphony Orchestra, Georgian
            Philharmonic Orchestra, National Chamber Orchestra of Armenia,
            National Symphony Orchestra of Azerbaijan, Novaya Rossiya State
            Symphony Orchestra, Tchaikovsky Symphony Orchestra Pan-Causian South
            orchestra and etc.
          </p>

          <p>
            In recognition of her contributions to the arts, Lizi was featured
            in Forbes Georgia's "30 Under 30" list in the Culture & Style
            category in 2021.
          </p>
          <div className={classes.ctaContainer}>
            <a
              href={"https://www.youtube.com/watch?v=fAOaP7nDrzM"}
              target="_blank"
              className={classes.cta}
            >
              Know More
            </a>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <ImageChanger />
        </div>
      </div>
    </section>
  );
}
