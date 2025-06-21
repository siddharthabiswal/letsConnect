import { useState } from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";

import ImageCarousel from "../Carousel/ImageCarousel";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";

import "./Home.css";
import UserForm from "../DataEntryDashboard/DataEntryDashboard";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="HomeContainer">
            <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <ServicesDisplay />
            <ImageCarousel />
            <UserForm />
        </div>
    );
};

export default Home;
