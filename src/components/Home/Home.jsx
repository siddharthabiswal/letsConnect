import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import ImageCarousel from "../Carousel/ImageCarousel";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import "./Home.css";
import categories from "../../data/categories";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //     // document.body.style.height = "100%";
  //   } else {
  //     document.body.style.overflow = "";
  //     document.body.style.height = "";
  //   }
  //   return () => {
  //     document.body.style.overflow = "";
  //     document.body.style.height = "";
  //   };
  // }, [menuOpen]);




  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden"; // ✅ lock scroll
  //   } else {
  //     document.body.style.overflow = ""; // ✅ restore default
  //   }

  //   return () => {
  //     document.body.style.overflow = ""; // cleanup
  //   };
  // }, [menuOpen]);

  // Filter categories
  const filteredCategories = categories.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const home = document.querySelector(".HomeContainer");

    if (menuOpen) {
      // lock the scroll on the actual scrollable container
      home?.classList.add("locked");
    } else {
      home?.classList.remove("locked");
    }

    return () => {
      home?.classList.remove("locked");
    };
  }, [menuOpen]);


  return (
    <div className="HomeContainer">
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} onSearch={setSearchTerm} />
      <ImageCarousel />
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <ServicesDisplay categories={filteredCategories} />
    </div>
  );
};

export default Home;
