import Contact from "@/components/contact/contact";
import Featured from "@/components/featured/featured";
import HomePageAbout from "@/components/homePageAbout/homePageAbout";
import HomeSection from "@/components/homeSection/homeSection";
import Navigation from "@/components/navigation/navigation";
import Schedule from "@/components/schedule/schedule";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <>
      {/* <Welcome /> */}
      <HomeSection />
      <Featured />
      <HomePageAbout />
      <Schedule />
      <Contact />
    </>
  );
}
