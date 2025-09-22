import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import ImageCarousel from "../Carousel/ImageCarousel";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [menuOpen]);



  return (
    <div className="HomeContainer">
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
      <ImageCarousel />
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <ServicesDisplay />
    </div>
  );
};

export default Home;
