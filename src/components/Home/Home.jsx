import { useState } from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import ImageCarousel from "../Carousel/ImageCarousel";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import "./Home.css";
import categories from "../../data/categories";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="HomeContainer">
      <div className="Header">
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} onSearch={setSearchTerm} />
      </div>

      <div className="ContentArea">
        {searchTerm ? (
          <ServicesDisplay categories={filteredCategories} />
        ) : (
          <>
            <ImageCarousel />
            <ServicesDisplay categories={filteredCategories} />
          </>
        )}
      </div>

      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Home;
